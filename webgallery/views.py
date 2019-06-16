from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import mixins, generics

from .models import Gallery, Template, Appearence
from .serializers import GallerySerializer, TemplateSerializer, AppearenceSerializer

class templates (mixins.ListModelMixin,
                mixins.CreateModelMixin,
                generics.GenericAPIView):
   
   queryset = Appearence.objects.all()
   serializer_class = AppearenceSerializer
   
   def get(self, request, *args, **kwargs):
      return self.list(request, *args, **kwargs)
   
   def post (self, request, *args, **kwargs):
      return self.create(request, *args, **kwargs)
   

class gallery_list (mixins.ListModelMixin, 
                   mixins.CreateModelMixin,
                   generics.GenericAPIView):
   
   queryset = Gallery.objects.all()
   serializer_class = GallerySerializer
   
   def get(self, request, *args, **kwargs): 
      return self.list(request, *args, **kwargs)
   
   def post(self, request, *args, **kwargs): 
      return self.create(request, *args, **kwargs)
   

class gallery_detail(mixins.RetrieveModelMixin,
               mixins.UpdateModelMixin,
               mixins.DestroyModelMixin,
               generics.GenericAPIView):

   queryset = Gallery.objects.all()
   serializer_class = GallerySerializer

   def get(self, request, *args, **kwargs):
      return self.retrieve(request, *args, **kwargs)

   def put(self, request, *args, **kwargs):
      return self.update(request, *args, **kwargs)

   def delete(self, request, *args, **kwargs):
      return self.destroy(request, *args, **kwargs)


def index(request):
   gallery = "ckolowiek"
   return render(request, 'hello.html', {'gallery': gallery})

def getSerializedGallery(request, gallery_id=0): 
   from django.core import serializers
   import json
   data = serializers.serialize('json', Gallery.objects.filter(id = gallery_id))
   struct = json.loads(data)
   data = json.dumps(struct[0])
   return HttpResponse(data)

