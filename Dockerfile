FROM node:12-alpine

RUN mkdir -p /usr/src/sosi-react-bootstrap
WORKDIR /usr/src/sosi-react-bootstrap

COPY --chown=node:node . /usr/src/sosi-react-bootstrap/

RUN yarn install
RUN yarn build

EXPOSE 4000 

CMD [ "yarn", "start", "-p", "4000"]
