# Relleno de tablas

## Inserción de datos en la tabla de `clientes`

```sql
INSERT INTO clientes (nombre, direccion) VALUES
    ('Juan Pérez', 'Calle 123, Barranquilla'),
    ('María Rodríguez', 'Avenida XYZ, Barranquilla'),
    ('Luis Gómez', 'Carrera ABC, Barranquilla');
```

## Inserción de datos en la tabla de `libreros`

```sql
INSERT INTO libreros (nombre, email) VALUES
    ('Ana Martínez', 'ana@example.com'),
    ('Carlos Sánchez', 'carlos@example.com'),
    ('Sofía Ramírez', 'sofia@example.com');
```

## Inserción de datos en la tabla de `libros`

```sql
INSERT INTO libros (titulo, autor, ISBN, precio,img) VALUES
    ('La Sombra del Viento', 'Carlos Ruiz Zafón', '9788408079545', 15.99,'https://th.bing.com/th/id/OIP.OPCCWkLt_fmK5JkeqXDYyAHaLe?pid=ImgDet&rs=1'),
    ('Cien Años de Soledad', 'Gabriel García Márquez', '9786071416560', 12.50,'https://www.mejoreslibros.top/wp-content/uploads/2020/09/Cien-anos-de-Soledad-50-Aniversario-1141x1536.jpg'),
    ('Harry Potter y la Piedra Filosofal', 'J.K. Rowling', '9788478884450', 19.95,'https://imagessl2.casadellibro.com/a/l/t0/52/9788478884452.jpg');
```

## Inserción de datos en la tabla de `pedidos`

```sql
INSERT INTO pedidos (cliente_id, libro_id, librero_id, fecha_pedido) VALUES
    (1, 1, 2, '2023-08-15'),
    (2, 3, 1, '2023-08-16'),
    (3, 2, 3, '2023-08-17');
```

Estas consultas agregan datos de ejemplo a las respectivas tablas de tu base de datos de librería. Puedes utilizar estas consultas como referencia y personalizar los datos según tus necesidades.
