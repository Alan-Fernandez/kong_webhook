```markdown
# Guía de Configuración del Proyecto

## Requisitos Previos

- **Node.js**
- **Docker**
- **PostgreSQL**

## Pasos

### 1. Clonar el Repositorio del Proyecto

Utiliza el siguiente comando para clonar el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/Alan-Fernandez/kong_webhook.git
```

### 2. Instalar las Dependencias del Proyecto

Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Configurar Docker

#### a. Instalar Docker

Instala Docker en tu máquina local. Puedes seguir las instrucciones en [la página oficial de Docker](https://docs.docker.com/get-docker/).

#### b. Descargar la Imagen de PostgreSQL

Ejecuta el siguiente comando para descargar la imagen de Docker de PostgreSQL:

```bash
docker pull postgres
```

#### c. Iniciar un Contenedor de Docker con PostgreSQL

Ejecuta el siguiente comando para iniciar un contenedor de Docker con PostgreSQL:

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Este comando iniciará un contenedor de Docker con PostgreSQL, donde `some-postgres` es el nombre del contenedor y `mysecretpassword` es la contraseña del usuario `postgres`.

### 4. Configurar PostgreSQL

#### a. Instalar PostgreSQL

Instala PostgreSQL en tu máquina local. Puedes seguir las instrucciones en [la página oficial de PostgreSQL](https://www.postgresql.org/download/).

#### b. Iniciar el Servicio de PostgreSQL

Inicia el servicio de PostgreSQL. El comando específico puede variar según tu sistema operativo.

#### c. Conectarse a PostgreSQL

Conéctate a PostgreSQL utilizando el siguiente comando:

```bash
psql -U postgres
```

#### d. Crear un Nuevo Usuario y una Nueva Base de Datos

Ejecuta los siguientes comandos dentro de `psql` para crear un nuevo usuario y una nueva base de datos:

```sql
CREATE USER admin WITH PASSWORD 'admin123';
CREATE DATABASE kong_webhook;
GRANT ALL PRIVILEGES ON DATABASE kong_webhook TO admin;
```

### 5. Configurar Sequelize

Asegúrate de que el archivo `config/config.js` contenga la URL correcta de la base de datos:

```javascript
module.exports = {
  development: {
    username: "admin",
    password: "admin123",
    database: "kong_webhook",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  // ...otras configuraciones
};
```

Ejecuta el siguiente comando para ejecutar las migraciones de Sequelize:

```bash
npm run migrations:run
```

### 6. Iniciar el Proyecto

Ejecuta el siguiente comando para iniciar el proyecto:

```bash
npm start
```

Con estos pasos, deberías poder configurar y conectar tu proyecto con Docker y PostgreSQL en local.
```
