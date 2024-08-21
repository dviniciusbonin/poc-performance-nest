FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

RUN npm install -g autocannon

COPY run-tests.sh .