FROM node:16.20.2-alpine
COPY package*.json ./
RUN npm install --force
EXPOSE 3000
CMD [ "npm", "start" ]