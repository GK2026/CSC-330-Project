const mysql = require('mysql2'); //needs to be run via a server
const connection_pool = mysql.createPool({
	host: '34.148.250.171',
	user: 'csc330',
	password: 'ProjectMySQL2025!',
	database: 'userList',
	connectionLimit: 10
}) // get connected to user database
let user = document.getElementById('userSignUp');
let password = document.getElementById('passSignUp');
connection_pool.query("INSERT INTO userList (username, password) VALUES ('"+ user +"','" +password+"');", function (error, insert_results, fields) {
	if (error) {
		console.log(error);
		connection_pool.end();
	} else {
		console.log("Sign in successful")
		connection_pool.end();
	}
});
