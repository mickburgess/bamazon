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
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and bamazon database
connection.connect(function (err) {
  if (err) throw err;
  // run the productList function after the connection is made
  manager();
});

function manager() {
  inquirer
    .prompt([
      {
        name: "menuOptions",
        type: "rawlist",
        message: "What would you like to do?",
        // * List a set of menu options:
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product"
        ]
      }
    ])
    .then(function (answer) {
      switch (answer.menuOptions) {
        case "View Products for Sale":
          prodSale();
          break;

        case "View Low Inventory":
          lowInventory();
          break;

        case "Add to Inventory":
          addInventory();
          break;

        case "Add New Product":
          addProd();
          break;
      }
    });
}

// * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
function prodSale() {
  console.log("\n************************************************************\n");
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
      console.log("ID: " + results[i].item_id + " | " + "Product: " + results[i].product_name + " | " + "Price: $" + (results[i].price).toFixed(2) + " | " + "Quantity " + results[i].stock_quantity);
    }
    console.log("\n************************************************************\n");
    manager();
  })
}

// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
function lowInventory() {
  console.log("\n************************************************************\n");
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 5", function (err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
      console.log("ID: " + results[i].item_id + " | " + "Product: " + results[i].product_name + " | " + "Price: $" + (results[i].price).toFixed(2) + " | " + "Quantity " + results[i].stock_quantity);
    }
    console.log("\n************************************************************\n");
    manager();
  })
}
// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
