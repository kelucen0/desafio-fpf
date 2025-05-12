from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Process

class ProcessAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('process')
        self.status_url = lambda id: reverse('status', kwargs={'pk': id})
        self.data = {"numOne": 10, "numTwo": 20, "numThree": 30}

    def test_cria_processamento(self):
        response = self.client.post(self.url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)
        self.assertIn('id', response.data)
        self.assertEqual(response.data['status'], 'Process')

    def test_status_processamento(self):
        processo = Process.objects.create(**self.data)
        response = self.client.get(self.status_url(processo.id))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['status'], 'Process')
        self.assertIsNone(response.data['media'])
        self.assertIsNone(response.data['median'])
