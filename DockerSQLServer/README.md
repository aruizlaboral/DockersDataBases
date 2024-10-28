# docker con MSSQL

## docker Comans
Docker 

```bash
  docker pull mcr.microsoft.com/mssql/server

  docker network ls
  docker network create myred

  docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=my_password" -e "MSSQL_PID=Express" -p 1433:1433  --name server-sql --hostname host-serversql  -d mcr.microsoft.com/mssql/server:2017-CU1-ubuntu

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Express" -p 1433:1433 --name server-sql --hostname host-serversql -d mcr.microsoft.com/mssql/server:2019-latest

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Express" -p 1433:1433 --name server-sql --hostname host-serversql -d mcr.microsoft.com/mssql/server:2019-latest

  #docker run --network myred -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adderlin@123" -e "MSSQL_PID=Evaluation" -p 1433:1433  --name sqlpreview --hostname sqlpreview -d mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04

```
## Archivo .env
```bash
  MSSQL_SA_PASSWORD=mypasssword
```

## Docker Compose
```bash
  cd /docker
  docker-compose -f docker/docker-compose-dev.yml up -d

  docker-compose up -d
  docker-compose ps
  docker-compose top

  docker-compose start
  docker-compose top

  docker-compose down -v
  docker-compose -f docker/docker-compose-dev.yml down
```

## docker iterator
Docker 
Comandos interacion 
```bash
  # Iniciar y verificar el contenedor
  docker-compose up -d
  docker ps
  # Acceder a la terminal del contenedor
  docker exec -it server-sql /bin/bash

  # Conectarse a SQL Server desde dentro del contenedor
  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "my_password"

  # Acceder a la terminal y Conectarse a SQL Server del contenedor (2 en 1)
  docker exec -it server-sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P my_password

  # consultas en motor SQL Server del contenedor
  SELECT name FROM sys.databases;
  GO
  # Para salir de sqlcmd
  EXIT
  #  Salir del contenedor
  exit
``` 

Comandos para ejecutar cargadatos.sql desde Volumen Compartido
```bash
  #Para crear una base de datos en SQL Server
  docker exec -it server-sql-2017 /bin/bash
  ls /shared
  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "my_password" -i /shared/cargadatos.sql
  exit
```

Contenido de cargadatos.sql
```sql
  /*Para crear una base de datos en SQL Server*/
  CREATE DATABASE COLEGIO
  USE COLEGIO
  go
  /* Para crear una tabla en SQL Server*/
  create table estudiante
  (
  nombre varchar(12),
  nota int
  )
  /* Para insertar datos en SQL Server*/
  Insert into estudiante values ('Jonas',58)
  Insert into estudiante values ('Juan',36)
  Insert into estudiante values ('Johny',49)

```

## link

[docker] (https://hub.docker.com/r/microsoft/mssql-server/)


## Directorios

rutas de instalacion
```bash
  /opt/mssql/ 		#Esto es donde se instala el motor de base de datos.
  /opt/mssql-tools/bin/ #Esto es donde se encuentra mssql-tool
  /var/opt/mssql/data/ 	#Aquí es donde se guardan los archivos .mdf (datos) y .ldf (registros) para las bases de datos.
```
## Backup de Bases de Datos MSSQL
Backup de Bases de Datos
```bash
  docker-compose up -d
  docker-compose exec sql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'mypassword' -Q "BACKUP DATABASE [nombre_base_datos] TO DISK='/shared/nombre_base_datos.bak'"
  # Otra alternativa
  docker-compose up -d
  docker exec -it server-sql-2017 /bin/bash
  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "mypassword" -i /shared/backup.sql
```

## Directorios
Restauracion de Bases de Datos
```bash
  docker-compose up -d
  docker-compose exec sql-server /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'mypassword' -Q "RESTORE DATABASE [nombre_base_datos] FROM DISK='/shared/nombre_base_datos.bak' WITH REPLACE"
  # Otra alternativa
    docker-compose up -d
  docker exec -it server-sql-2017 /bin/bash
  /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "mypassword" -i /shared/restaurar.sql

  #verificacion de datos
  docker-compose exec sql-server bash
  /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'mypassword'
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