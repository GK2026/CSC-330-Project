  /*
  
  // Attach handlers to questionnaire buttons
  handleInput("NameBtn", "NameInput", "Name");
  handleInput("GenderBtn", "GenderInput", "Gender");
  handleInput("AgeBtn", "AgeInput", "Age");
  handleInput("WeightBtn", "WeightInput", "Weight");
  handleInput("HeightBtn", "HeightInput", "Height");
  handleInput("CalGoalBtn", "CalGoalInput", "Calorie Goal");
  handleInput("FatGoalBtn", "FatGoalInput", "Fat Goal");
  handleInput("SodGoalBtn", "SodGoalInput", "Sodium Goal");

   // HELPER FUNCTION FOR INPUT BUTTONS
  function handleInput(buttonId, inputId, label) {
    document.getElementById(buttonId).addEventListener("click", function () {
      const value = document.getElementById(inputId).value;
    });
  }

  // Dropdown change
  document.getElementById("HealthGoal").addEventListener("change", function () {
    const selected = this.options[this.selectedIndex].text;
  });

  const questionPage = document.getElementById("question");
  const recordFood = document.getElementById("recordFood");
  const goalPage = document.getElementById("goalPage");
  */
// ---- SUBMIT BUTTON (save data only) ----
// ---- SUBMIT BUTTON (save data only) ----

const currentUser = sessionStorage.getItem("currentUser") || null
console.log ("questionnaire currentUser:", currentUser);

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
