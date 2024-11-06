# Docker con Oracle

## link
[OFICIAL ORACLE DATABASE] (https://container-registry.oracle.com/ords/f?p=113:10)
[VIDEO - OFICIAL ORACLE DATABASE] (https://www.youtube.com/watch?v=56dSXI2PbCQ&ab_channel=DatabaseStar)
[VIDEO - DOCKERFILE ORACLE DATABASE] (https://www.youtube.com/watch?v=Xb0QKPQGAUo&ab_channel=TramoTech)

## Docker Login
Comands
```bash
  docker login container-registry.oracle.com
  # Username: correoRegistrado@gmail.com
  # Password: 
  # Login Succeeded

```
Comands
```bash
  docker pull container-registry.oracle.com/database/express:18.4.0-xe
  docker pull container-registry.oracle.com/database/express:21.3.0-xe
  #docker pull container-registry.oracle.com/database/express:latest

  docker run -d --name server-oracle-18c  container-registry.oracle.com/database/express:18.4.0-xe

  #Changing the Default Password for SYS User
  docker exec server-oracle-18c ./setPassword.sh mypassword
  docker ps
  docker logs server-oracle-18c
  docker stop server-oracle-18c	#Parar un Contenedor
  docker rm -f server-oracle-18c #Parar  y eliminar el contenedor

  #varios parametros
  docker run -d --name server-oracle-18c -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=mypassword -e ORACLE_CHARACTERSET=AL32UTF8 -v oracle-data:/opt/oracle/oradata container-registry.oracle.com/database/express:18.4.0-xe
  
  #varios parametros
  docker run -d --name server-oracle-21c \
  -p 1521:1521 -p 5500:5500 \
  -e ORACLE_PWD=mypassword \
  -e ORACLE_CHARACTERSET=AL32UTF8 \
  -v oracle-data:/opt/oracle/oradata \
  container-registry.oracle.com/database/express:21.3.0-xe

  # ORACLE_PWD  : The Oracle Database SYS, SYSTEM and PDB_ADMIN password
  https://localhost:5500/em/
```

## link
[Oracle Enterprise Manager Express] (http://localhost:5500/em)


## iterations
iterations  Docker 
```bash


  docker exec -it server-oracle-18c bash

  docker exec -it server-oracle-18c sqlplus / as sysdba

  docker exec -it server-oracle-18c sqlplus sys/mypassword@XE as sysdba
  docker exec -it server-oracle-18c sqlplus system/mypassword@XE
  docker exec -it server-oracle-18c sqlplus pdbadmin/mypassword@XEPDB1

  # Listar los Schemas (Usuarios) en la Base de Datos
  sqlplus / as sysdba
  exit
  
  #sqlplus system/mypassword@//localhost:1521/XE
  sqlplus system/mypassword@XE
  SELECT username FROM all_users;
  SELECT directory_name, directory_path FROM dba_directories;
  sqlplus sys/mypassword@XE AS SYSDBA
  exit
  ```

## Docker DockerFile
Docker DockerFile
```bash
  docker build -f docker-file/Dockerfile -t mi-imagenOracle .
  docker run -d --name nombre-contenedor mi-imagenOracle

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
## docker Oracle con archivo sql
Docker Oracle Ejecutar archivo .sql
```bash
  docker exec -it server-oracle-18c bash
  #docker exec -it server-oracle-18c sqlplus / as sysdba

  #sqlplus usuario/contraseña@nombre_base_de_datos
  sqlplus sys/mypassword@XE as sysdba
  sqlplus system/mypassword@XE
  sqlplus pdbadmin/mypassword@XEPDB1

  #sqlplus usuario/contraseña@nombre_base_de_datos @/ruta/completa/scripts.sql
  #sqlplus usuario/contraseña@nombre_base_de_datos @scripts.sql
  sqlplus usuario/contraseña@nombre_base_de_datos @/shared_folder/scripts.sql > salida.txt
  exit
```

## docker Oracle Backup
Docker Oracle Backup: base de datos Oracle, especialmente en producción, es preferible utilizar RMAN o expdp.
```bash
  docker exec -it server-oracle-18c bash

  sqlplus / as sysdba

  #sqlplus usuario/contraseña@nombre_base_de_datos
  sqlplus sys/mypassword@XE as sysdba
  sqlplus system/mypassword@XE
  sqlplus pdbadmin/mypassword@XEPDB1

  # expdp usuario/contraseña@nombre_base_de_datos directory=DIR_NAME dumpfile=respaldo.dmp logfile=respaldo.log full=y
  expdp system/mypassword@XE directory=/shared_folder/backup dumpfile=respaldo.dmp logfile=respaldo.log full=y

```

## docker Oracle Backup Restore
Docker Oracle Backup: base de datos Oracle, especialmente en producción, es preferible utilizar RMAN o expdp.
```bash
  docker exec -it server-oracle-18c bash

  sqlplus / as sysdba

  #sqlplus usuario/contraseña@nombre_base_de_datos
  sqlplus sys/mypassword@XE as sysdba
  sqlplus system/mypassword@XE
  sqlplus pdbadmin/mypassword@XEPDB1

  #impdp usuario/contraseña@nombre_base_de_datos directory=DIR_BACKUP dumpfile=respaldo_completo.dmp logfile=restauracion.log full=y
  impdp sys/mypassword@XE directory=/shared_folder/backup dumpfile=respaldo_completo.dmp logfile=restauracion.log full=y


```

## link
[OFICIAL ORACLE DATABASE] (https://container-registry.oracle.com/ords/f?p=113:10)
[OFICIAL ORACLE DATABASE] (https://container-registry.oracle.com/ords/f?p=113:1:14280437884750::::FSP_LANGUAGE_PREFERENCE:&cs=3jljvp5FlAtOsAIJ5WsMCRRxzQLXEgVuLuiNkllWrErIXrUrEuhM5hwF_1UVM0CR1mKtcLTIkmTLfmWwjgoORMw)
[OFICIAL ORACLE DATABASE] (https://docs.oracle.com/en/database/oracle/oracle-database/index.html)

## Directorios

rutas de instalacion
```bash
  /var/lib/Oracleql/data 	#Aquí es donde se guardan los archivos para las bases de datos.
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
