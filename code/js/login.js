let xmlhttp = new XMLHttpRequest();
document.getElementById('signUp').addEventListener('click', function() {
	window.location.pathname = '../signup.html'; //redirects to signup page
});
document.getElementById('loginBtn').addEventListener('click', function() {
	xmlhttp.open("POST", "/login", true);
	xmlhttp.setRequestHeader("Content-Type", "text/plain");
	xmlhttp.send();
});
// ALL SQL CODE MOVED TO server.js, they should be backend, not here