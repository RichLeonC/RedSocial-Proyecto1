create database dbRedSocialSQL;

use dbRedSocialSQL;
create table Usuario
(
	correoElectronico varchar(150) primary key not null,
	nombre varchar(50) not null,
    apellido1 varchar (50) not null,
    apellido2 varchar (50) not null,
    fechaNacimiento date,
    clave varchar (200) not null,
	intereses varchar (200),
    descripcionGeneral varchar (200),
    hobbies varchar(200)
); 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '534444';

describe Usuario;

insert into Usuario 
values('r29leonc@gmail.com','Richard','Leon','Chinchilla','2001-07-29',
'admin','Regueton','Estudiante','Jugar maincra');
