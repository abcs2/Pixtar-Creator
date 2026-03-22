from django.urls import path
from . import views

app_name = 'pixtar'
urlpatterns = [
    path('', views.MainView.as_view(), name='index'),
    path('editor/', views.EditorView.as_view(), name='editor')
]