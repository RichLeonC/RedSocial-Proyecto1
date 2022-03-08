create database dbRedSocialSQL;

use dbRedSocialSQL;
create table usuario
(
	correoElectronico varchar(150) primary key not null,
	nombre varchar(50),
    apellido varchar (50),
    fechaNacimiento date,
    clave varchar (200),
	intereses varchar (200),
    descripcionGeneral varchar (200),
    hobies varchar(200)
); 
