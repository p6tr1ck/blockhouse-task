from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CandleStickData, ChartData
from .serializer import CandleStickDataSerializer, ChartDataSerializer

@api_view(['GET'])
def get_candle_stick_data(request):
    data = [
        {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
        {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
    ]

    serializer = CandleStickDataSerializer(data=data, many=True)
    if serializer.is_valid():
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }

    serializer = ChartDataSerializer(data=data)
    if serializer.is_valid():
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }

    serializer = ChartDataSerializer(data=data)
    if serializer.is_valid():
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }

    serializer = ChartDataSerializer(data=data)
    if serializer.is_valid():
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)