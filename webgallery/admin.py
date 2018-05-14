from django.contrib import admin

from .models import Category, Picture, Slider, Project, Appearence

admin.site.register(Category)
admin.site.register(Picture)
admin.site.register(Slider)
admin.site.register(Project)
admin.site.register(Appearence)

# Register your models here.
