from django.urls import path, re_path, include
from rest_framework import routers

from . import views

router = routers.SimpleRouter()

#app_name = 'webgallery'
#urlpatterns = [
#   re_path(r'^api/v1/', include(router.urls)),
#   #path('', views.index, name = "index"),
#   path('gallery-list/', views.gallery_list, name = "portfolio"),
#   path('<int:gallery_id>/', views.gallery, name = "gallery")
#]