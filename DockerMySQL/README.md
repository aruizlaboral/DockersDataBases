<<<<<<< HEAD
# Docker con Postgres
=======
# Docker con Mysql
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18


## Docker Comands
Comands
```bash
<<<<<<< HEAD
  docker pull mysql:8.0
  docker run -p:3306:3306 -d --name server-mysql -e MYSQL_ROOT_PASSWORD=adderlin mysql
  
  docker run -p:3306:3306 -d --name server-mysql -e MYSQL_ROOT_PASSWORD=adderlin mysql

  docker-compose up --build

  docker exec -it server-mysql bash

=======
  docker pull mysql:8.0.40
  docker run -p:3306:3306 -d --name server-mysql -e MYSQL_ROOT_PASSWORD=adderlin mysql:8.0.40
  dockedocker rm -f server-mysql #detener y eliminar el contenedor en un solo paso
```

## iterations
iterations  Docker 
```bash
  docker exec -it server-mysql bash
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18
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
<<<<<<< HEAD

  ---------------------------------BACKUP ---------------------------------
  # para backup 
  mysqldump -u <nombre_usuario> -p <nombre_base_datos> > backup.sql

  # para restaur backup 
  mysql -u root -p
  show databases;
  create database sistema_tramite;
  \d      (control+d)
  mysql -u <nombre_usuario> -p <nombre_base_datos> < backup.sql




```

## iterations
iterations  Docker 
```bash
  docker exec -it server-postgres bash
   # (control+l) ----para limpiar
  postgres --version
  psql -U postgres --db myDB -password
    myBD=# SELECT current_user; 
    myBD=# \l
    myBD=# CREATE DATABASE test;
    myBD=# \l
    myBD=# \d
    myBD=# select 1+1 as result
    myBD=# \q
    control+d  (X2)-- salir 
```
=======
  ```
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18

## Docker DockerFile
Docker DockerFile
```bash
<<<<<<< HEAD
  docker build -t myimagenpostgres:14.0 .
  docker images
  docker ps -a
  docker run --name mi-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=postgres -d myimagenpostgres:14.0
  docker stop mi-postgres
=======
  docker build -f docker-file/Dockerfile -t mi-imagenMysql .
  docker run -d --name nombre-contenedor mi-imagenMysql
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18

```

## Docker Composer
Docker DockerCompose

```bash
  cd /docker
<<<<<<< HEAD
=======
  # docker-compose up --build
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18
  docker-compose -f docker/docker-compose-dev.yml up -d

  docker-compose up -d
  docker-compose ps
  docker-compose top

  docker-compose start
  docker-compose top

  docker-compose down -v
  docker-compose -f docker/docker-compose-dev.yml down -v
```
<<<<<<< HEAD

## docker Postgres Backup
Docker Postgres Backup
```bash
  docker exec -it server-postgres bash
  cd bin
  pg_dump -U postgres -W -h localhost agua > agua-backup.sql
  # pg_dump -U postgres -W -h localhost agua > C:\Users\CPU\Downloads\agua.sql
  psql -U postgres


```
## docker Postgres Backup Restore
Docker Postgres Backup
```bash
  docker exec -it server-postgres bash
  psql -U postgres
  create database agua_restaurada
  \q
  psql -h localhost -p 5432 -U postgres -f agua.sql agua_restaurada
  #psql -h localhost -p 5432 -U postgres -f C:\Users\CPU\Downloads\agua.sql agua_restaurada
  
```

## link

[docker] (https://hub.docker.com/_/postgres/)
=======
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
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18


## Directorios

rutas de instalacion
```bash
<<<<<<< HEAD
  /var/lib/postgresql/data 	#Aquí es donde se guardan los archivos para las bases de datos.
  /var/lib/postgresql/data
```
=======
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
>>>>>>> a4de7595995a29d65a42b2b51cde6310a674cf18
