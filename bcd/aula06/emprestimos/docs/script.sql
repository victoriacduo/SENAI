DROP DATABASE IF EXISTS emprestimos;
CREATE DATABASE emprestimos charset=UTF8 COLLATE utf8_general_ci;
USE duplicatas;

CREATE TABLE clientes(
    cpf VARCHAR(11) NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    cep VARCHAR(15) NOT NULL,
    complemento VARCHAR(30)
);

CREATE TABLE telefones(
    cpf VARCHAR(11) NOT NULL,
    tipo VARCHAR(25) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf)
);

CREATE TABLE emprestimos(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(11) NOT NULL,
    data DATE NOT NULL,
    capital INTEGER(20) NOT NULL,
    n_parcelas VARCHAR(2) NOT NULL,
    taxa_juros INTEGER
    FOREIGN KEY (cpf) REFERENCES clientes(cpf)
);