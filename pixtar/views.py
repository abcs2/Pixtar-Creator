from django.shortcuts import render, redirect

from django.http import HttpResponse, Http404, JsonResponse

from .models import Imagem, sharedImage

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from django.views import View

from django.utils import timezone
from django.urls import reverse

# Create your views here.

class MainView(View):
    def get(self, request):
        return render(request, 'pixtar/index.html')

class EditorView(View):
    def get(self, request):
        return render(request, 'pixtar/editor.html')
    
class ApproveView(View):
    def get(self, request):
        ultimas_imagens = sharedImage.objects.order_by('-data_envio')
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/approve.html', contexto)
    
class ImagensView(View):
    def get(self, request):
        ultimas_imagens = sharedImage.objects.order_by('-data_envio')
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/imagens.html', contexto)
    
class RegisterView(View):
    def get(self, request):
        return render(request, 'pixtar/register.html')
    
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirmPassword = request.POST.get('confirmPassword')

        if username == '' or password == '' or confirmPassword == '':
            return render(request, 'pixtar/register.html', {'error': "Fill out all forms to register."})
        
        if password != confirmPassword:
            return render(request, 'pixtar/register.html', {'error': "The two passwords don't match."})

        if User.objects.filter(username = username).exists():
            return render(request, 'pixtar/register.html', {'error': "There is already an user with this name."})

        user = User(username = username)
        user.set_password(password)
        user.save()

        return redirect('pixtar:login')
    
class LoginView(View):
    def get(self, request):
        return render(request, 'pixtar/login.html')
    
    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')

        if username == '' or password == '':
            return render(request, 'pixtar/login.html', {'error': "Fill out all forms to login."})

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('pixtar:index')
        
        return render(request, 'pixtar/login.html', {'error': "Username or password are incorrect."})

def userLogout(request):
    logout(request)
    return redirect('pixtar:index')

def salvar(request):
    if request.method == 'POST':
        titulo = request.POST.get('titulo', 'Untitled')
        autor = request.POST.get('autor', 'Anonymous')
        qtdObjetos = int(request.POST.get('qtdObjetos', 0))
        qtdAlfabetos = int(request.POST.get('qtdAlfabetos', 0))
        qtdFontes = int(request.POST.get('qtdFontes', 0))
        estado = request.POST.get('estado', '')

        imagem = sharedImage.objects.create(
            titulo = titulo,
            autor = autor,
            qtdObjetos = qtdObjetos,
            qtdAlfabetos = qtdAlfabetos,
            qtdFontes = qtdFontes,
            estado = estado
        )
        return JsonResponse({'success': True, 'id': imagem.id})
    return JsonResponse({'success': False})