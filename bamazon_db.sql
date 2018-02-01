CREATE DATABASE amazon_db;

USE amazon_db;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL(10, 4) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Dry Shampoo", "Beauty & Health", 7.50, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Wifi Outlet Plug", "Electronics", 26.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Black Coffee K-Cups", "Food & Grocery", 33.81, 250);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Chocolate Chip Granola Bars", "Food & Grocery", 4.98, 500);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Vintage Dress", "Clothing", 18.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Eye Gel", "Beauty & Health", 16.76, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Men's Watch", "Clothing", 43.79, 75);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Dual USB Wall Charger", "Electronics", 17.51, 250);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Instant Pot", "Home & Kitchen", 129.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE ("Knife Block Set", "Home & Kitchen", 219.97, 10);