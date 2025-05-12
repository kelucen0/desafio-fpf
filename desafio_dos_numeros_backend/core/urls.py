from django.urls import path
from .views import ProcessAPIView, StatusAPIView

urlpatterns = [
    path('process/', ProcessAPIView.as_view(), name='process'),
    path('status/<int:pk>/', StatusAPIView.as_view(), name='status'),
]
