# Generated by Django 2.0.3 on 2018-05-11 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webgallery', '0004_auto_20180511_1610'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='slider',
            name='picture',
        ),
        migrations.AddField(
            model_name='slider',
            name='picture',
            field=models.ManyToManyField(to='webgallery.Picture'),
        ),
    ]
