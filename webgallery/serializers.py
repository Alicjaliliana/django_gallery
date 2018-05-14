from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from webgallery.models import Category, Picture, Slider, Project, Appearence

class CategorySerializer(serializers.ModelSerializer):
        
   class Meta:
      model = Category
      fields = ("name")

   def create(self, validated_data):
      return Category.objects.create(**validated_data)

   def update(self, instance, validated_data):
      instance.name = validated_data.get('name', instance.name)
      instance.save()
      return instance
         
class PictureSerializer(serializers.ModelSerializer):
   
   class Meta:
      model = Picture
      fields = ("title")
      read_only_fields = ("source")
      
   def create(self, validated_data):
      return Picture.objects.create(**validated_data)
   
   def update(self, instance, validated_data):
      instance.title = validated_data.get('title', instance.title)
      instance.save()
      return instance
   
   
class SliderSerializer(serializers.ModelSerializer):
   picture = PictureSerializer(read_only = True, many = True)
   
   class Meta:
      model = Slider
      fields = ("title", "picture")
      
   def create(self, validated_data):
      return Slider.objects.create(**validated_data)
   
   def update (self, instance, validated_data):
      instance.title = validated_data.get('title', instance.title)
      instance.save()
      return instance
   
   
class ProjectSerializer(serializers.ModelSerializer):
   category = CategorySerializer(many = True)
   slider = SliderSerializer(required = True)
   thumbnail = serializers.RelatedField(queryset = Picture.objects.all(), source = "Picture")
   
   class Meta:
      model = Project
      fields = ("title", "date", "thumbnail", "slider", "category")
      read_only_fields = ("date", "update_date")
      
   def create(self, validate_data):
      return Project.objects.create(**validated_data)
   
   def update(self, instance, validate_data):
      instance.category = validate_data.get('category', instance.category)
      instance.slider = validate_data.get('slider', instance.slider)
      instance.title = validate_data.get('title', instance.title)
      instance.thumbnail = validate_data.get('thumbnail', instance.thumbnail)
      instance.save()
      return instance

   
class AppearenceSerializer(serializers.ModelSerializer):
   
   class Meta:
      model = Appearence
      fields = ('title', 'lightbox', 'border', 'borderrad', 'current', 'bckgcolor', 'fontcolor')
   
   def create(self, validated_data):
      return Appearence.objects.create(**validated_data)      
   
   def update (self, instance, validated_data):
      instance.title = validate_data.get('title', instance.title)
      instance.lightbox = validate_data.get('lightbox', instance.lightbox)
      instance.border = validate_data.get('border', instance.border)
      instance.borderrad = validate_data.get('borderrad', instance.borderrad)
      instance.current = validate_data.get('current', instance.current)
      instance.bckgcolor = validate_data.get('bckgcolor', instance.bckgcolor)
      instance.fontcolor = validate_data.get('fontcolor', instance.fontcolor)
      instance.save()
      return instance