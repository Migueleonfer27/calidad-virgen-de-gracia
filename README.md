# 🗒️ Proyecto Calidad - CIFP Virgen de Gracia

Calidad es un proyecto web para informatizar la sección de calidad del Instituto Virgen de Gracia, automatizando procesos de gestión documental. Permitirá digitalizar formularios, optimizar el llenado de documentación y mejorar el seguimiento de registros, facilitando el control de calidad de forma eficiente y centralizada. El proyecto está siendo desarrollado por: **Javier Arias Calero**, **Daniel Cruz Villegas**, **Miguel León Fernández**, **Jaime Ortega Núñez** y **Gema Rubio Sánchez**.

## 🚀 Instalación y ejecución del proyecto 
Sigue los pasos a continuación para clonar y ejecutar la aplicación en tu entorno local. 

### 1️⃣ Clona el repositorio 
```bash 
	git clone https://github.com/Migueleonfer27/calidad-virgen-de-gracia.git 
	cd calidad-virgendegracia
```
### 2️⃣ Instalación de dependencias
Es necesario instalar las dependencias tanto de la aplicación principal como del *login* externo:

### 🌐 Aplicación principal

#### ⚙️ Back-end:
1. Navega a la carpeta `back`: 
```bash
	cd back
```
2. Instala las dependencias de NodeJS:
```bash
	npm install
```
#### 🎨 Front-end:
1. Navega a la carpeta `front`: 
```bash
	cd front
```
2. Instala las dependencias de Angular:
```bash
	npm install
```

### ↘️ Aplicación ~ Login

1. Navega a la carpeta `login`:
```bash
	cd login
```
#### ⚙️ Back-end:
1. Navega a la carpeta `back`: 
```bash
	cd back
```
2. Instala las dependencias de NodeJS:
```bash
	npm install
```
#### 🎨 Front-end:
1. Navega a la carpeta `front`: 
```bash
	cd front
```
2. Instala las dependencias de Angular:
```bash
	npm install
```

### 3️⃣ Configuración del entorno

#### ⚙️ Back-end:
1. Crea un archivo `.env` en la carpeta `back` basado en `.env.example`:
```bash
	cp .env.example .env
```
2. Configura la conexión a la base de datos en el archivo `.env`.

#### 🗄️ Base de datos:
En este punto puedes recurrir a dos opciones según tu preferencia:

1. Genera una base de datos vacía desde `phpMyAdmin` con el nombre que pongas en el archivo  `.env` en el parámetro `DB_DEV`, por ejemplo `calidad`. Ahora ejecuta los comandos para lanzar las migraciones y poblar la base de datos mediante los seeders con:
```bash
	cd back
	npx sequelize-cli db:migrate
	npx sequelize-cli db:seed:all
```
2. Importa la base de datos en tu `phpMyAdmin` con el archivo `.sql` que encontrarás en la carpeta del proyecto `/docs`.

### 4️⃣ Levanta el proyecto
Es necesario levantar el back y el front tanto de la aplicación principal como del *login* externo:

### 🌐 Aplicación principal

#### ⚙️ Back-end:
1. Inicia el servidor de desarrollo con NodeJS. Asegúrate de abrir una terminal en `./calidad-virgen-de-gracia/back`.
```bash
	nodemon
```
El servidor utiliza la dirección: http://localhost:9090.

#### 🎨 Front-end:
1. Inicia el servidor de desarrollo con Angular. Asegúrate de abrir una terminal en `./calidad-virgen-de-gracia/front`.
```bash
	ng serve
```
El servidor utiliza la dirección: http://localhost:4200.

### ↘️ Aplicación ~ Login

#### ⚙️ Back-end:
1. Inicia el servidor de desarrollo con NodeJS. Asegúrate de abrir una terminal en `./calidad-virgen-de-gracia/login/back`.

```bash
	nodemon
```
El servidor utiliza la dirección: http://localhost:9091.

#### 🎨 Front-end:
1. Inicia el servidor de desarrollo con Angular. Asegúrate de abrir una terminal en `./calidad-virgen-de-gracia/login/front`.
```bash
	ng serve -o
```
Con el parámetro `-o`, la aplicación está preparada para abrirse sola en el propio navegador tras ejecutar este comando, pero si no, puedes acceder desde la dirección: http://localhost:4300.

---

### 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes consultar más detalles en el archivo `LICENSE`.

## 🔑 Credenciales de acceso
Para que puedas explorar la aplicación y probar sus funcionalidades, te proporcionamos esta cuenta: 

### 👑 Administrador
- **Correo:** `calidad.nodemailer@gmail.com` 
- **Contraseña:** `12345` 