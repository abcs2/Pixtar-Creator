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
    user = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    date_saved = models.DateTimeField(default=timezone.now)

        
class sharedImage(Imagem):
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)

    titulo = models.CharField(max_length=15, null=False, default='Untitled')
    autor = models.CharField(max_length=20, null=False, default='Anonymous')
    data_envio = models.DateTimeField('Enviado em ', default=timezone.now)

    paraAprovar = models.BooleanField(default=True)
    rejeitado = models.BooleanField(default=False)
    exposto = models.BooleanField(default=False)

    data_julgamento = models.DateTimeField(blank=True, null=True)
    julgado_por = models.CharField(blank=True, null=True, max_length=22)

    qtdLikes = models.IntegerField(default=0)
    likes = models.ManyToManyField(User, related_name='likedImages', blank=True, default=None)

    def __str__(self):
        return '[' + str(self.id) + '] ' + self.titulo + ' by ' + self.autor

    def tempoParaExcluir(self):
        if self.rejeitado:
            tempoLimite = self.data_julgamento + datetime.timedelta(days=5)
            return tempoLimite - timezone.now()

class ModPerms(models.Model):
    class Meta:
        managed = False
        default_permissions = ()
        permissions = [
            ('can_moderate', 'Can moderate'),
        ]
        
class Eraser(models.Model):
    lastErase = models.DateTimeField(null=True, blank=True)