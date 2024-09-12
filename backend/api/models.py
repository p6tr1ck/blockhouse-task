from django.db import models

# Create your models here.
class CandleStickData(models.Model):
    x = models.DateField()
    open = models.IntegerField()
    high = models.IntegerField()
    low = models.IntegerField()
    close = models.IntegerField()

    def __init__(self):
        return f"X: {self.x}, Open: {self.open}, High: {self.high}, Low: {self.low}, Close: {self.close}"
    
class ChartData(models.Model):
    labels = models.JSONField()
    data = models.JSONField()  

    def __str__(self):
        return f"Labels: {self.labels}, Data: {self.data}"