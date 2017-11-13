from django.contrib.auth.models import User, Group
from rest_framework import serializers
from models import User, UserType


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__') #('username', 'email')


class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = ('__all__')