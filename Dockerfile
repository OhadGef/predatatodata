FROM node:alpine

WORKDIR /app

COPY ../preDataToData /app

RUN npm install

RUN mkdir -p ./data

COPY ../preDataToData /app


CMD node preDataToData.js

