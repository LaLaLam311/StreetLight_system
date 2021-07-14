from django.db import models

# connect database
# Create your models here.
class Destination:
    id : int
    name : str
    img : str
    des: str

class Current(models.Model):
    light = models.IntegerField()
    image = models.ImageField(upload_to = 'pics')
    button = models.IntegerField()
 