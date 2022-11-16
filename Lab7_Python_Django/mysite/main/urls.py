from django.urls import path
from . import views

app_name = "main"   

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:sorted>/", views.homepage, name="homepage"),
    path("edit/<int:id>/",views.update, name="update"),
    path("destroy/<int:id>/", views.destroy, name="destroy"),
    path("show/<int:id>/", views.show, name="show"),
    path("search/", views.search, name="search"),
    path("show_all/<slug:profession>", views.show_all, name="show_all"),
    path("compare_names/", views.compare_names, name="compare_names")
]