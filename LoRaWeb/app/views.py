from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    context={}
    return render(request,'app/home.html',context)
def dashboard(request):
    context={}
    return render(request,'app/dashboard.html',context)

