FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

ENV PRISMA_DATABASE_URL ${PRISMA_DATABASE_URL}

RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "start"]