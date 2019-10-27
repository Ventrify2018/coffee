from django.shortcuts import render


# Create your views here.

def index(requests):
    return render(requests, 'Coffee_Webapp/home/index.html')


def login(requests):
    return render(requests, 'Coffee_Webapp/login/login.html')


def register(requests):
    return render(requests, 'Coffee_Webapp/Register/register.html')
