from django.urls import path, include
from .api import RegisterAPI, LoginAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    # as_view b'cause it is a generic API view
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
]
