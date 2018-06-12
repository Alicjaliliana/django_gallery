from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import mixins, generics

from .models import Gallery
from .serializers import GallerySerializer

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

#def index(request):
#   return HttpResponse("Dupa")
#
#def gallery_list(request):
#   galleries = Gallery.objects.all()
#   context = {'galleries': galleries}
#   return render (request, 'webgallery/index.html', context)
#
#def gallery (request, gallery_id):
#   gal = get_object_or_404(Gallery, id=gallery_id)
#   pictures = gal.get_pictures()
#   category = Gallery.get_category(gal)
#   context = {'gallery': gal, 'pictures': pictures, 'category': category}
#   return render(request, 'webgallery/project.html', context)
