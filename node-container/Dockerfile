FROM node:latest

# Define working directory
WORKDIR /workdir

# Firebase toolsのインストール
#RUN apt-get -y update && apt-get install -y sudo openjdk-11-jdk
RUN npm install -g firebase-tools

# Expose ports
ENV HOST 0.0.0.0
EXPOSE 3000
