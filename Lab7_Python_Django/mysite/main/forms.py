from django import forms
from .models import Person

class PersonForm(forms.ModelForm):
  class Meta:
    model = Person
    fields = ('id','name','profession','telephone1','telephone2')