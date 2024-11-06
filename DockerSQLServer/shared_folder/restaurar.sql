-- restaurar.sql
USE master;
GO

-- Restaurar la base de datos DEMO desde el archivo de respaldo
RESTORE DATABASE DEMO
FROM DISK = '/shared/backup.bak'
WITH REPLACE,
     MOVE 'DEMO' TO '/var/opt/mssql/data/DEMO.mdf',
     MOVE 'DEMO_log' TO '/var/opt/mssql/data/DEMO_log.ldf';
GO
