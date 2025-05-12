Este projeto fullstack permite que usuários submetam três números via frontend e obtenham média e mediana processadas de forma assíncrona com Celery + RabbitMQ. O frontend é feito em Angular com Angular Material, e o backend em Django com Django REST Framework e SQLite.

---

## 📦 Tecnologias Utilizadas

- **Frontend:** Angular 19 + Angular Material
- **Backend:** Django + Django REST Framework
- **Assíncrono:** Celery + RabbitMQ
- **Banco:** PostgreSQL
- **Containers:** Docker + Docker Compose

---

## ▶️ Como Executar Localmente

### Pré-requisitos:
- Docker e Docker Compose instalados

### Comandos:

```bash
https://github.com/kelucen0/desafio-fpf.git
docker compose up --build
```

Depois, acesse:
- Frontend: [http://localhost:4200](http://localhost:4200)
- Backend: [http://localhost:8000](http://localhost:8000)
- RabbitMQ (admin): [http://localhost:15672](http://localhost:15672) (user: guest / pass: guest)

---

## 📌 Funcionalidades

- Enviar 3 números para processamento
- Armazenamento dos números e status inicial "Processando"
- Cálculo assíncrono de média e mediana pelo Celery
- Exibição dos resultados no frontend Angular
- Atualização automática da tabela com polling

---

## 🧪 Testando a API

### Enviar números:
```bash
curl -X POST http://localhost:8000/processar/ \
  -H "Content-Type: application/json" \
  -d '{"numOne": 10, "numTwo": 20, "numThree": 30}'
```

### Listar todos os processamentos:
```bash
curl http://localhost:8000/api/all/
```

---

## 🧩 Estrutura da API

| Método | Endpoint             | Descrição                     |
|--------|----------------------|-------------------------------|
| POST   | `/process/`          | Envia 3 números               |
| GET    | `/status/<id>/`      | Consulta resultado específico |
| GET    | `/api/all/`          | Lista todos os resultados     |

---

## ✅ Testes automatizados

Execute os testes com:
```bash
docker compose run backend python manage.py test
```

---

## 🔐 CORS

O backend permite requisições do Angular (`localhost:4200`). Se necessário, edite `settings.py`:
```python
CORS_ALLOW_ALL_ORIGINS = True
```

---

## 📂 Autor & Licença

Desenvolvido por Kelly para desafio técnico. Licença MIT.