from django.urls import path
from . import views

app_name = "main"   

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("players", views.players, name="players"),
    path("teams", views.teams, name="teams"), 
]