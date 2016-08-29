FROM resin/rpi-raspbian
RUN apt-get -y update && \
    apt-get -y install build-essential && \
    wget -qO- https://deb.nodesource.com/setup | bash - && \
    apt-get install -y nodejs-legacy && \
    apt-get install -y npm

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app/ && cp -a /tmp/node_modules /app/

RUN npm install webpack -g
RUN npm install nodemon -g

ADD . /app
WORKDIR /app

EXPOSE 4000

ENV NODE_ENV "production" 

CMD ["/bin/sh", "./start.sh"]
