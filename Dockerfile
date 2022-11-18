FROM node:latest

COPY . .

RUN npm install

EXPOSE 8081

ENTRYPOINT [ "node", "index.js" ]