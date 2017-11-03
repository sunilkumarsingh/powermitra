# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from users.serializers import UserSerializer

from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

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
    API endpoint that allows users to be viewed or edited.
    """
    
    queryset = User.objects.all().order_by('-date_joined')
    print ">>>>>>>>>>>>>>",queryset.query
    serializer_class = UserSerializer

