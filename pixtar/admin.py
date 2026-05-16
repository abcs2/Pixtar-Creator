from django.contrib import admin
from .models import Imagem, sharedImage, userImage

# Register your models here.

admin.site.register(Imagem)
admin.site.register(sharedImage)
admin.site.register(userImage)