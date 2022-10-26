drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table telefones(
    id_cliente integer not null,
    numero varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe telefones;
describe clientes;
show tables;

insert into clientes values(1,"Ana de Souza de Oliveira","2000-05-22","M",65.5);
insert into clientes values(2,"Ana Oliveira Oliveira","1990-08-23","T",88);
insert into clientes values(3,"Lúcia da Silva de Souza","1988-06-14","F",45.5);
insert into clientes values(4,"Marcos de Souza Castro","2002-07-13","M",98);
insert into clientes values(5,"Maria Oliveira Castro","2005-08-14","T",101);
insert into clientes values(6,"Jurema de Souza Castro","2007-06-15","F",80);

select * from clientes;

insert into telefones values (1, "(11)04023-4384");
insert into telefones values (1, "(14)3288-8530");
insert into telefones values (2, "(21)74746-1126");
insert into telefones values (2, "(14)64505-3435");
insert into telefones values (2, "(19)03086-1102");
insert into telefones values (3, "(14)64500-3435");
insert into telefones values (4, "(19)28260-0126");
insert into telefones values (5, "(21)34757-1544");
insert into telefones values (6, "(19)3030-4465");
insert into telefones values (6, "(19)93030-4460");

select * from telefones;