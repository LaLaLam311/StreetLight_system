from django.urls import path

from.import views

# coi view với url là packet

urlpatterns = [


    path('',views.index1, name='index1'),
	path('old',views.old),
	path('index1',views.index1),
	path('base',views.base),
	path('contact',views.contact),
	path('lights',views.lights),
	path('cabinets',views.cabinets),


	# gọi view.index1 khi có '' => trang chủ
]