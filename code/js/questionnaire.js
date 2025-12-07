document.addEventListener("DOMContentLoaded", async function () {
  let currentUser = null;

  try {
      const response = await fetch ('/currentUser');
      const responseJSON = await response.json();
      console.log("/currentUser response:", responseJSON);
      currentUser = responseJSON.user || null;
      sessionStorage.setItem("currentUser", currentUser);
      console.log ("questionnaire currentUser:", currentUser);
  } catch (error) {
      console.error ("Failed to grab currentUser", error);
  }

  window.currentUser = currentUser;

  console.log(window.currentUser);

});

document.getElementById("Sub").addEventListener("click", async () => {

  const data = {
    name: document.getElementById("NameInput").value,
    gender: document.getElementById("GenderInput").value,
    age: document.getElementById("AgeInput").value,
    weight: document.getElementById("WeightInput").value,
    height: document.getElementById("HeightInput").value,
    calorieGoal: document.getElementById("CalGoalInput").value,
    fatGoal: document.getElementById("FatGoalInput").value,
    sodiumGoal: document.getElementById("SodGoalInput").value,
    healthGoal: document.getElementById("HealthGoal").value
  };

  try {
    const res = await fetch("/questionnaire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Your information has been saved!");
      sessionStorage.setItem("calGoal", data.goalCal);
      sessionStorage.setItem("fatGoal", data.goalFat);
      sessionStorage.setItem("sodiumGoal", data.goalSodium);
      
    } else {
      alert("There was an error saving your information.");
    }
  } catch (err) {
    alert("Network error: could not send data.");
  }
});


// ---- GO TO HOME BUTTON (redirect only) ----
document.getElementById("toHomeBtn").addEventListener("click", () => {
  location.href = "/home.html";  // Only this button redirects
});
