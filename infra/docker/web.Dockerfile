FROM node:20-alpine AS base
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm ci

# copy source files
COPY . .

FROM base AS development
ENTRYPOINT ["npm", "run", "dev"]

FROM base AS production
RUN npm run build
