# créditos: https://medium.elegantly.rocks/dockerize-your-angular-development-environment-3d5ea055ac2d'
FROM node:lts
WORKDIR /app

RUN npm install
RUN npm install -g @angular/cli@latest
