# Docker con mongo


## Docker Comands
Comands
```bash
  docker pull mongo:8.0.3
  docker run -d --name server-mongo mongo:8.0.3

  docker run -d --name server-mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=mypassword --network my-network -v ./shared_folder:/etc/mongo --config /etc/mongo/mongod.conf --serviceExecutor adaptive --wiredTigerCacheSizeGB 1.5 mongo:8.0.3

  dockedocker rm -f server-mongo

  docker run -it --rm -network my-network mongo	mongosh --host server-mongo -u mongoadmin -p mypassword --authenticationDatabase mongoadmin 	some-db mongo:8.0.3
  
  dockedocker rm -f server-mongo #detener y eliminar el contenedor en un solo paso
```

## iterations
iterations  Docker 
```bash
  docker exec -it server-mongo bash
  exit
  docker logs server-mongo
```

## Docker DockerFile
Docker DockerFile
```bash
  docker build -f docker-file/Dockerfile -t mi-imagenmongo .
  docker run -d --name nombre-contenedor mi-imagenmongo

```

## Docker Composer
Docker DockerCompose

```bash
  cd /docker
  # docker-compose up --build
  docker-compose -f docker/docker-compose-dev.yml up -d

  docker-compose up -d
  docker-compose ps
  docker-compose top

  docker-compose start
  docker-compose top

  docker-compose down -v
  docker-compose -f docker/docker-compose-dev.yml down -v
```
## docker mongo con archivo sql
Docker mongo Ejecutar archivo .sql
```bash
  docker exec -it server-mongo bash
  mongoimport -u mongoadmin -p mypassword --authenticationDatabase admin --collection users -- < /shared_folder/sistema_tramite.sql
```

## docker mongo Backup
Docker mongo Backup
```bash
  docker exec -it server-mongo bash
```

## docker mongo Backup Restore
Docker mongo Backup
```bash
  docker exec -it server-mongo bash
```

## link
[docker] (https://hub.docker.com/_/mongo/)


## Directorios

rutas de instalacion
```bash
  /var/lib/mongoql/data 	#Aquí es donde se guardan los archivos para las bases de datos.
```


## detener y Eliminar
detener y Eliminar
```bash
  docker stop nombre-contenedor	#Parar un Contenedor
  docker rm nombre-contenedor	#Eliminar un Contenedor
  docker rm -f nombre-contenedor	#Parar  y eliminar el contenedor

  docker container prune	#Eliminar Todos los Contenedores Detenidos
  docker stop $(docker ps -q)	#Parar todos los contenedores

  docker rm $(docker ps -aq)	#Eliminar  todos los contenedores, incluidos los detenido
  docker rmi nombre-imagen	#Eliminar una imágenes
  docker rmi $(docker images -q)	#Eliminar todas las imágenes

  docker network prune	#Eliminar redes no utilizadas
  docker volume prune #Eiminar volúmenes no utilizados
  docker docker system prune -a	#eliminar todos los contenedores, imágenes, redes y volúmenes no utilizados 

  docker-compose down -v #para el contendedor y redes y volúmenes utilizados en compose
```