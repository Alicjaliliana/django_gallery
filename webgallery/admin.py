from django.contrib import admin

from .models import Category, Picture, Gallery, Appearence, Template

admin.site.register(Category)
admin.site.register(Picture)
admin.site.register(Gallery)
admin.site.register(Appearence)
admin.site.register(Template)

# Register your models here.
