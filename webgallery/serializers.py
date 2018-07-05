from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from webgallery.models import Category, Picture, Gallery, Template, Appearence

class CategorySerializer(serializers.ModelSerializer):
        
   class Meta:
      model = Category
      fields = ("id", "name")

   def create(self, validated_data):
      return Category.objects.create(**validated_data)

   def update(self, instance, validated_data):
      instance.name = validated_data.get('name', instance.name)
      instance.save()
      return instance
   
         
class PictureSerializer(serializers.ModelSerializer):
   
   class Meta:
      model = Picture
      fields = ("id", "title", "source")
      
   def create(self, validated_data):
      return Picture.objects.create(**validated_data)
   
   def update(self, instance, validated_data):
      instance.title = validated_data.get('title', instance.title)
      instance.save()
      return instance
   
   
class GallerySerializer(serializers.ModelSerializer):
   category = serializers.SlugRelatedField(many = True, read_only = True, slug_field = "name")
   pictures = PictureSerializer(many = True)
   thumbnail = serializers.SlugRelatedField(read_only = True, slug_field = "source")
   
   class Meta:
      model = Gallery
      fields = ("id", "title", "creation_date", "thumbnail", "pictures", "category")
      read_only_fields = ("creation_date", "update_date")
      
   def create(self, validate_data):
      return Gallery.objects.create(**validated_data)
   
   def update(self, instance, validate_data):
      instance.category = validate_data.get('category', instance.category)
      instance.slider = validate_data.get('pictures', instance.slider)
      instance.title = validate_data.get('title', instance.title)
      instance.thumbnail = validate_data.get('thumbnail', instance.thumbnail)
      instance.save()
      return instance
   

class TemplateSerializer(serializers.ModelSerializer):
   
   class Meta:
      model = Template
      fields = ("id", "name", "marker")
   
   def update(self, instance, validate_data):
      instance.category = validate_data.get('category', instance.category)
      instance.slider = validate_data.get('pictures', instance.slider)
      instance.title = validate_data.get('title', instance.title)
      instance.thumbnail = validate_data.get('thumbnail', instance.thumbnail)
      instance.save()
      return instance

   
class AppearenceSerializer(serializers.ModelSerializer):
   template = serializers.SlugRelatedField(many = False, read_only = True, slug_field = "name")
   
   class Meta:
      model = Appearence
      fields = ("id", 'template', 'lightbox', 'border', 'borderrad', 'current', 'bckgcolor', 'fontcolor')
   
   def create(self, validated_data):
      return Appearence.objects.create(**validated_data)      
   
   def update (self, instance, validated_data):
      instance.template = validate_data.get('template', instance.template)
      instance.lightbox = validate_data.get('lightbox', instance.lightbox)
      instance.border = validate_data.get('border', instance.border)
      instance.borderrad = validate_data.get('borderrad', instance.borderrad)
      instance.current = validate_data.get('current', instance.current)
      instance.bckgcolor = validate_data.get('bckgcolor', instance.bckgcolor)
      instance.fontcolor = validate_data.get('fontcolor', instance.fontcolor)
      instance.save()
      return instance