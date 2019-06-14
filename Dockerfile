############################
# Build container
############################
#FROM node:10-alpine AS dep

#WORKDIR /ops

#RUN apk add python make
#ADD package.json .
#RUN npm install

#ADD . .

############################
# Final container
############################
FROM stevehiehn/chord-melody-generator:latest

WORKDIR /ops

ADD . .

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get install nodejs -yq

#ADD . .

ADD package.json .
RUN npm install

#ADD . .

#COPY --from=dep /ops .
