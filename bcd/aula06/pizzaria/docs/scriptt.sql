DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria CHARSET=UTF8 COLLATE utf8_general_ci;
USE pizzaria;

CREATE TABLE clientes(
    cliente_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(30) NOT NULL,
    logradouro VARCHAR(30) NOT NULL,
    numero DECIMAL(5,0),
    complemento VARCHAR(30),
    bairro VARCHAR(30),
    referencia VARCHAR(30)
);

CREATE TABLE pizzas(
    pizza_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    valor DECIMAL(8,2) NOT NULL
);

CREATE TABLE telefones(
    cliente_id INTEGER NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id) ON DELETE CASCADE
);

LOAD DATA INFILE 'D:/logic/SENAI/Segundo Semestre/bcd/aula06/pizzaria/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '/r/n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/logic/SENAI/Segundo Semestre/bcd/aula06/pizzaria/docs/pizzas.csv'
INTO TABLE pizzas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '/r/n'
IGNORE 1 ROWS;