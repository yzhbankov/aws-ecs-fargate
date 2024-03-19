FROM node:20-alpine

ARG DATABASE_CONNECTION_URI

ENV DATABASE_CONNECTION_URI=$DATABASE_CONNECTION_URI

WORKDIR /aws-ecs-fargate

COPY ./dev-ops/docker/entrypoint.sh ./entrypoint.sh
COPY . .

RUN yarn install --frozen-lockfile
RUN apk add --no-cache bash
RUN apk add --no-cache stress-ng

EXPOSE 3000

ENTRYPOINT ./entrypoint.sh
