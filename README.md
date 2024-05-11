# Instructions

1. clone repository "p3-data-model-2024" branch "p3-sqlite-7":

```bash
git clone -b p3-sqlite-7 git@github.com:eduardogenari/p3-data-model-2024.git
```

2. after cloning, navigate into the p3-data-model-2024 directory, which contains the cloned repository:

```bash
cd p3-data-model-2024
```

3. create a .env file in the root directory of the project and set environment variables PORT and DATABASE_URL within the .env file:

```bash
PORT=8888
DATABASE_URL="file:../db/ecommerce.db"
```

4. build docker container according to the configurations specified in the compose.yml file:

```bash
sudo docker compose build 
```

5. starts docker containers in detached mode:

```bash
sudo docker compose up -d
```

6. after starting the docker containers, access the following URLs in a web browser to check if the application is running and data is being served correctly:

[link](http://localhost:8888/products) http://localhost:8888/products  
[link](http://localhost:8888/users) http://localhost:8888/users  
[link](http://localhost:8888/orders) http://localhost:8888/orders  

7. optional, check active docker image "p3-data-model-2024-api":

```bash
sudo docker image list
```

8. optional, check active docker container "p3-data-model-2024-api":

```bash
sudo docker ps
```

9. stop docker containers:

```bash
sudo docker compose down
```

10. alternatively, run prisma studio, a GUI tool for database management:

```bash
bunx prisma studio
```

# Modelo de Datos

En esta práctica hay que desarrollar el modelo de datos para una aplicación que resulte de tu interés. (No es necesario pensar en la autenticación aún, estudiaremos eso por separado.)

Se trata, como otras veces, de hacer un _fork_ de este repositorio y trabajar en él.

La solución del ejercicio debe ser un proyecto Javascript con:
- El esquema de Prisma (`schema.prisma`).
- La configuración para una base de datos (con `docker-compose.yml`).
- Rellenado con unos pocos datos de prueba.
- Scripts en Typescript de demostración que hacen algunas cosas con los datos.
- Documentación sobre cómo lanzar la base de datos y usar los scripts de demostración (sustituyendo este mismo README).

## Esquema

El esquema debe tener almenos 3 entidades, pero no hay límite superior. Empieza siempre por definir las entidades más importantes, y asegúrate de que las relaciones cumplen con las necesidades que has planteado (nunca hay una única solución, cada solución tienes sus ventajas e inconvenientes, simplemente hay que ser conscientes de ellos). Luego añade entidades para hacer crecer el modelo. No intentes hacerlo todo de golpe (a no ser que ya tengas experiencia).

## Rellenado de datos de prueba

Para crear los datos iniciales con los que poder hacer algo al principio se puede usar cualquier mecanismo que automatice la inserción. Se recomienda mirar la documentación sobre como usar `seed.ts` en Prisma, que es una manera semi-estandarizada.
