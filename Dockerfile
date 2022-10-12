FROM node:16.17.1-alpine3.15

# RUN mkdir -p /home/app
# set working directory
RUN mkdir -p /app/public
RUN mkdir -p /app/src

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install #--silent
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
# COPY . ./
COPY public /app/public
COPY src /app/src
COPY README.md /app/src

# start app
CMD ["npm", "start"]