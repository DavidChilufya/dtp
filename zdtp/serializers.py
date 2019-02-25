from rest_framework import serializers
from interviews.models import Answers, MetaData

class MetaSerializers(serializers.ModelSerializer):
	class Meta:
		model = MetaData 
		fields = "__all__"
		#fields = 'user_id','interview_id','first_interview','coop_union','prime_coop','latitude','longitude','current_section','field_time','field_date'



class Hoo():
	def foo():
		foo = "sasas"
		return foo