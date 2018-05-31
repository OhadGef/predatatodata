FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN mkdir -p /data
RUN chmod -R 777 /data

COPY . /app

CMD node preDataToData.js

