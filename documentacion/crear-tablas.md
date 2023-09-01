# Crear tablas

## Tabla de Clientes

```sql
CREATE TABLE clientes (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL
);
```

## Tabla de Libreros

```sql
CREATE TABLE libreros (
    librero_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
```

## Tabla de Libros

```sql
CREATE TABLE libros (
    libro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ISBN VARCHAR(13) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    img TINYTEXT
);
```

## Tabla de Pedidos

```sql
CREATE TABLE pedidos (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    libro_id INT NOT NULL,
    librero_id INT NOT NULL,
    fecha_pedido DATE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
    FOREIGN KEY (libro_id) REFERENCES libros(libro_id),
    FOREIGN KEY (librero_id) REFERENCES libreros(librero_id)
);
```
