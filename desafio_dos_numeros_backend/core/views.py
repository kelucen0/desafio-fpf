from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Process
from .serializers import ProcessSerializer
from .tasks import process_nums


class ProcessAPIView(APIView):
    def post(self, request):
        serializer = ProcessSerializer(data=request.data)
        if serializer.is_valid(): 
            process = serializer.save()
            process_nums.delay(process.id)
            return Response({"id": process.id, "status": process.status}, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StatusAPIView(APIView):
    def get(self, request, pk):
        try:
            processamento = Process.objects.get(pk=pk)
            serializer = ProcessSerializer(processamento)
            return Response(serializer.data)
        except Process.DoesNotExist:
            return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)



