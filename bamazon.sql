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
/* Populates the `products` table with 10 different products. */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mushroom Stomper", "Software", "10.99", 10000), ("Sponges", "Kitchen", ".99", 100000), ("Blue Dish Soap", "Kitchen", "5.50", 95000), ("Tamtong 4k TV", "Electronics", "3999.99", 5000), ("Fake Grass Plant", "Household Item", "7.49", 3000), ("Forest Picture", "Household Item", "29.99", 250), ("Square Coffee Table", "Household Item", "99.29", 750), ("Vanilla Coffee Syrup", "Grocery", "7.99", 7000), ("Portable Basketball Goal", "Sporting Goods", "129.99", 4500), ("Basketball", "Sporting Goods", "29.99", 9000);