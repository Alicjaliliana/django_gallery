from django.db import models
from django.utils import timezone

class Category(models.Model):
   name = models.CharField(max_length = 100)
   
   def __str__ (self):
      return "%s" %(self.name)
   
   class Meta:
      verbose_name_plural = "Categories"


class Picture (models.Model):
   title = models.CharField(max_length = 200)
   source = models.CharField(max_length = 200)
   
   def __str__ (self):
      return "%s" % (self.title)

   
class Slider (models.Model):
   title = models.CharField(max_length = 200)
   picture = models.ManyToManyField(Picture)
   
   def __str__ (self):
      return "%s" % (self.title)
   
   def get_pictures(self):
      return self.picture.all()


class Project (models.Model):
   title = models.CharField(max_length = 200)
   date = models.DateTimeField(auto_now_add = True)
   category = models.ManyToManyField(Category)
   thumbnail = models.ForeignKey(Picture, on_delete=models.CASCADE)
   slider = models.OneToOneField(Slider, on_delete=models.CASCADE)
   update_date = models.DateTimeField(auto_now = True, blank = True)
   
   def __str__ (self):
      return "%s" % (self.title)
   
   def get_category(self):
      return self.category.all()
   
   def get_slider(self):
      return self.slider
   
   def was_added_recently(self):
      return self.date >= timezone.now() - datetime.timedelta(days=7)
   
class Appearence (models.Model):
   title = models.CharField(max_length = 200)
   lightbox = models.CharField(max_length = 50)
   border = models.IntegerField(default = 0)
   borderrad = models.IntegerField(default = 0)
   current = models.CharField(max_length = 50)
   bckgcolor = models.CharField(max_length = 50)
   fontcolor = models.CharField(max_length = 50)
   
   def __str__ (self):
      return "%s" % (self.title)
   