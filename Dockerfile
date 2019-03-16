FROM node:alpine

RUN npm i -g lerna
RUN apk --no-cache add git

ADD . /estdlib

RUN cd /estdlib && npm run bootstrap && npm run docs

RUN cd /estdlib/website && npm install

WORKDIR /estdlib/website
CMD [ "npm", "run", "server" ]
