let xmlhttp = new XMLHttpRequest();
document.getElementById('questDirect').addEventListener('click', function() {
	xmlhttp.open("POST", "/code/signup.html", true);
	xmlhttp.setRequestHeader("Content-Type", "text/plain");
	xmlhttp.send();
	window.location.pathname ='../questionnaire.html';
 }); //sends user to questionaire upon signup
// ALL SQL CODE MOVED TO server.js, they should be backend, not here