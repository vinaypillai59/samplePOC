FROM node:12.18-alpine

RUN mkdir -p /home/node/demoapp/node_modules && chown -R node:node /home/node/demoapp

WORKDIR /home/node/demoapp

COPY ["package*.json", "./"]

USER node

# If you are building your code for production
# RUN npm install --only=production
RUN npm install --quiet

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "start" ]
