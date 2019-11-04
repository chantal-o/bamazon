// Establish connections
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
 });
 
 connection.connect(function(err) {
    if (err) throw err;
    createTable();
  });

  //reference activity-topSongsAndAlbumsCode.js
  // Display all of the items available for sale
  var createTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {

        for (var i = 0; i < res.length; i++) {

            var Results = [
                
                "Product ID: " + res[i].item_id,
                "Name of Product: " + res[i].product_name,
                "Name of Department: " + res[i].department_name,
                "Price: " + res[i].price,
                "Stock Quantity: " + res[i].stock_quantity,
            ]
            console.log(Results); 
        }
        prompt(res);
    })
}
//inquirer prompts for passing in questions
function prompt() {
    inquirer
    .prompt({
        name: "product",
        type: "input",
        message: "What product would you like to buy?"
      }),

      inquirer
      .prompt([{
        type: 'input',
        name: 'quantity',
        message: "How many units would you like to buy?"
    }])

}