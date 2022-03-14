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


DELIMITER //
create procedure insertUsuario(IN correoElectronico varchar(150), IN nombre varchar(50), IN apellido1 varchar(50),
IN apellido2 varchar(50), IN fechaNacimiento date, IN clave varchar(200), IN intereses varchar (200), descripcionGeneral varchar (200),
IN hobbiese varchar (200))
BEGIN 
	insert into Usuario values(correoElectronico,nombre,apellido1,apellido2,fechaNacimiento,clave,intereses,descripcionGeneral,hobbiese);
END //
DELIMITER ;
-- Error de sintaxis--
DELIMITER // 
create procedure deleteTable (IN CorreoElectronico varchar(150))
BEGIN 
		delete from Usuario where correoElectronico= @CorreoElectronico;
END //
DELIMITER ;

drop procedure insertTable;

call insertTable('meguilu11@hotmail.com', 'Melissa', 'Alguera', 'Castillo', '2000-10-25', 'jacksonWang',
 'Kpop','Brilla Brilla estrellita', 'Bailar');
 
 select * from Usuario;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '534444';

describe Usuario;

insert into Usuario 
values('r29leonc@gmail.com','Richard','Leon','Chinchilla','2001-07-29',
'admin','Regueton','Estudiante','Jugar maincra');
