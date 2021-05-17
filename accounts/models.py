from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.cache import cache
from config import settings


class CustomUserManager(BaseUserManager):
    def create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError('Username field is required.')

        user = self.model(
            username=self.model.normalize_username(username),
            **extra_fields,
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self.create_user(username, password, **extra_fields)


# Create your models here.
class CustomUser(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(unique=True, max_length=32)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

# class FriendshipManager(models.Manager):
#     def add_friend(self):
#         pass
#     def delete_friend(self):
#         pass
#     def are_friends(self, user1, user2):
#         pass
#
#
# class Friend(models.Model):
#     from_user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         models.CASCADE,
#         related_name='from_user'
#     )
#     to_user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         models.CASCADE,
#         related_name='to_user'
#     )
#
#     objects = FriendshipManager()
#
#     def __str__(self):
#         pass
