from django.views import View
from .models import Tipo, Producto, Ciudad
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

# Crud Tipo
class TipoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if(id > 0):
            tipos = list(Tipo.objects.filter(id_tipo = id).values())
            if len(tipos) > 0:
                types = tipos[0]
                datos = {'mensaje': 'Econtrado', 'Tipos': types}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

        else:
            tipos = list(Tipo.objects.values())
            if len(tipos)>0:
                datos = {'mensaje': 'Econtrado', 'Tipos': tipos}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Tipo.objects.create(name = jd['name'])
        datos = {'mensaje': 'Econtrado'}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        tipos = list(Tipo.objects.filter(id_tipo = id).values())
        if len(tipos) > 0:
            types = Tipo.objects.get(id_tipo = id)
            types.name = jd['name']            
            types.save()
            datos = {'mensaje': 'Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)

    def delete(self, request, id):
        tipos = list(Tipo.objects.filter(id_tipo = id).values())
        if len(tipos) > 0:
            Tipo.objects.filter(id_tipo = id).delete()
            datos = {'mensaje': 'Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)


# Crud Producto

class ProductoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if(id > 0):
            productos = list(Producto.objects.filter(id_producto = id).values())
            if len(productos) > 0:
                types = productos[0]
                datos = {'mensaje': 'Producto Econtrado', 'Producto': types}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

        else:
            productos = list(Producto.objects.values())
            if len(productos)>0:
                datos = {'mensaje': 'Producto Econtrado', 'Producto': productos}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Producto.objects.create(nombre = jd['nombre'], precio = jd['precio'], cantidad = jd['cantidad'], pagado = jd['pagado'], id_ciudad_id = jd['id_ciudad_id'], id_tipo_id = jd['id_tipo_id'])
        datos = {'mensaje': 'Producto Econtrado'}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        productos = list(Producto.objects.filter(id_producto = id).values())
        if len(productos) > 0:
            types = Producto.objects.get(id_producto = id)          
            types.nombre = jd['nombre']
            types.precio = jd['precio'] 
            types.cantidad = jd['cantidad'] 
            types.pagado = jd['pagado'] 
            numCiudad = jd['id_ciudad_id']
            types.id_ciudad = Ciudad.objects.get(id_ciudad = numCiudad)
            numTipo = jd['id_tipo_id']
            types.id_tipo = Tipo.objects.get(id_tipo = numTipo)  
            types.save()
            datos = {'mensaje': 'Producto Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)

    def delete(self, request, id):
        productos = list(Producto.objects.filter(id_producto = id).values())
        if len(productos) > 0:
            Producto.objects.filter(id_producto = id).delete()
            datos = {'mensaje': 'Producto Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)

    #Crud Ciudad

class CiudadView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if(id > 0):
            ciudades = list(Ciudad.objects.filter(id_ciudad = id).values())
            if len(ciudades) > 0:
                types = ciudades[0]
                datos = {'mensaje': 'Ciudad Econtrado', 'Ciudad': types}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

        else:
            ciudades = list(Ciudad.objects.values())
            if len(ciudades)>0:
                datos = {'mensaje': 'Ciudad Econtrado', 'Ciudad': ciudades}
            else:
                datos = {'mensaje': 'No se encontro nada...'}
            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Ciudad.objects.create(ciudad = jd['ciudad'])
        datos = {'mensaje': 'Ciudad Econtrado'}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        ciudades = list(Ciudad.objects.filter(id_ciudad = id).values())
        if len(ciudades) > 0:
            types = Ciudad.objects.get(id_ciudad = id)
            types.ciudad = jd['ciudad']            
            types.save()
            datos = {'mensaje': 'Ciudad Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)

    def delete(self, request, id):
        ciudades = list(Ciudad.objects.filter(id_ciudad = id).values())
        if len(ciudades) > 0:
            Ciudad.objects.filter(id_ciudad = id).delete()
            datos = {'mensaje': 'Ciudad Econtrado'}
        else:
            datos = {'mensaje' : 'no se encontro nada'}
        return JsonResponse(datos)