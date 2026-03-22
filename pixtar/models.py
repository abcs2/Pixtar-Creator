from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

class Imagem(models.Model):
    titulo = models.CharField(max_length=200, null=False, default='Untitled')
    autor = models.CharField(max_length=200, null=False, default='Anonymous')
    data_criacao = models.DateTimeField('Criado em ')

    qtdObjetos = models.IntegerField(default=0)
    qtdAlfabetos = models.IntegerField(default=0)
    qtdFontes = models.IntegerField(default=0)

    exposto = models.BooleanField(default=False)

    def __str__(self):
        return '[' + str(self.id) + '] ' + self.titulo + ' by ' + self.autor