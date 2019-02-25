from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse, HttpResponse
from django.views.generic import TemplateView
import json
from django.http import JsonResponse
from django.utils.html import escapejs
from interviews.models import Answers, MetaData
from django.views.decorators.csrf import ensure_csrf_cookie

def index(request):
	return render(request, 'interviews/base.html') 

@ensure_csrf_cookie
def interviews(request):
	return render(request, 'interviews/interviews.html', {'k' :True }) 
	#return render(request, 'interviews/interviews.html', {'data': dataq, 'k' :True }) 

def interview_details(request, farm_ref):
    return render(request,'interviews/details.html',{'k' :True } )	

@ensure_csrf_cookie
def test(request):
	return render(request,'interviews/test.html',{'k' :True})

@ensure_csrf_cookie
def test2(request):
	meta_data = MetaData.objects.filter(household_id = "FIS010")
	all_interviews = []
	for i in meta_data.iterator():
		all_interviews.append(i)
	return JsonResponse(all_interviews, safe=False)	

def example(request):
	meta_data = MetaData.objects.values().order_by('id')
	return all_interviews

def interview_list(request):
	meta_data = MetaData.objects.values().order_by('id')
	answers = Answers.objects.values()
	all_interviews = []
	interview_index = -1 #sets the index 
	for i in meta_data.iterator(): #iterates through the summary interviews(meta_data) to combine them with the rest of the anwsers
		interview_index += 1 
		all_interviews.append(i) 
		for answer in answers:
		    if all_interviews[interview_index]["interview_id"] == answer["interview_id"] :
		        #This convert string answers that are supposed to be digits to digits
		        if(answer["answer"].isdigit()):
		    	    main_answer = int(answer["answer"])
		        else:
		    	    mainanswer = answer["answer"]
		    	#creates a unique index by sec_number et al and assigns an answer to each
		        all_interviews[interview_index][str(answer["section_number"])+"_"+str(answer["sub_section_number"])+"_"+str(answer["answer_number"])+"_"+str(answer["question_number"])] = main_answer

	return JsonResponse(all_interviews, safe=False)	