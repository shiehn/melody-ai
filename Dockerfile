FROM stevehiehn/chord-melody-generator:latest

WORKDIR /ops

ENV MODEL_PATH /chords-to-melody-generator/
ENV MIDI_OUTPUT /tmp

ADD . .

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash \
    && apt-get install nodejs -yq

WORKDIR /chords-to-melody-generator

RUN git checkout . && git pull && mvn package

WORKDIR /ops

ADD package.json .
RUN npm install

