var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "amazon_db"
});

connection.connect(function(err){
	if (err) throw err;
	runStore();
});

function runStore() {
	connection.query("SELECT item_id, product_name, department_name, price FROM products", function (err, res){
		if (err) throw err;
		console.log("Current Inventory");
		console.log(res);
		console.log("------------------");
		customerInterface();
	});
}	

function customerInterface(){
	inquirer
		.prompt(
		{
			name: "item_id",
			type: "input",
			message: "Please enter the Item ID of the product you would like to purchase:"
		},
		{
			name: "units",
			type: "input",
			message: "How many units of the product would you like to purchase?"
		})
		.then(function(answer) {
			var query = connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id = ?', [inquirer.item_id], function(err, res){
				for (var i = 0; i < res.length; i++){
					if(answer.units >= res[i].stock_quantity){
						console.log("Thank you for purchasing " + res[i].product_name + "." + " Your total is " + res[i].price * answer.units + ". Please shop with us again.");
						var units = parseInt(answer.units);
						var newUnits = res[i].stock_quantity - units;
						console.log("Updating units for " + res[i].product_name);
						var query = connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?",
							[
								newUnits, answer.item_id
							],
							function(err, res) {
								console.log(product_name + "has been updated!");
							}
							);
							customerInterface();
					} 
					else {
						console.log("Sorry there is an insufficient quantity. Please select another item.");
						customerInterface();
					}
				}
			});
		});
};	