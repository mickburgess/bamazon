/* Creates a MySQL Database called `bamazon`.
*/
CREATE DATABASE bamazon;
/* Instruct to use the `bamazon` database */
USE bamazon;
/* Creates a Table inside of that database 
called `products`. */
CREATE TABLE products (
/* Creates columns within the `products` table */
  /* item_id (unique id for each product) this number will increase by one each time an item is added */
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  /* product_name (Name of product) */
  product_name VARCHAR(100) NOT NULL,
  /* department_name */
  department_name VARCHAR(50) NOT NULL,
  /* price (cost to customer) */
  price DECIMAL(10, 2) NULL,
  /* stock_quantity (how much of the product is available in stores) */
  stock_quantity INTEGER default 0,
  /* Sets the item_id column as a primary key */
  PRIMARY KEY(item_id)
);