from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

class Imagem(models.Model):
    titulo = models.CharField(max_length=200, null=False, default='Untitled')
    autor = models.CharField(max_length=200, null=False, default='Anonymous')
    data_envio = models.DateTimeField('Enviado em ', default=timezone.now)

    qtdObjetos = models.IntegerField(default=0)
    qtdAlfabetos = models.IntegerField(default=0)
    qtdFontes = models.IntegerField(default=0)

    paraAprovar = models.BooleanField(default=False)
    rejeitado = models.BooleanField(default=False)
    data_julgamento = models.DateTimeField(blank=True, null=True)

    exposto = models.BooleanField(default=False)
    qtdLikes = models.IntegerField(default=0)

    estado = models.TextField(blank=True, null=True)

    def __str__(self):
        return '[' + str(self.id) + '] ' + self.titulo + ' by ' + self.autor

    def tempoParaExcluir(self):
        if self.rejeitado:
            tempoLimite = self.data_julgamento + datetime.timedelta(days=2)
            return tempoLimite - timezone.now()