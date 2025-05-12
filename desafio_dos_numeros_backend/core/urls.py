from django.urls import path
from .views import ProcessAPIView, StatusAPIView, ListAllAPIView

urlpatterns = [
    path('process/', ProcessAPIView.as_view(), name='process'),
    path('status/<int:pk>/', StatusAPIView.as_view(), name='status'),
    path('all/', ListAllAPIView.as_view(), name='list_all'),
]
