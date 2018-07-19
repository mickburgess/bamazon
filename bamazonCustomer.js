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
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
      console.log("Item ID: " + results[i].item_id + " | " + "Product Name: " + results[i].product_name + " | " + "Price: $" + (results[i].price).toFixed(2));
    }
    console.log("\n************************************************************\n");

    inquirer
      .prompt([
        // ask the user the id of the product they would like to buy
        {
          name: "item",
          type: "input",
          message: "What is the id of the item you wish to purchase?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            console.log("\nPlease enter an id");
            return false;
          }
        },
        // ask the user the number of units they would like to buy
        {
          name: "purchaseNumber",
          type: "input",
          message: "How many would you like to purchase?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            console.log("\nPlease enter a number");
            return false;
          }
        }
      ])
      .then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id == answer.item) 
          {
            chosenItem = results[i];
            console.log(chosenItem);
          }
        }
        // check if there is enough product to meet the customers request
        if (chosenItem.stock_quantity > answer.purchaseNumber) {
          var newQuantity = chosenItem.stock_quantity - answer.purchaseNumber
          console.log(newQuantity);
          connection.query(
            // update the db to reflect the remaining quantity
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log(chosenItem.product_name + "(s) purchased!");
              // after update completes show user total cost of their purchase
              var total = chosenItem.price * answer.purchaseNumber;
              console.log("Total: $" + total.toFixed(2));
              purchase();
            }
          );
        }
        else {
          // Purchase attempt quantity greater than stock quantity, so start over without order being logged
          console.log("Sorry your order was larger than amount of stock remaining. Please try again.");
          purchase();
        }
      });
  })
}

    
    