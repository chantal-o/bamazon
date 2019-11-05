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
    // Call function to display all products 
    displayTable();
  });

  //reference activity-topSongsAndAlbumsCode.js
  // Display all of the items available for sale and prompt to buy
  var displayTable = function () {
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
        buyprompt(res);
    })
}


function buyprompt() {
    inquirer
    .prompt(
        {   name: "choice",
            type: "list",
            message: "Would you like to?",
            choices: ["Make a Purchase", "Exit"],
            
        })
        .then(function(answer) {
           
            var command = answer.choice;
            
            switch(command) {
                //choice will begin database query
                case "Make a Purchase":
                    itemprompt();
                break;
                
                // choice will end the connection
                case "Exit":
                    connection.end();
            }
        })
}


//inquirer prompts for passing in questions
function itemprompt() {
    inquirer
    .prompt([
        {
        name: "itemID",
        type: "input",
        message: "What is the Item ID of the product you would you like to buy?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy?"
    }])
    .then(function(answer) {

        // Use user's answers to prompts to query database for item stock_quantity and price
        connection.query("SELECT stock_quantity, price FROM products WHERE ?",
        {
            item_id: answer.itemID
        },

        function(err, res) {
            if(err) throw err;
            else if (answer.item_id > 10) {
                console.log("Insufficient quantity");
             
            displayTable();
            }

            else {
                // Calculate cost of user's purchase by multiplying item price by desired quantity
                cost = res[0].price * parseInt(answer.quantity);
                
                // Make UPDATE query to database to subtract necessary amount from stock_quantity
                connection.query("UPDATE products SET ? WHERE ?",
                [{
                    stock_quantity: res[0].stock_quantity - parseInt(answer.itemNum)
                },
                {
                    item_id: answer.itemID
                }],
                function(err, res) {
                    if(err) throw err;
                    
                    // Log below message with total cost after successfully updating the database
                   
                    console.log(`${res.affectedRows}  The total cost of your purchase was $${cost.toFixed(2)}.`);
                    

                    // Call function to display all items in database again
                    displayTable();
                })                
            }
            
        })
    })
}
