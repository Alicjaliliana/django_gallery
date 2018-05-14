from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Project
from .serializers import Project, Slider

def index(request):
   return HttpResponse("Dupa")

def gallery(request):
   projects = Project.objects.all()
   context = {'projects': projects}
   return render (request, 'webgallery/index.html', context)

def project(request, project_id):
   proj = get_object_or_404(Project, id=project_id)
   proj_slider = Project.get_slider(proj)
   pictures = proj_slider.get_pictures()
   category = Project.get_category(proj)
   context = {'project': proj, 'proj_slider': proj_slider, 'pictures': pictures, 'category': category}
   return render(request, 'webgallery/project.html', context)
