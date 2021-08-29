#FROM node:alpine

#WORKDIR /user/app

#COPY package.json .

#RUN npm install --quiet

#RUN mkdir -p ./scss ./css ./source

#COPY . .

FROM php:7.4-fpm-alpine

# Aktualisieren und Installation der Kernmodule
RUN set -ex \
    && apk upgrade --update \
    && apk add curl wget git openssh bash

# Korrigieren der Nutzerrechte
RUN apk add shadow \
    && usermod -u 1000 www-data \
    && groupmod -g 1000 www-data \
    && chown -R www-data:www-data /var/www \
    && chown -R www-data:www-data /var/www \
    && apk del shadow

# Zeitzone anpassen
RUN set -ex \
    && apk add tzdata \
    && ln -sf /usr/share/zoneinfo/UTC /etc/localtime \
    && echo "UTC" > /etc/timezone

# npm yarn
RUN set -ex \
    && apk add nodejs npm \
    && npm install -g yarn

USER www-data:www-data

WORKDIR /var/www/html

#COPY package.json .

#RUN npm install --quiet

#RUN mkdir -p ./scss ./js

#COPY . .

