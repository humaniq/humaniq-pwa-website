FROM eu.gcr.io/humaniq-168420/site:base

# Install app dependencies
COPY package.json /usr/src/app/
RUN cd $(npm root -g)/npm && npm install fs-extra && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js
RUN NODE_ENV=development npm install

# Prepage gloabl env
ENV NODE_ENV=production

# Bundle app source
ADD . /usr/src/app
RUN npm run build
ADD docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh
# RUN NODE_ENV=development npm run personal-build

ENTRYPOINT ["./docker-entrypoint.sh"]
