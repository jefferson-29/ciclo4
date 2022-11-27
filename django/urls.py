from django.urls import path
from .views import TipoView, ProductoView, CiudadView

urlpatterns=[
    path('tipos/', TipoView.as_view(), name = 'listaTipos'),
    path('tipos/<int:id>', TipoView.as_view(), name = 'tipos_process'),
    path('productos', ProductoView.as_view(), name = 'listaProductos'),
    path('productos/<int:id>', ProductoView.as_view(), name = 'productos_process'),
    path('ciudades', CiudadView.as_view(), name = 'listaCiudades'),
    path('ciudades/<int:id>', CiudadView.as_view(), name = 'ciudades_process')
    ]