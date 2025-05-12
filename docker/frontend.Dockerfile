FROM node:18

WORKDIR /app

COPY desafio-dos-numeros /app/

RUN npm install -g @angular/cli \
    && npm install

EXPOSE 4200

CMD ["npm", "start"]
