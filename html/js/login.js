const mysql = require('mysql2'); //needs to be run via a server
const connection_pool = mysql.createPool({
	host: '34.148.250.171',
	user: 'csc330',
	password: 'ProjectMySQL2025!',
	database: 'userList',
	connectionLimit: 10
}) // get connected to user database
let user = document.getElementById('user');
let password = document.getElementById('pass');
connection_pool.query('SELECT' + user,password + 'FROM userList', function (error, select_results, fields) {
	if (error) { //returns if user and password do not match
		console.log('Username or Password incorrect');
		connection_pool.end();
	} else { //returns if user and password do match
		//log in
		console.log('Successfully logged in');
		conection_pool.end();
	}
});
