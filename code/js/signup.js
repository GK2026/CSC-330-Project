<<<<<<< HEAD
document.getElementById("questDirect").addEventListener("click", async () => {
  const data = {
    username: document.getElementById("usernameEntry").value,
    password: document.getElementById("passwordEntry").value,
  };

  try {
    const res = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Your information has been saved!");
      window.location.pathname="../questionnaire.html";
    } else {
      alert("There was an error saving your information.");
    }
  } catch (err) {
    alert("Network error: could not send data.");
  }

});
=======
let xmlhttp = new XMLHttpRequest();
document.getElementById('questDirect').addEventListener('click', function() {
	xmlhttp.open("POST", "/signup", true);
	xmlhttp.setRequestHeader("Content-Type", "text/plain");
	xmlhttp.send();
	window.location.pathname ='../questionnaire.html';
 }); //sends user to questionaire upon signup
// ALL SQL CODE MOVED TO server.js, they should be backend, not here
>>>>>>> 8b09f76 (test)
