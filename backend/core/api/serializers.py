from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Association, Activity, AccessRequest, AssociationMembership

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "phone",
            "birth_date",
            "gender",
        ]
        read_only_fields = ["id"]


class AssociationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Association
        fields = ["id", "name", "description", "banner", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            "id",
            "association",
            "title",
            "description",
            "date",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]


class AccessRequestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    association = AssociationSerializer(read_only=True)

    class Meta:
        model = AccessRequest
        fields = ["id", "user", "association", "status", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]


class AssociationMembershipSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    association = AssociationSerializer(read_only=True)

    class Meta:
        model = AssociationMembership
        fields = ["id", "user", "association", "role", "joined_at"]
        read_only_fields = ["id", "joined_at"]
