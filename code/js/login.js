let xmlhttp = new XMLHttpRequest();
document.getElementById('signUp').addEventListener('click', function() {
	window.location.pathname = '../signup.html'; //redirects to signup page
});
let user = document.getElementsByName('user');
let pass = document.getElementsByName('pass');
document.getElementById('loginBtn').addEventListener('click', function() {
	xmlhttp.open("POST", "/login", true);
	xmlhttp.send(user, pass);
});
// ALL SQL CODE MOVED TO server.js, they should be backend, not here