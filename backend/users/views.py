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

from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework.authtoken.models import Token

class UserLogin(generics.ListCreateAPIView):
    def post(self, request, *args, **kwargs):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(email=email, password=password)
        if not user:
            message = "Please enter a correct username and password."
            return Response({"failed": message}, status=HTTP_401_UNAUTHORIZED)

        # token, _ = Token.objects.get_or_create(user=user)
        return Response({"status":'success',"id": user.id,"email": user.email,'name':user.username})


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