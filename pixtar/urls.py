from django.urls import path
from . import views

app_name = 'pixtar'
urlpatterns = [
    path('', views.MainView.as_view(), name='index'),
    path('editor/', views.EditorView.as_view(), name='editor'),
    path('imagens/', views.ImagensView.as_view(), name='imagens'),
    path('salvar/', views.salvar, name='salvar'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.userLogout, name='logout')
]