from django.shortcuts import render, redirect
from .forms import PersonForm
from .models import Person

# Create your views here.
def index(request):
  return redirect("/0/")

def compare_names(request):
  if request.method == "POST":
    name1 = request.POST['name1']
    name2 = request.POST['name2']
    person1 = Person.objects.get(name = name1)
    person2 = Person.objects.get(name = name2)
    if person1.profession == person2.profession and person1.telephone1 == person2.telephone1 and person1.telephone2 == person2.telephone2:
      return redirect("/3/")
    else:
      return redirect("/4/")

def homepage(request, sorted = 0):
  if sorted == 1:
    persons = Person.objects.order_by("name")
  elif sorted == 2:
    persons = Person.objects.order_by("profession")
  else:
    persons = Person.objects.all()
  if sorted == 3:
    compare_status = 2
  elif sorted == 4:
    compare_status = 1
  else:
    compare_status = 0
  if request.method == "POST":
    form = PersonForm(request.POST)
    if form.is_valid():
      form.save()
  form = PersonForm()
  return render(request, "home.html", {"form": form, "persons":persons, "compare_status": compare_status})

def show(request, id):
  if id == 0:
    return render(request, 'show.html', {'error': True})
  person = Person.objects.get(id=id)
  return render(request, 'show.html', {'person':person})

def show_all(request, profession):
  persons = Person.objects.filter(profession = profession)
  if len(persons) > 0:
    return render(request, 'show.html', {'persons':persons})
  else:
    return render(request, 'show.html', {'error': True})
    

def search(request):
  try:
    print(request.POST)
    if request.POST['name'] != "":
      person = Person.objects.get(name = request.POST['name'])
    elif request.POST['telephone1']:
      person = Person.objects.get(telephone1 = request.POST['telephone1'])
    elif request.POST['profession']:
      return redirect("/show_all/{}".format(request.POST['profession']))
    elif request.POST['telephone2']:
      person = Person.objects.get(telephone2 = request.POST['telephone2'])
  except Exception as e:
    person = Person(id=0)
  return redirect("/show/{}".format(person.id))


def destroy(request, id):
  person = Person.objects.get(id=id)
  person.delete()
  return redirect('/')
def update(request,id):  
  person = Person.objects.get(id= id)
  form = PersonForm(request.POST, instance = person)
  if form.is_valid():
    form.save()
    return redirect('/')
  return render(request, 'edit.html', {"form": form, 'person':person})