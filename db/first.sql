-- *********************************************************************
-- Update Database Script
-- *********************************************************************
-- Change Log: changesets/changeset-0-0-0-1.xml
-- Ran at: 12/04/17 09:51 AM
-- Against: admin@jdbc:sqlserver://127.0.0.1:1433;authentication=NotSpecified;authenticationScheme=nativeAuthentication;xopenStates=false;sendTimeAsDatetime=true;trustServerCertificate=false;TransparentNetworkIPResolution=true;serverNameAsACE=false;sendStringParametersAsUnicode=true;selectMethod=direct;responseBuffering=adaptive;packetSize=8000;multiSubnetFailover=false;loginTimeout=15;lockTimeout=-1;lastUpdateCount=true;encrypt=false;disableStatementPooling=true;databaseName=PruebaLiquibaseDev;columnEncryptionSetting=Disabled;applicationName=Microsoft JDBC Driver for SQL Server;applicationIntent=readwrite;
-- Liquibase version: 3.5.3
-- *********************************************************************

USE [PruebaLiquibaseDev];
GO

-- Lock Database
UPDATE [dbo].[DATABASECHANGELOGLOCK] SET [LOCKED] = 1, [LOCKEDBY] = 'FRODRIGUEZL440 (10.11.1.7)', [LOCKGRANTED] = '2017-04-12T09:51:45.169' WHERE [ID] = 1 AND [LOCKED] = 0
GO

-- Changeset changesets/changeset-0-0-0-1.xml::3::frodriguez (generated)
ALTER TABLE [dbo].[detenido] ADD [altura] [int]
GO

INSERT INTO [dbo].[DATABASECHANGELOG] ([ID], [AUTHOR], [FILENAME], [DATEEXECUTED], [ORDEREXECUTED], [MD5SUM], [DESCRIPTION], [COMMENTS], [EXECTYPE], [CONTEXTS], [LABELS], [LIQUIBASE], [DEPLOYMENT_ID]) VALUES ('3', 'frodriguez (generated)', 'changesets/changeset-0-0-0-1.xml', GETDATE(), 423, '7:d70ace03e72e2f99541aa21783221b3a', 'addColumn tableName=detenido', '', 'EXECUTED', NULL, NULL, '3.5.3', '2008706268')
GO

-- Release Database Lock
UPDATE [dbo].[DATABASECHANGELOGLOCK] SET [LOCKED] = 0, [LOCKEDBY] = NULL, [LOCKGRANTED] = NULL WHERE [ID] = 1
GO

