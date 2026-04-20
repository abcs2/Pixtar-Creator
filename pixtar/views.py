from django.shortcuts import render, redirect

from django.http import HttpResponse, Http404, JsonResponse

from .models import Imagem, sharedImage, Eraser

from django.contrib.auth.decorators import user_passes_test, login_required
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from django.views import View

from django.utils import timezone
from datetime import timedelta
from django.urls import reverse

# Create your views here.

class MainView(View):
    def get(self, request):
        eraseRejected()
        approveCount = 0
        if request.user.is_staff:
            approveCount = sharedImage.objects.filter(paraAprovar=True).count()
            if approveCount > 100:
                approveCount = '100+'
        return render(request, 'pixtar/index.html', {'approveCount': approveCount})

class EditorView(View):
    def get(self, request):
        return render(request, 'pixtar/editor.html')

class ApproveView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_staff
    
    def handle_no_permission(self):
        return redirect('pixtar:index')
    
    def get(self, request):
        eraseRejected()
        ultimas_imagens = sharedImage.objects.filter(paraAprovar=True).order_by('-data_envio')
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/approve.html', contexto)
    
class RejectedView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_staff
    
    def handle_no_permission(self):
        return redirect('pixtar:index')
    
    def get(self, request):
        eraseRejected()
        ultimas_imagens = sharedImage.objects.filter(rejeitado=True).order_by('-data_julgamento')
        for imagem in ultimas_imagens:
            timeLeft = imagem.data_julgamento + timedelta(days=2) - timezone.now()

            if timeLeft.days >= 1:
                imagem.timeLeft = f"{timeLeft.days} day(s)"
            else:
                hours = timeLeft.seconds // 3600
                imagem.timeLeft = f"{hours} hours(s)"
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/rejected.html', contexto)
    
class ExpositionView(View):
    def get(self, request):
        ultimas_imagens = sharedImage.objects.filter(exposto=True).order_by('-data_julgamento')

        for imagem in ultimas_imagens:
            if request.user.is_authenticated:
                imagem.liked = imagem.likes.filter(id=request.user.id).exists()
                imagem.sameUser = (request.user == imagem.user)
            else:
                imagem.login = False

        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/exposition.html', contexto)
    
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
        qtdCores = int(request.POST.get('qtdCores', 0))
        estado = request.POST.get('estado', '')

        imagem = sharedImage.objects.create(
            titulo = titulo,
            autor = autor,
            qtdObjetos = qtdObjetos,
            qtdAlfabetos = qtdAlfabetos,
            qtdFontes = qtdFontes,
            qtdCores = qtdCores,
            estado = estado,
            paraAprovar = True,
            user = request.user
        )
        return JsonResponse({'success': True, 'id': imagem.id})
    return JsonResponse({'success': False})

def staffEnter(user):
    return user.is_staff

@user_passes_test(staffEnter)
def judge(request):
    if request.method == 'POST':
        imageId = request.POST.get('id')
        action = request.POST.get('action')

        image = sharedImage.objects.get(id=imageId)

        if (image):
            if action == 'approve':
                image.paraAprovar = False
                image.exposto = True
                image.rejeitado = False
            elif action == 'reject':
                image.paraAprovar = False
                image.exposto = False
                image.rejeitado = True
            image.julgado_por = request.user.username
            image.data_julgamento = timezone.now()

            image.save()

            return JsonResponse({'success': True})
        return JsonResponse({'success': False})
    return JsonResponse({'success': False})

@login_required
def like(request):
    if request.method == 'POST':
        imageId = request.POST.get('id')

        image = sharedImage.objects.get(id=imageId)

        if (image and image.user != request.user):
            user = request.user

            if user in image.likes.all():
                image.qtdLikes -= 1
                image.likes.remove(user)
                liked = False
            else:
                image.qtdLikes += 1
                image.likes.add(user)
                liked = True

            image.save()

            return JsonResponse({'success': True, 'liked': liked, 'likeCount': image.qtdLikes})
        return JsonResponse({'success': False})
    return JsonResponse({'success': False})

def eraseRejected():
    eraser, _ = Eraser.objects.get_or_create(id=1)

    if eraser.lastErase and (timezone.now() - eraser.lastErase) < timedelta(hours=1):
        return
    
    eraser.lastErase = timezone.now()
    eraser.save()

    limitDate = timezone.now() - timedelta(days=2)
    sharedImage.objects.filter(rejeitado=True, data_julgamento__lt=limitDate).delete()