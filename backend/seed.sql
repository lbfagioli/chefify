DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL
);

INSERT INTO products (name, price, stock) VALUES
('Manzana', 1.50, 50),
('Pan', 0.80, 30),
('Leche', 2.20, 20);
