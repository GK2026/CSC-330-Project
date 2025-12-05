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
    } else {
      alert("There was an error saving your information.");
    }
  } catch (err) {
    alert("Network error: could not send data.");
  }
});