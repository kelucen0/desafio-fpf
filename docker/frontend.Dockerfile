FROM node:18-alpine

WORKDIR /app

COPY desafio_dos_numeros /app/

RUN npm install -g @angular/cli \
    && npm install

EXPOSE 4200

CMD ["npm", "start"]
