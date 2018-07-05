from django.db import models
from django.utils import timezone

class Category(models.Model):
   name = models.CharField(max_length = 100, unique=True)
   
   def __str__ (self):
      return "%s" %(self.name)
   
   class Meta:
      verbose_name_plural = "Categories"


class Picture (models.Model):
   title = models.CharField(max_length = 200)
   src = models.ImageField(upload_to = "images/", blank=True)
   
   def __str__ (self):
      return "%s" % (self.title)


class Gallery (models.Model):
   title = models.CharField(max_length = 200)
   creation_date = models.DateField(auto_now_add = True)
   category = models.ManyToManyField(Category, help_text="Hold Control Key or Command Key to select more than one.")
   feature_img = models.ForeignKey(Picture, on_delete=models.CASCADE, related_name = "Thumbnail", default="1", help_text="Pick a thumbnail for your gallery.")
   pictures = models.ManyToManyField(Picture, help_text="Select pictures. Hold Control Key to select more than one.")
   update_date = models.DateField(auto_now = True, blank = False)
   
   def __str__ (self):
      return "%s" % (self.title)
   
   def get_category(self):
      return self.category.all()
   
   def get_pictures(self):
      return self.pictures.all()
   
   class Meta:
      verbose_name_plural = "Galleries"
      

class Template(models.Model):
   name = models.CharField(max_length = 200)
   marker = models.CharField(max_length = 200)
   
   def __str__ (self):
      return "%s" %(self.name)
   
   
class Appearence (models.Model):
   template = models.ForeignKey(Template, on_delete=models.CASCADE, related_name = "Template", default="1")
   lightbox = models.CharField(max_length = 50)
   border = models.IntegerField(default = 0)
   borderrad = models.IntegerField(default = 0)
   current = models.CharField(max_length = 50)
   bckgcolor = models.CharField(max_length = 50)
   fontcolor = models.CharField(max_length = 50)
   
   def __str__ (self):
      return "%s" % (self.template)
   