# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
		
class Answers(models.Model):
    answer = models.CharField(max_length=380, blank=True, null=True)
    section_number = models.IntegerField(blank=True, null=True)
    sub_section_number = models.IntegerField(blank=True, null=True)
    question_number = models.IntegerField(blank=True, null=True)
    answer_number = models.IntegerField(blank=True, null=True)
    interview_id = models.CharField(max_length=10, blank=True, null=True)
    field_time = models.CharField(db_column='_time', max_length=8, blank=True, null=True)  # Field renamed because it started with '_'.

    def __str__(self):
    	return self.answer
    class Meta:
        managed = True
        db_table = 'answers'

class MetaData(models.Model):
    user_id = models.CharField(max_length=40)
    interview_id = models.CharField(unique=True, max_length=11, blank=True, null=True)
    household_id = models.CharField(unique=True, max_length=9, blank=True, null=True)
    first_interview = models.CharField(max_length=20, blank=True, null=True)
    coop_union = models.CharField(max_length=45, blank=True, null=True)
    prime_coop = models.CharField(max_length=45, blank=True, null=True)
    latitude = models.CharField(max_length=16, blank=True, null=True)
    longitude = models.CharField(max_length=16, blank=True, null=True)
    current_section = models.CharField(max_length=8, blank=True, null=True)
    field_time = models.CharField(db_column='_time', max_length=8, blank=True, null=True)  # Field renamed because it started with '_'.
    field_date = models.CharField(db_column='_date', max_length=35, blank=True, null=True)  # Field renamed because it started with '_'.
    year = models.CharField(db_column='year', max_length=35, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'meta_data'
