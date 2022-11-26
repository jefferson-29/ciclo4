from django.db import models

# Create your models here.
class Producto(models.Model):
    id_producto = models.AutoField(db_column='id_producto', primary_key=True)
    nombre = models.CharField(max_length = 50)
    precio = models.IntegerField()
    cantidad = models.IntegerField()
    pagado = models.CharField(max_length = 20)
    id_ciudad = models.ForeignKey('Ciudad',db_column='id_ciudad', related_name = 'Ciudad', on_delete=models.SET_NULL, null = True) 
    id_tipo = models.ForeignKey('Tipo', db_column='id_tipo', related_name = 'Tipo', on_delete=models.SET_NULL, null = True)

class Ciudad(models.Model):
    id_ciudad = models.AutoField(db_column='id_ciudad', primary_key=True)
    ciudad = models.CharField(max_length=50)

class Tipo(models.Model):
    id_tipo = models.AutoField(db_column='id_tipo', primary_key=True)
    name = models.CharField(max_length=50)


