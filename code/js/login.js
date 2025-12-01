//function moved from server.js
document.getElementById('signUp').addEventListener('click', function() {
	window.location.pathname = '../signup.html'; //redirects to signup page
});
function login() {
	let user = document.getElementById('user');
	let password = document.getElementById('pass');
	connection_pool.query('SELECT' + username,password + 'FROM userList', function (error, select_results, fields) {
		if (error) { //returns if user and password do not match
			console.log('Username or Password incorrect');
			connection_pool.end();
		} else { //returns if user and password do match
			//log in
			window.location.pathname = '../home.html'; //redirects to homepage
			conection_pool.end();
	}
})
};

// ALL SQL CODE MOVED TO server.js, they should be backend, not here