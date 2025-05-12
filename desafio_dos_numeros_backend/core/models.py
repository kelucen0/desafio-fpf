from django.db import models

class Process(models.Model):
    numOne = models.FloatField()
    numTwo = models.FloatField()
    numThree = models.FloatField()
    media = models.FloatField(null=True, blank=True)
    median = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=20, default="Process")
    created_at = models.DateTimeField(auto_now_add=True)
