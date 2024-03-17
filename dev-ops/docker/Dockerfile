FROM node:20-alpine as build-alpine

WORKDIR /web-server

COPY ./dev-ops/docker/entrypoint.sh ./entrypoint.sh
COPY .. .

RUN yarn install --frozen-lockfile

EXPOSE 3000
EXPOSE 6379
EXPOSE 27017

ENTRYPOINT ./entrypoint.sh
