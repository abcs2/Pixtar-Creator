from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Imagem(models.Model):
    estado = models.TextField(blank=True, null=True)

    qtdObjetos = models.IntegerField(default=0)
    qtdAlfabetos = models.IntegerField(default=0)
    qtdFontes = models.IntegerField(default=0)
    qtdCores = models.IntegerField(default=0)


class userImage(Imagem):
    userId = models.IntegerField(null=False)

        
class sharedImage(Imagem):
    userId = models.IntegerField(blank=True, null=True)

    titulo = models.CharField(max_length=35, null=False, default='Untitled')
    autor = models.CharField(max_length=35, null=False, default='Anonymous')
    data_envio = models.DateTimeField('Enviado em ', default=timezone.now)

    paraAprovar = models.BooleanField(default=True)
    rejeitado = models.BooleanField(default=False)
    exposto = models.BooleanField(default=False)

    data_julgamento = models.DateTimeField(blank=True, null=True)
    julgado_por = models.CharField(blank=True, null=True, max_length=35)

    qtdLikes = models.IntegerField(default=0)
    likes = models.ManyToManyField(User, related_name='likedImages', blank=True)

    def __str__(self):
        return '[' + str(self.id) + '] ' + self.titulo + ' by ' + self.autor

    def tempoParaExcluir(self):
        if self.rejeitado:
            tempoLimite = self.data_julgamento + datetime.timedelta(days=5)
            return tempoLimite - timezone.now()
        
        
class Usuario(models.Model):
    nome = models.CharField(max_length=50, null=False)
    #listaImagens = models.ManyToManyField(Imagem, blank=True)

    #listaLikes = models.ManyToManyField(Imagem, blank=True)

    moderador = models.BooleanField(default=False)