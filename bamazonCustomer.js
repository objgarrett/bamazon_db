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
		connection.end();
	})
	inquirer
		.prompt(
		{
			name: "productID",
			type: "input",
			message: "Please enter the Item ID of the product you would like to purchase:"
		},
		{
			name: "units",
			type: "input",
			message: "How many units of the product would you like to purchase?"
		})
		.then(function(answer) {
			if 
		})
}