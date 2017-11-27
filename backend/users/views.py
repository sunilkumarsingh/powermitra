# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from rest_framework.response import Response
from users.serializers import UserSerializer, UserTypeSerializer

from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from models import User, UserType

class LoggedUserList(generics.ListCreateAPIView):
    model = User
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        print "call user list using post"
        email = request.data['email']
        password = request.data['password']

        queryset = User.objects.all()
        print queryset.query
        return  Response(UserSerializer(queryset, many=True).data)