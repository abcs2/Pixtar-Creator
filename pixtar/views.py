from django.shortcuts import render

from django.http import HttpResponse, Http404
from .models import Imagem

from django.views import View

from django.utils import timezone
from django.shortcuts import redirect
from django.urls import reverse

# Create your views here.

class MainView(View):
    def get(self, request):
        ultimas_imagens = Imagem.objects.order_by('-data_criacao')
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/index.html', contexto)

class EditorView(View):
    def get(self, request):
        return render(request, 'pixtar/editor.html')