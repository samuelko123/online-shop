FROM node:20-alpine AS base
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm ci

# build web application
COPY . .
RUN npm run build
