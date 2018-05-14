# Generated by Django 2.0.3 on 2018-05-07 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webgallery', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='picture',
            name='slider',
        ),
        migrations.AddField(
            model_name='slider',
            name='picture',
            field=models.ManyToManyField(to='webgallery.Picture'),
        ),
    ]
