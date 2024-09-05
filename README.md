<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el proyecto
2. Ejecutar el

```bash
yarn install
```

3. Levantar la base de datos

```bash
docker-compose up -d
```

4. Cambiar el .env.example por el .env con las respectivas variables de entorno

### ejemplo

```
NODE_ENV=dev
MONGO_DB_URI=url
PORT=3000
DEFAULT_LIMIT=1
```

5. Levantar la app

```
yarn run start:dev
```

6. Contruir la data

```bash
http://localhost:3000/api/seed
```

# Dockerizar la APP

## Build

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Run

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```

## Nota

Por defecto, **docker-compose** usa el archivo `.env`, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con

```
docker-compose -f docker-compose.prod.yaml up --build

## Stack usado

- Nest
- MongoDB
```
