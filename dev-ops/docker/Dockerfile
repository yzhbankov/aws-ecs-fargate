FROM node:20-alpine

ARG DATABASE_CONNECTION_URI
ARG REDIS_HOST

ENV DATABASE_CONNECTION_URI=$DATABASE_CONNECTION_URI
ENV REDIS_HOST=$REDIS_HOST

WORKDIR /aws-ecs-fargate

COPY ./dev-ops/docker/entrypoint.sh ./entrypoint.sh
COPY . .

RUN yarn install --frozen-lockfile
RUN apk add --no-cache bash
RUN apk add --no-cache stress-ng

EXPOSE 3000

ENTRYPOINT ./entrypoint.sh
