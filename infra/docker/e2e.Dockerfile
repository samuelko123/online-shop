FROM mcr.microsoft.com/playwright:v1.49.1-noble
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm ci

# copy source files
COPY . .

# run tests
ENTRYPOINT ["npm", "run", "test"]
