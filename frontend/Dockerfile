FROM node:latest

WORKDIR usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]