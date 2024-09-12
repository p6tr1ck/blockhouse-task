from django.urls import path
from .views import get_candle_stick_data, get_line_chart_data, get_bar_chart_data, get_pie_chart_data

urlpatterns = [
    path('candlestick-data/', get_candle_stick_data, name='get_candle_stick_data'),
    path('line-chart-data/', get_line_chart_data, name='get_line_chart_data'),
    path('bar-chart-data/', get_bar_chart_data, name='get_bar_chart_data'),
    path('pie-chart-data/', get_pie_chart_data, name='get_pie_chart_data')
]