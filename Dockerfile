# créditos: https://medium.elegantly.rocks/dockerize-your-angular-development-environment-3d5ea055ac2d'
# we choose the lts version
FROM node:lts

# set working directory
WORKDIR /app

#RUN npm install # no docker-compose
RUN npm install -g @angular/cli@latest

# start app # no docker-compose
# https://stackoverflow.com/questions/43492354/how-to-allow-access-outside-localhost
#CMD ["ng",  "serve", "--host", "0.0.0.0"]
