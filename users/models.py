# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User as AuthUser

# Create your models here.

class UserType(models.Model):
    id = models.BigIntegerField(primary_key=True)
    user_type = models.CharField(unique=True, max_length=2, blank=True, null=True)
    name = models.CharField(max_length=64, blank=True, null=True)
    is_active = models.CharField(max_length=1, blank=True, null=True)
    created_by = models.CharField(max_length=64, blank=True, null=True)
    create_date = models.DateTimeField(blank=True, null=True)
    updated_by = models.CharField(max_length=64, blank=True, null=True)
    update_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'pm_user_type'

        def __str__(self):
            return self.name


class User(models.Model):
    id = models.BigIntegerField(primary_key=True)
    login_id = models.CharField(unique=True, max_length=64, blank=True, null=True)
    is_active = models.CharField(max_length=1, blank=True, null=True)
    user_type = models.ForeignKey('UserType', models.DO_NOTHING)
    auth_user_id = models.OneToOneField(AuthUser, models.DO_NOTHING, db_column="auth_user_id", related_name='pmUser')
    created_by = models.CharField(max_length=64, blank=True, null=True)
    create_date = models.DateTimeField(blank=True, null=True)
    updated_by = models.CharField(max_length=64, blank=True, null=True)
    update_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'pm_user'
