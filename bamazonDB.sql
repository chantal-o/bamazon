DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;


CREATE TABLE Products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(25) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10),
  primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Makeup Brush Set", "Beauty", 9.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blow Dryer", "Beauty", 24.99, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hot Comb", "Beauty", 12.99, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eye Lash Curler", "Beauty", 6.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lip Balm", "Beauty", 4.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair Elastics", "Beauty", 4.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lipstick", "Beauty", 6.99, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Face Mask", "Beauty", 8.99, 2000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Facial Scrub", "Beauty", 14.99, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Body Glitter", "Beauty", 18.50, 500);


SELECT*FROM products;
