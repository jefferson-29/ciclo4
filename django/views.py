from django.views import View
from .models import Tipo
from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
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