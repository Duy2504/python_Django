from django.contrib import admin
from django.urls import path
from .import views
urlpatterns = [
    path('', views.home,name='home'),
    # path('dashboard', views.dashboard,name='dashboard'),
    path("control",views.control, name='control'),
    path('login', views.login, name='login'),
    path('history', views.history, name='history'),
]
