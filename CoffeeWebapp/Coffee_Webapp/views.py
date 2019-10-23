from django.shortcuts import render


# Create your views here.

def index(requests):
    return render(requests, 'Coffee_Webapp/home/index.html')
