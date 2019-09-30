FROM node:10-alpine as base

FROM base as builder
RUN apk add make python jq
COPY package*.json ./
RUN jq .version package.json -r > version.txt
RUN npm install --only=production
RUN mv node_modules node_modules_prod
RUN npm install
COPY . .
RUN npm run build

FROM base
RUN apk add bash openssl
WORKDIR /api
COPY --from=builder version.txt .
COPY --from=builder /dist ./dist
COPY --from=builder /bin ./bin
COPY --from=builder /node_modules_prod ./node_modules
USER node
