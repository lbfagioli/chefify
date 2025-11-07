# Software Architecture project 3

Gianfranco Bobadilla

Luciano Faglioli

Vicente Cuevas

# Para ejecutar:

1. `sudo docker compose up --build`
2. `sudo docker exec -i $(sudo docker ps -qf "name=db") psql -U postgres -d chefify < backend/seed.sql`
3. `curl http://localhost:3000/products`
4. 
    ```bash
    curl -X POST http://localhost:3000/orders \
    -H "Content-Type: application/json" \
    -d '{"items":[{"product_id":1,"quantity":1}]}'
    ```



# Estrctura y archivos
* [Backend](/backend) , con las funciones y endpoints para acceder a productos y orders.
    - [repositories](/backend/repositories) , con las funciones principales para la interacción entre backend y database.
    - [src](/backend/src) , con las funciones y configuración para cada la db y el backend.
    - [seed.sql](/backend/seed.sql) , con las tablas y datos de ejemplo para la database.

* [Database](docker-compose.yml) , contenedor en docker que representa la base de datos que almacena productos y ordenes.