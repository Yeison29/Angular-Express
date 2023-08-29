# Angular-Express
Proyecto de clases de Angular y express

## Requerimientos

- Node js
- NPM

## Creación del proyecto



Debe dirigirse a la carpeta correspondiente que quiere iniciar el proyecto y ejecutar el siguiente comando

```
   > npm init
```

Este comando iniciara pidiendo información sobre el proyecto que se quiere realizar, como nombre del paquete, autor, descripción licencia, etc. Seguidamente usted debera agregar o instalar express con el siguiente comando


```
   > npm i express
```

Al terminar el comando se crearan la carpta **node_modules** donde se econtraran las dependencias instaladas, el archivo **package.json** donde encontrará la información del proyecto y/o dependencias instaladas.

## Codificación

Se debe crear el archivo **index.js** en el cual se empezará a digitar el código.

Cabe aclarar que también es necesario ejecutar los siguientes comandos para instalar body-parser y nodemon


```
   > npm i body-parser
   > npm i nodemon
```

En caso tal de no tener instalado nodemon de manera global se debe ejecutar el siguiente comando

``` 
   > npm i -g nodemon
```

Para inicializar el servicio basta con ejecutar el comando 

``` 
   > nodemon .
```

Si el comando genera un error de permisos ejecutar el siguiente comando en Windows power shell (modo administrador) 


```
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

###> CONFIG SERVER <####
PORT=3200
###> CONFIG SERVER <####

###> DB_CONNECTION ### 
DB_URL_PG=postgres://postgres:ADMIN@localhost:5432/prueba
###< CONFIGURE SERVER ###

###> SECRET_KEY ###
SECRET_KEY=
###< SECRET_KEY ###

esto va en el .env

CREATE TABLE producto(
	id_producto serial,
	nombre varchar(500),
	detalle varchar(1000),
	CONSTRAINT pk_id_producto PRIMARY KEY (id_producto)
)

 