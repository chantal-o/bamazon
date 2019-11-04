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

    .then(function (answer) {
        if ((res[id].stock_quantity - answer.quant) > 0) {
            connection.query("UPDATE products SET stock_quantity='" + 
            (res[id].stock_quantity - answer.quant) + 
            "'WHERE product_name='" + product + "'", function () {

                create();
                var totalCost = answer.quant * res[id].price;

                var cResults = [
                    
                    "You Bought a Product",
                    "TOTAL COST: $ " + totalCost,
                

                ].join("\n\n");

                
                console.log(cResults); 

                
            })
            //if zero quanitity
        } else {
            console.log("Insufficient quantity!" + "\n");
            prompt(res);
        }

    })
}

//If input does not match
if (i == res.length && correct == false) {
console.log("Wrong Choice!" + "\n");
prompt(res);
}


