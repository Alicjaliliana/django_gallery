from django.contrib import admin

from .models import Category, Picture, Gallery, Appearence

admin.site.register(Category)
admin.site.register(Picture)
admin.site.register(Gallery)
admin.site.register(Appearence)

# Register your models here.
