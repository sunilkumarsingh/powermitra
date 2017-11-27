# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-10-24 12:41
from __future__ import unicode_literals

from django.db import migrations
from django.core.management import call_command

def loadfixture(apps, schema_editor):
    call_command('loaddata', 'initial_data.json')


class Migration(migrations.Migration):

    dependencies = [
        ('masters', '0012_auto_20171024_1235'),
    ]

    operations = [
        migrations.RunPython(loadfixture),
    ]
