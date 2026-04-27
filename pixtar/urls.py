from django.urls import path
from . import views

app_name = 'pixtar'
urlpatterns = [
    path('', views.MainView.as_view(), name='index'),
    path('editor/', views.EditorView.as_view(), name='editor'),
    path('gallery/', views.GalleryView.as_view(), name='gallery'),
    path('salvar/', views.salvar, name='salvar'),
    path('judge/', views.judge, name='judge'),
    path('like/', views.like, name='like'),
    path('approve/', views.ApproveView.as_view(), name='approve'),
    path('rejected/', views.RejectedView.as_view(), name='rejected'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.userLogout, name='logout')
]