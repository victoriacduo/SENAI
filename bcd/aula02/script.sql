drop database if exists pedidos; -- exclui o banco se existir 
create database pedidos charset=UTF8 collate utf8_general_ci; -- cria um novo com o padrão utf8 caracteres
use pedidos; -- acessa pedidos
-- DDL Criação da estrutura do Banco de Dados
create table clientes(
    id_cliente integer not null primary key auto_increment, -- integer não vazio chave primária
    pri_nome varchar(20) not null, -- não permite ficar em branco
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);
create table telefones(
        id_cliente integer not null,
        telefone varchar(15) not null,
        celular varchar(15) not null,
        foreign key (id_cliente) references clientes(id_cliente) -- cria o relacionamento da chave estrangeira para a primaria
);
create table pedidos(
    num_pedido integer not null primary key auto_increment, 
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null, --  999999,99
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

-- DML Alimentar o banco de dados com dados de testes
insert into clientes values -- se for colocar fora de ordem:
-- clientes (ordem alterada, sobrenome, pri_nome) value ou values, caso tenha mais de um valor
(null, "Jorge", "Silva", "Rua Coisa Bueno, Jaguariúna-SP"),
(null, "Vaness", "Cunha", "Rua Fulano Bueno, Pedreira-SP"),
(null, "Danete", "Santos", "Rua Naosei Oquela, Amparo-SP"),
(null, "Bernadete", "Vasconcelos", "Rua Carroça, Pirassununga-SP");

insert into telefones values
(1, "19-8548-6554", "18-98765-3456"),
(1, "19-5457-5151", "53-54785-6984"),
(2, "19-8548-6554", "21-49176-9873"),
(3, "19-5457-5151", "11-99247-5846");

insert into pedidos values
(null, 1, null, 10, "Pastel de frango", 2),
(null, 2, null, 8, "Coxinha", 5),
(null, 3, null, 3, "Bauru", 3),
(null, 3, null, 6, "Salame", 8),
(null, 4, null, 9, "Pastel de carne", 1),
(null, 5, null, 13, "Bolinha de queijo", 8),
(null, 6, null, 18, "Pão de queijo", 3),
(null, 6, null, 24, "Croquete", 6),
(null, 7, null, 53, "Pastel de pizza", 8);

select * from pedidos;
select * from telefones;
select * from clientes;