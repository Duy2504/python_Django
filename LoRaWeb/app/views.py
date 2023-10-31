from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    context={}
    return render(request,'app/home.html',context)
def control(request):
    context={}
    return render(request,'app/control.html',context)
# def dashboard(request):
#     context={}
#     return render(request,'app/dashboard.html',context)
def login(request):
    context={}
    return render(request,'app/login.html',context)
def history(request):
    context={}
    return render(request,'app/history.html',context)
