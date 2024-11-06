FROM node:18

RUN mkdir -p /home/app

COPY ./app-nodejs/ /home/app

# Establecer el directorio de trabajo
WORKDIR /home/app

# Instalar las dependencias
RUN npm install

EXPOSE 5000

# Comando para iniciar la aplicación
CMD [ "node", "server.js" ]