FROM node:18-alpine AS builder

WORKDIR /app/transaction

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start:prod