FROM node:14.15.4-alpine

ENV PORT 4000

WORKDIR /opt/service/

COPY package.json ./
COPY package-lock.json ./
COPY index.js ./

RUN npm install

CMD ["npm", "start"]