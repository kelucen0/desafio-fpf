FROM node:20-alpine

WORKDIR /app

ENV NG_CLI_ANALYTICS=false

COPY desafio-dos-numeros /app/

RUN npm install -g @angular/cli \
    && npx ng analytics off \
    && npm install

EXPOSE 4200

CMD ["npm", "start"]
