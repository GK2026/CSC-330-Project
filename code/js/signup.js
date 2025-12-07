document.getElementById('returnLogin').addEventListener('click', async function() {
	window.location.pathname = '../login.html'; //redirects to login page
});

// document.getElementById('questDirect').addEventListener('click', function() {
// 	window.location.pathname ='../questionaire.html'; //sends user to questionaire upon signup



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
      window.location.pathname ='../questionnaire.html';
    } else {
      alert("There was an error saving your information.");
    }
  } catch (err) {
    alert("Network error: could not send data.");
  }
});

