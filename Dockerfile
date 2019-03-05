FROM node:alpine

RUN npm i -g typedoc lerna typescript

ADD . /estdlib

RUN cd /estdlib && npm run bootstrap && npm run tsc && npm run docs

RUN cd /estdlib/website && npm install

WORKDIR /estdlib/website
CMD [ "npm", "run", "server" ]
