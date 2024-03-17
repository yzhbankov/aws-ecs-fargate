FROM node:20-alpine

WORKDIR /aws-ecs-fargate

COPY ./dev-ops/docker/entrypoint.sh ./entrypoint.sh
COPY . .

RUN yarn install --frozen-lockfile
RUN apk add --no-cache bash

EXPOSE 3000
EXPOSE 6379
EXPOSE 27017

ENTRYPOINT ./entrypoint.sh
