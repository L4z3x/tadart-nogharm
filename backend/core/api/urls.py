from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    AssociationViewSet,
    ActivityViewSet,
    AccessRequestViewSet,
    AssociationMembershipViewSet,
)

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"associations", AssociationViewSet)
router.register(r"activities", ActivityViewSet)
router.register(r"access-requests", AccessRequestViewSet)
router.register(r"memberships", AssociationMembershipViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("auth/", include("rest_framework.urls")),
]
