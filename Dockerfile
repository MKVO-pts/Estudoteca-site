FROM node:alpine
#copy files to /app in container
COPY . /app
WORKDIR /app

#execute comands
RUN npm init -y

#port
EXPOSE 80


#run node.js
CMD node
