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

Add you databases password

<img src="images/customer_db_password.png" >

Run bamazonCustomer.js from the root folder. You are presented with a list of products with their associated id and price. You are prompted to enter the id of the item you would like to purchase.

<img src="images/run_customer.png" >

<img src="images/purchase.png" >

You are then told the amount of items that were purchased and the total cost of the exchange.

<img src="images/total.png" >



