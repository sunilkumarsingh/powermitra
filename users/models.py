# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

# Create your models here.

class UserType(models.Model):
    user_type = models.CharField(unique=True, max_length=64, blank=True, null=True)
    is_active = models.CharField(max_length=1, blank=True, null=True)
    created_by = models.CharField(max_length=64, blank=True, null=True)
    create_date = models.DateTimeField(blank=True, null=True)
    updated_by = models.CharField(max_length=64, blank=True, null=True)
    update_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'pm_user_type'

        def __str__(self):
            return self.name


class User(AbstractUser):
    user_type = models.ForeignKey('UserType', models.DO_NOTHING, blank=True, null=True)
    phone_regex = RegexValidator(regex='/^(\+\d{1,3}[- ]?)?\d{10}$/',
                                 message="Mobile number must be entered in the format: '+999999999'. Up to 10 digits allowed.")
    mobiles = models.CharField(max_length=10, validators=[phone_regex], blank=True)
    city = models.CharField(max_length=200, blank=True, null=True)
    state = models.CharField(max_length=200, blank=True, null=True)
    # auth_user_id = models.OneToOneField(AuthUser, models.DO_NOTHING, db_column="auth_user_id", related_name='pmUser')
    created_by = models.CharField(max_length=64, blank=True, null=True)
    create_date = models.DateTimeField(blank=True, null=True)
    updated_by = models.CharField(max_length=64, blank=True, null=True)
    update_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'pm_user'
