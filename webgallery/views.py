from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Gallery
from .serializers import Gallery

def index(request):
   return HttpResponse("Dupa")

def portfolio(request):
   galleries = Gallery.objects.all()
   context = {'galleries': galleries}
   return render (request, 'webgallery/index.html', context)

def gallery (request, gallery_id):
   gal = get_object_or_404(Gallery, id=gallery_id)
   pictures = gal.get_pictures()
   category = Gallery.get_category(gal)
   context = {'gallery': gal, 'pictures': pictures, 'category': category}
   return render(request, 'webgallery/project.html', context)
