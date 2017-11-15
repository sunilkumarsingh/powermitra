# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from users.serializers import UserSerializer, UserTypeSerializer

from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from models import User, UserType

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the users index.")


class Dashboard(LoginRequiredMixin, TemplateView):
    """
        Home page for user portal
    """
    template_name = "dashboard.html"
    login_url = '/login/'


class UserList(generics.ListCreateAPIView):
    """
    API to list all the users
    """
    # queryset = User.objects.filter(is_active=1).order_by('-date_joined')
    queryset = User.objects.filter(is_active=1).order_by('-create_date')
    serializer_class = UserSerializer
    model = User

class UserTypeList(generics.ListCreateAPIView):
    """
    API to list type of users
    """
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API to get the details of a user by id
    """
    model = User
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
