from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Association, Activity, AccessRequest, AssociationMembership
from .serializers import (
    UserSerializer,
    AssociationSerializer,
    ActivitySerializer,
    AccessRequestSerializer,
    AssociationMembershipSerializer,
)

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return User.objects.all()
        return User.objects.filter(id=self.request.user.id)


class AssociationViewSet(viewsets.ModelViewSet):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=["post"])
    def request_access(self, request, pk=None):
        association = self.get_object()
        access_request, created = AccessRequest.objects.get_or_create(
            user=request.user, association=association, defaults={"status": "pending"}
        )
        if created:
            return Response(
                {"status": "request created"}, status=status.HTTP_201_CREATED
            )
        return Response({"status": "request already exists"}, status=status.HTTP_200_OK)


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Activity.objects.all()
        return Activity.objects.filter(association__members=user)


class AccessRequestViewSet(viewsets.ModelViewSet):
    queryset = AccessRequest.objects.all()
    serializer_class = AccessRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return AccessRequest.objects.all()
        return AccessRequest.objects.filter(user=user)

    @action(detail=True, methods=["post"])
    def approve(self, request, pk=None):
        access_request = self.get_object()
        if (
            not request.user.is_staff
            and not access_request.association.members.filter(
                associationmembership__role="admin", user=request.user
            ).exists()
        ):
            return Response(
                {"error": "Permission denied"}, status=status.HTTP_403_FORBIDDEN
            )

        access_request.status = "approved"
        access_request.save()

        AssociationMembership.objects.create(
            user=access_request.user,
            association=access_request.association,
            role="member",
        )

        return Response({"status": "approved"})

    @action(detail=True, methods=["post"])
    def reject(self, request, pk=None):
        access_request = self.get_object()
        if (
            not request.user.is_staff
            and not access_request.association.members.filter(
                associationmembership__role="admin", user=request.user
            ).exists()
        ):
            return Response(
                {"error": "Permission denied"}, status=status.HTTP_403_FORBIDDEN
            )

        access_request.status = "rejected"
        access_request.save()
        return Response({"status": "rejected"})


class AssociationMembershipViewSet(viewsets.ModelViewSet):
    queryset = AssociationMembership.objects.all()
    serializer_class = AssociationMembershipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return AssociationMembership.objects.all()
        return AssociationMembership.objects.filter(user=user)
