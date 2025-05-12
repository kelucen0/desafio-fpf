from celery import Celery
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'desafio_dos_numeros_backend.settings')
app = Celery('desafio_dos_numeros_backend')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()