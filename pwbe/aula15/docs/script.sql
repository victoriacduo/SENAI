drop database if exists consultorio;
create database consultorio charset=UTF8 collate utf8_general_ci;
use consultorio;

create table profissionais(
    id_prof int not null auto_increment primary key auto_increment,
    nome varchar(30) not null,
    especialidade varchar(30) not null
);

create table consultas(
    id_con int not null auto_increment primary key,
    paciente varchar(30) not null,
    data date not null,
    horario time not null,
    id_prof int not null,
    foreign key (id_prof) references profissionais(id_prof)
);

create table tratamentos(
    id_trat int not null auto_increment primary key,
    id_con int not null,
    tratamento varchar(20) not null,
    valor int not null,
    foreign key (id_con) references consultas(id_con)
);

describe profissionais;
describe consultas;
describe tratamentos;
show tables;

insert into profissionais values
(1, "Ana Flávia", "Dentista"),
(2, "Maria Silva", "Ortodentista"),
(3, "Marcos Coelho", "Anestesista");

insert into consultas values
(1, "Carlos Roberto", "2022/11/23", "13:45", 1),
(2, "Juliana Solza", "2022/11/23", "14:45", 1),
(3, "Carla Oliveira", "2022/11/23", "15:45", 1),
(4, "Mariana Oliveira", "2022/11/23", "13:45", 2),
(5, "Gilberto Solza", "2022/11/23", "14:45", 2),
(6, "Carolina Oliveira", "2022/11/23", "15:45", 2),
(7, "Ester Oliveira", "2022/11/23", "13:45", 3),
(8, "Flávia Mattos", "2022/11/23", "14:45", 3),
(9, "Carolnia Martins", "2022/11/23", "15:45", 3);

insert into tratamentos values
(1, 1, "Carie", 100),
(2, 1, "Limpeza", 50),
(3, 2, "Canal", 500),
(4, 2, "Limpeza", 50),
(5, 3, "Prótese", 1000),
(6, 4, "Prótese", 1000),
(7, 5, "Correção Óssea", 1500),
(8, 5, "Limpeza", 50),
(9, 6, "Extração", 300),
(10, 6, "Implante", 2000),
(11,7, "Limpeza", 50),
(12, 8, "Limpeza", 50),
(13, 9, "Limpeza", 50);

create view vw_consultas as 
select p.id_prof, p.nome, p.especialidade, c.id_con,
c.paciente, c.data, c.horario, t.id_trat,
t.tratamento, t.valor from profissionais p
inner join consultas c on p.id_prof = c.id_prof
join tratamentos t on c.id_con = t.id_con;

select * from profissionais;
select * from consultas;
select * from tratamentos;
select * from vw_consultas;