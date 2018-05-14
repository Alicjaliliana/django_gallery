# Generated by Django 2.0.3 on 2018-05-11 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webgallery', '0003_auto_20180510_1925'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='slider',
            name='picture',
        ),
        migrations.AddField(
            model_name='slider',
            name='picture',
            field=models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='webgallery.Picture'),
        ),
    ]
