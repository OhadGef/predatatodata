FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN mkdir -p /app/data
RUN chmod -R 777 /app
RUN chmod -R 777 /app/data

COPY . /app

CMD node preDataToData.js

