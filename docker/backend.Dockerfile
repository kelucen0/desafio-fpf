FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY desafio_dos_numeros_backend /app/

RUN pip install --upgrade pip \
    && pip install -r requirements.txt

EXPOSE 8000
