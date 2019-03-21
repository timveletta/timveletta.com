# =============================
# BUILD ENVIRONMENT
# =============================
FROM node:alpine as builder

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package-lock.json ./
# RUN npm ci --only=production
COPY . /usr/src/app
RUN npm install -g gatsby-cli
RUN npm install
RUN npm run build