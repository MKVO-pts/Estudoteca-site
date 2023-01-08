FROM node:alpine

WORKDIR /app

COPY . /app

CMD node app.js

EXPOSE 8080
