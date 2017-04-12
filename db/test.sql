-- *********************************************************************
-- Update Database Script
-- *********************************************************************
-- Change Log: changesets/changeset-0-0-0-1.xml
-- Ran at: 27/03/17 01:33 PM
-- Against: admin@jdbc:sqlserver://127.0.0.1:1433;authentication=NotSpecified;authenticationScheme=nativeAuthentication;xopenStates=false;sendTimeAsDatetime=true;trustServerCertificate=false;TransparentNetworkIPResolution=true;serverNameAsACE=false;sendStringParametersAsUnicode=true;selectMethod=direct;responseBuffering=adaptive;packetSize=8000;multiSubnetFailover=false;loginTimeout=15;lockTimeout=-1;lastUpdateCount=true;encrypt=false;disableStatementPooling=true;databaseName=Tecnids;columnEncryptionSetting=Disabled;applicationName=Microsoft JDBC Driver for SQL Server;applicationIntent=readwrite;
-- Liquibase version: 3.5.3
-- *********************************************************************

USE [Tecnids];
GO

-- Create Database Lock Table
CREATE TABLE [dbo].[DATABASECHANGELOGLOCK] ([ID] [int] NOT NULL, [LOCKED] [bit] NOT NULL, [LOCKGRANTED] [datetime2](3), [LOCKEDBY] [nvarchar](255), CONSTRAINT [PK_DATABASECHANGELOGLOCK] PRIMARY KEY ([ID]))
GO

-- Initialize Database Lock Table
DELETE FROM [dbo].[DATABASECHANGELOGLOCK]
GO

INSERT INTO [dbo].[DATABASECHANGELOGLOCK] ([ID], [LOCKED]) VALUES (1, 0)
GO

-- Lock Database
UPDATE [dbo].[DATABASECHANGELOGLOCK] SET [LOCKED] = 1, [LOCKEDBY] = 'FRODRIGUEZL440 (10.11.1.29)', [LOCKGRANTED] = '2017-03-27T13:33:36.944' WHERE [ID] = 1 AND [LOCKED] = 0
GO

-- Create Database Change Log Table
CREATE TABLE [dbo].[DATABASECHANGELOG] ([ID] [nvarchar](255) NOT NULL, [AUTHOR] [nvarchar](255) NOT NULL, [FILENAME] [nvarchar](255) NOT NULL, [DATEEXECUTED] [datetime2](3) NOT NULL, [ORDEREXECUTED] [int] NOT NULL, [EXECTYPE] [nvarchar](10) NOT NULL, [MD5SUM] [nvarchar](35), [DESCRIPTION] [nvarchar](255), [COMMENTS] [nvarchar](255), [TAG] [nvarchar](255), [LIQUIBASE] [nvarchar](20), [CONTEXTS] [nvarchar](255), [LABELS] [nvarchar](255), [DEPLOYMENT_ID] [nvarchar](10))
GO

-- Changeset changesets/changeset-0-0-0-1.xml::1::frodriguez (generated)
ALTER TABLE [dbo].[detenido] ADD [idMegaMatcher] [varchar](30)
GO

INSERT INTO [dbo].[DATABASECHANGELOG] ([ID], [AUTHOR], [FILENAME], [DATEEXECUTED], [ORDEREXECUTED], [MD5SUM], [DESCRIPTION], [COMMENTS], [EXECTYPE], [CONTEXTS], [LABELS], [LIQUIBASE], [DEPLOYMENT_ID]) VALUES ('1', 'frodriguez (generated)', 'changesets/changeset-0-0-0-1.xml', GETDATE(), 1, '7:44efce657532c93783514a5019dfb7a8', 'addColumn tableName=detenido', '', 'EXECUTED', NULL, NULL, '3.5.3', '0643219200')
GO

-- Release Database Lock
UPDATE [dbo].[DATABASECHANGELOGLOCK] SET [LOCKED] = 0, [LOCKEDBY] = NULL, [LOCKGRANTED] = NULL WHERE [ID] = 1
GO

