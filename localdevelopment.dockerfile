FROM ubuntu:18.04

WORKDIR /app

RUN apt-get update -yq 
RUN apt-get -yq install curl gnupg 
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash 
RUN apt-get update -yq 
RUN apt-get install -yq nodejs
RUN node -v 
RUN npm install -g nx gatsby-cli yarn