FROM node:lts-alpine3.19 as build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node . .

RUN npm run build

USER node

FROM node:lts-alpine3.19

WORKDIR /app

COPY --chown=node:node --from=build /app/dist /app/dist
COPY --chown=node:node --from=build /app/node_modules /app/node_modules

CMD ["node", "./dist/main.js"]
