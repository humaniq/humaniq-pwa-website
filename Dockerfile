FROM eu.gcr.io/humaniq-168420/site:base

# Install app dependencies
COPY package.json /usr/src/app/
RUN NODE_ENV=development npm install && \
    NODE_ENV=development npm run personal-build

# Prepage gloabl env
ENV NODE_ENV=production

# Bundle app source
ADD . /usr/src/app
ADD docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
