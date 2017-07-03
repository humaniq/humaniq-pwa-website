FROM eu.gcr.io/humaniq-168420/buttercms-blog:base

# Prepage gloabl env
ENV NODE_ENV=production

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
ADD . /usr/src/app
ADD docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
