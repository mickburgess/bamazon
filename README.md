# bamazon
An Amazon-like storefront using Node.js &amp; MySQ

## Setup

First, clone the repository:

<div class="highlight highlight-source-shell">
  <pre>git clone git@github.com:mickburgess/bamazon.git</pre>
</div>

Next install the dependencies

<img src="images/install_dependencies.png" >

Create your database using the script in bamazonSchema.sql, and seed the created products table with data using the script in bamazonSeed.sql

## Customer Workflow

Add your database password

<img src="images/customer_db_password.png" >

Run bamazonCustomer.js from the root folder. You are presented with a list of products with their associated id and price. You are prompted to enter the id of the item you would like to purchase.

<img src="images/run_customer.png" >

<img src="images/purchase.png" >

You are then told the amount of items that were purchased and the total cost of the exchange.

<img src="images/total.png" >

## Manager Workflow

Add your database password

<img src="images/manager_db_password.png" >

Run bamazonManager.js from the root folder. You are presented with a list of commands from which to choose.

<img src="images/run_manager.png" >

Selecting 1 will give you a list of all the items that are for sale.

<img src="images/Sale.png" >

Selecting 2 will give you a list of all items that have a quantity less than 5

<img src="images/low_inventory.png" >

Selecting 3 will allow you to add quantity to a chosen item. The full list of items will be displayed and you will be prompted to insert the id of the one you want to add to, and then you will be prompted to enter the number you wish to add.

<img src="images/low_inventory.png" >

Selecting 4 will allow you to add a new product. First you will need to enter the name of the product, then you will be asked to enter the department for the product, followed by the price, and finally how many you want to restock.

<img src="images/add_product.png" >