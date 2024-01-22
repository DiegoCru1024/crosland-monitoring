FROM node:latest

WORKDIR /usr/src/appCrosland

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

ENV NODE_ENV production

CMD ["npm", "start"]
