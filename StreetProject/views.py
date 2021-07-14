from StreetProject.forms import ContactForm
from StreetProject.models import Destination
from django.shortcuts import render
from django.http import HttpResponse
import json
# import Destination from Model :)
from .models import Destination
import paho.mqtt.client as mqtt
from typing import NewType
# link :https://docs.python.org/3/library/typing.html


name : str 
UserId = NewType('UserId', int)
some_id1 = UserId(55)
some_id2 = UserId(45)
some_id = some_id1 + some_id2


def index1(request):
 #return HttpResponse("Hello World")
 des1 = Destination()
 des1.name = 'Node Light 1'
 des1.state = 'Light state 1'
 des1.percent = 'Light %'
 des1.img = 'den.jpg'
# pass object từ đây qua  index.html
#  return render(request,'index.html',{'dest' : dest})
#   return render(request,'index.html',{'des1' : 'Phu'} : thay des1 = Phu)

#  return render(request,'index11.html',{'sensors' : some_id1})
 return render(request,'test.html')


 
def old(request):
    return render(request,'index.html')
def contact(request):
    # if request.method == 'POST':
    #     form = ContactForm(request.POST)
    #     if form.is_valid():
    #         # kt xem nếu form valid then capture all the field we want to
    #         name = form.cleaned_data['name']
    #         email = form.cleaned_data['email']
    #         subject = form.cleaned_data['subject']
    # form = ContactForm()
    # # reset lại form
    return render(request, 'base.html')

def base(request):
 return render(request,'base.html')

def lights(request):
 return render(request,'lights.html')

def cabinets(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # kt xem nếu form valid then capture all the field we want to
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
    form = ContactForm()
    # reset lại form
    return render(request,'cabinets.html', {'form': form})