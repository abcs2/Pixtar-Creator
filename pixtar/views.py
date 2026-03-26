from django.shortcuts import render

from django.http import HttpResponse, Http404
from .models import Imagem, sharedImage

from django.views import View

from django.utils import timezone
from django.shortcuts import redirect
from django.urls import reverse
from django.http import JsonResponse

# Create your views here.

class MainView(View):
    def get(self, request):
        ultimas_imagens = sharedImage.objects.order_by('-data_envio')
        contexto = {'imagens': ultimas_imagens}
        return render(request, 'pixtar/index.html', contexto)

class EditorView(View):
    def get(self, request):
        return render(request, 'pixtar/editor.html')


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