# Docker con Mysql


## Docker Comands
Comands
```bash
  docker pull mysql:8.0.40
  docker run -p:3306:3306 -d --name server-mysql -e MYSQL_ROOT_PASSWORD=adderlin mysql:8.0.40
  dockedocker rm -f server-mysql #detener y eliminar el contenedor en un solo paso
```

## iterations
iterations  Docker 
```bash
  docker exec -it server-mysql bash
  mysql --version
  mysql -u root -p
  show databases;
  create database MyProyecto;
  use MyProyecto;
  create table usuarios (id int not null primary key, nombre varchar(30));
  insert into usuarios value (1, "admin");
  insert into usuarios value (2, "plataforma");
  insert into usuarios value (3, "caja");
  exit
  ```

## Docker DockerFile
Docker DockerFile
```bash
  docker build -f docker-file/Dockerfile -t mi-imagenMysql .
  docker run -d --name nombre-contenedor mi-imagenMysql

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
## docker Mysql con archivo sql
Docker Mysql Ejecutar archivo .sql
```bash
  docker exec -it server-mysql bash
  mysql -u root -p
  show databases;
  exit
  mysql -u root -p mydatabase < /shared_folder/sistema_tramite.sql
  show databases;
```

## docker Mysql Backup
Docker Mysql Backup
```bash
  docker exec -it server-mysql bash
  mysql -u root -p
  show databases;
  mysqldump -u root -p mydatabase > /shared_folder/mydatabase_backup.sql
```

## docker Mysql Backup Restore
Docker Mysql Backup
```bash
  docker exec -it server-mysql bash
  mysql -u root -p
  show databases;
  create database bd_restaurar;
  \d      (control+d)
  exit
  mysql -u root -p bd_restaurar < /shared_folder/mydatabase_backup.sql
```

## link
[docker] (https://hub.docker.com/_/Mysql/)


## Directorios

rutas de instalacion
```bash
  /var/lib/Mysqlql/data 	#Aquí es donde se guardan los archivos para las bases de datos.
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