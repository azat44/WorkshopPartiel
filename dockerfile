FROM node:21

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .


CMD [ "npm","run","dev" ]