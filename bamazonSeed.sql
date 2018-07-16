/* Instruct to use the `bamazon` database for the following script */
USE bamazon;
/* Populates the `products` table with 10 different products. */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mushroom Stomper", "Software", 10.99, 10000), ("Sponges", "Kitchen", .99, 100000), ("Blue Dish Soap", "Kitchen", 5.50, 95000), ("Tamtong 4k TV", "Electronics", 3999.99, 5000), ("Fake Grass Plant", "Household Item", 7.49, 3000), ("Forest Picture", "Household Item", 29.99, 250), ("Square Coffee Table", "Household Item", 99.29, 750), ("Vanilla Coffee Syrup", "Grocery", 7.99, 7000), ("Portable Basketball Goal", "Sporting Goods", 129.99, 4500), ("Basketball", "Sporting Goods", 29.99, 9000);