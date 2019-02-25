from django.contrib import admin

# Register your models here.
from .models import Answers, MetaData
admin.site.register(MetaData) 
admin.site.register(Answers)