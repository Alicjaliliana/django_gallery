from django.urls import path, re_path, include
from rest_framework import routers

from . import views

router = routers.SimpleRouter()

app_name = 'gallery'
urlpatterns = [
   re_path(r'^api/v1/', include(router.urls)),
   path('', views.index, name = "index"),
   path('gallery/', views.gallery, name = "gallery"),
   path('<int:project_id>/', views.project, name = "project")
]