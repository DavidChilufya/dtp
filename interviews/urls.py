from django.urls import path

from . import views

urlpatterns = [
    path('all', views.interviews, name='interviews'),
    path('all/details/<str:farm_ref>', views.interview_details, name='interviewDetails'),
    path('interviews_list', views.interview_list, name='interview_list'),
    #path('example', views.example, name='example'),
    path('test2', views.test2, name='test2'),
    path('test/', views.test, name='test'),
    path('', views.index, name='index'),

]