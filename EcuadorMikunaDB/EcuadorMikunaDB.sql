-- Verificar si la base de datos ya existe y eliminarla si es necesario
IF EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = N'EcuadorMikunaDB')
BEGIN
    DROP DATABASE EcuadorMikunaDB;
END
GO

-- Crear la base de datos EcuadorMikunaDB
CREATE DATABASE EcuadorMikunaDB;
GO

-- Usar la base de datos recién creada
USE EcuadorMikunaDB;
GO

-- Crear la tabla Users
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(100) NOT NULL,
    PasswordHash NVARCHAR(256) NOT NULL,
    Email NVARCHAR(256) NOT NULL,
    FirstName NVARCHAR(100),
    LastName NVARCHAR(100),
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE()
);
GO
