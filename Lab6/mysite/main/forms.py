from django import forms
from .models import Player, Team

class PlayerForm(forms.ModelForm):
  class Meta:
    model = Player
    fields = ('name','height','team','ppg')

class TeamForm(forms.ModelForm):
  class Meta:
    model = Team
    fields = ('name','city','year_founded')