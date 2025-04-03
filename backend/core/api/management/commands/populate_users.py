from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.utils import timezone
import random

User = get_user_model()


class Command(BaseCommand):
    help = "Populates the database with sample users"

    def handle(self, *args, **options):
        # Sample user data
        users_data = [
            {
                "username": "admin",
                "email": "admin@example.com",
                "password": "admin123",
                "first_name": "أحمد",
                "last_name": "محمد",
                "phone": "0501234567",
                "birth_date": timezone.now().date(),
                "gender": "male",
                "is_staff": True,
                "is_superuser": True,
            },
            {
                "username": "user1",
                "email": "user1@example.com",
                "password": "user123",
                "first_name": "فاطمة",
                "last_name": "علي",
                "phone": "0502345678",
                "birth_date": timezone.now().date(),
                "gender": "female",
                "is_staff": False,
                "is_superuser": False,
            },
            {
                "username": "user2",
                "email": "user2@example.com",
                "password": "user123",
                "first_name": "خالد",
                "last_name": "سعد",
                "phone": "0503456789",
                "birth_date": timezone.now().date(),
                "gender": "male",
                "is_staff": False,
                "is_superuser": False,
            },
            {
                "username": "user3",
                "email": "user3@example.com",
                "password": "user123",
                "first_name": "نور",
                "last_name": "عبدالله",
                "phone": "0504567890",
                "birth_date": timezone.now().date(),
                "gender": "female",
                "is_staff": False,
                "is_superuser": False,
            },
            {
                "username": "user4",
                "email": "user4@example.com",
                "password": "user123",
                "first_name": "محمد",
                "last_name": "عبدالرحمن",
                "phone": "0505678901",
                "birth_date": timezone.now().date(),
                "gender": "male",
                "is_staff": False,
                "is_superuser": False,
            },
        ]

        # Create users
        for user_data in users_data:
            if not User.objects.filter(username=user_data["username"]).exists():
                user = User.objects.create_user(
                    username=user_data["username"],
                    email=user_data["email"],
                    password=user_data["password"],
                    first_name=user_data["first_name"],
                    last_name=user_data["last_name"],
                    phone=user_data["phone"],
                    birth_date=user_data["birth_date"],
                    gender=user_data["gender"],
                    is_staff=user_data["is_staff"],
                    is_superuser=user_data["is_superuser"],
                )
                self.stdout.write(self.style.SUCCESS(f"Created user: {user.username}"))
            else:
                self.stdout.write(
                    self.style.WARNING(f"User already exists: {user_data['username']}")
                )

        self.stdout.write(self.style.SUCCESS("Successfully populated users"))
