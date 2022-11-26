from django.urls import path
from .views import TipoView 

urlpatterns=[
    path('tipos/', TipoView.as_view(), name = 'listaTipos'),
    path('tipos/<int:id>', TipoView.as_view(), name = 'tipos_process')
    ]