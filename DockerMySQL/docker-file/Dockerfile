FROM node:16

# install the tooks i wish to use
RUN apt-get update && apt-get install -y zsh 
# install powerlevel10k
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Create app directory
RUN mkdir -p /home/app
#COPY . /home/app

# Create app space work
#WORKDIR /usr/src/app
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Copy at app source
COPY . .

#expose Puerto
EXPOSE 3000
#ejecutar
CMD [ "node", "server.js" ] 