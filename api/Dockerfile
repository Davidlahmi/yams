FROM node:20

WORKDIR /usr/src/api

COPY package.json .
COPY tsconfig.json .

RUN npm install\
    && npm install -g typescript tsx

COPY . .

EXPOSE 3001

CMD [ "tsx", "watch", "src/index.ts" ]