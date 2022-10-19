from django.db import models

# Create your models here.

class Team(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    year_founded = models.PositiveIntegerField(default=2022)
    
    def __str__(self):
        return self.name

class Player(models.Model):
    name = models.CharField(max_length=100)
    height = models.CharField(max_length=100)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, blank=True)
    ppg = models.DecimalField(max_digits=2, decimal_places= 2)

    def __str__(self):
        return self.name
