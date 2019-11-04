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