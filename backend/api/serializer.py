from rest_framework import serializers
from .models import CandleStickData, ChartData

class CandleStickDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandleStickData
        fields = ['x', 'open', 'high', 'low', 'close']

class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartData
        fields = ['labels', 'data']