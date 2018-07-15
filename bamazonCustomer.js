// import mysql npm package
var mysql = require("mysql");
// import inquirer npm package
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // add password for your database here
  password: "",
  database: "bamazon"
});

// connect to the mysql server and bamazon database
connection.connect(function(err) {
  if (err) throw err;
  // run the productList function after the connection is made
  purchase();
});


function purchase() {
  // display all the items available for sale
  // include the id's, names, and prices of products for sale
  console.log("\n************************************************************\n");
  connection.query("SELECT item_id, product_name, price FROM products", function(err, results) {
    if (err) throw err;
    var separator = "\n-------------------\n";
    for (var i = 0; i < results.length; i++) {
      console.log("Item ID: " + results[i].item_id + " | " + "Product Name: " + results[i].product_name + " | " + "Price: " + results[i].price);
    }
    console.log("\n************************************************************\n");
  })
}
// ask the user the id of the product they would like to buy

// ask the user the number of units they would like to buy

// check if there is enough product to meet the customers request
  // if not enough console.log "Insufficient quantity!"
    // prevent the order from being placed
  // if there is enough fulfill the customer's order
    // update the db to reflect the remaining quantity
    // after update completes show user total cost of their purchase