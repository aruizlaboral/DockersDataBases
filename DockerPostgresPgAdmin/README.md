# Docker con Postgres


## Docker Comands
Comands
```bash
  docker pull postgres:14.5
  docker run -it --rm --network my-network postgres psql -h my-postgres -U postgres
  docker run --name server-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=myDB -d postgres:14.5
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

## Docker DockerFile
Docker DockerFile
```bash
  docker build -t myimagenpostgres:14.0 .
  docker images
  docker ps -a
  docker run --name mi-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=postgres -d myimagenpostgres:14.0
  docker stop mi-postgres

```

## Docker Composer
Docker DockerCompose

```bash
  cd /docker
  docker-compose -f docker/docker-compose-dev.yml up -d

  docker-compose up -d
  docker-compose ps
  docker-compose top

  docker-compose start
  docker-compose top

  docker-compose down -v
  docker-compose -f docker/docker-compose-dev.yml down -v
```

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


## Directorios

rutas de instalacion
```bash
  /var/lib/postgresql/data 	#Aquí es donde se guardan los archivos para las bases de datos.
  /var/lib/postgresql/data
```
