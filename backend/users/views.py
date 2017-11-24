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

class LoggedUserList(generics.ListCreateAPIView):
    """
    API to list all the users
    """
    # queryset = User.objects.filter(is_active=1).order_by('-date_joined')
    print "user list>>>>>>>>>>>>>>>>>>"
    queryset = User.objects.all()
    serializer_class = UserSerializer
    model = User

class LoggedUserList_3(generics.ListCreateAPIView):
    model = User
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        print "GGGGGGGGGGGGG"
        email = request.data['email']
        password = request.data['password']

        queryset = User.objects.all()
        print "user list>>>>>>>>>>>>>>>>>>",queryset.query
        return  Response(UserSerializer(queryset, many=True).data)