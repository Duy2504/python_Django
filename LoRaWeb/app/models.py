from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Customer(models.Model):
    user = models.OneToOneField(User,on_delete=models.SET_NULL,null=True,blank=False)
    name = models.CharField(max_length=200,null=True)
    email = models.CharField(max_length=300,null=True)

    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=200,null=True)
    price = models.FloatField()
    digital = models.BooleanField(default=False,null=True,blank=False)

    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=200,null=True)
    price = models.FloatField()
    digital = models.BooleanField(default=False,null=True,blank=False)

    def __str__(self):
        return self.name