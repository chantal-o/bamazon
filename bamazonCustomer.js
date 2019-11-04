//Connecting mysql/inquirer

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


  var createTable = function () {
    //display data for user 
    connection.query("SELECT * FROM products", function (err, res) {

        for (var i = 0; i < res.length; i++) {

            var Results = [
                
                "Product ID: " + res[i].item_id,
                "Name of Product: " + res[i].product_name,
                "Price: " + res[i].price,
                "Stock Quantity: " + res[i].stock_quantity,
                
            ]
            console.log(Results); 
            
        }
        //ask user if they want to buy a product listed
        prompt(res);
    })
}