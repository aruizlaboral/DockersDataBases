-- backup.sql
BACKUP DATABASE COLEGIO
TO DISK = '/shared/DEMO.bak'
WITH FORMAT,
     MEDIANAME = 'SQLServerBackups',
     NAME = 'Full Backup of DEMO';
GO