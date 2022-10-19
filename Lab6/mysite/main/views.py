from django.shortcuts import render
from .forms import PlayerForm, TeamForm
from .models import Player, Team

# Create your views here.
def players(request):
  if request.method == "POST":
    form = PlayerForm(request.POST)
    print(PlayerForm())
    print(form)
    if form.is_valid():
      form.save()
  players = Player.objects.all()
  form = PlayerForm()
  return render(request, "players.html", {"form": form, "players":players})

def teams(request):
  if request.method == "POST":
    form = TeamForm(request.POST)
    if form.is_valid():
      form.save()
  teams = Team.objects.all()
  form = TeamForm()
  return render(request, "teams.html", {"form": form, "teams":teams})

def homepage(request):
  return render(request, "home.html")