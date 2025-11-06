document.addEventListener("DOMContentLoaded", () => {
  const message = "This is our prototype";
  document.querySelector("#header").innerHTML = message;
  console.log(message);

  // PAGES
  const questionPage = document.getElementById("question");
  const homePage = document.getElementById("homePage");
  const recordFood = document.getElementById("recordFood");
  const goalPage = document.getElementById("goalPage");
  const profilePopup = document.getElementById("editProfilePopup");

  // BUTTONS
  const recordFoodBtn = document.getElementById("recordFoodBtn");
  const goalBtn = document.getElementById("goalBtn");
  const editProfileBtn = document.getElementById("editProfileBtn");
  const backHome1 = document.getElementById("backHome1");
  const backHome2 = document.getElementById("backHome2");
  const closeProfile = document.getElementById("closeProfile");
  const toHomeBtn = document.getElementById("toHomeBtn");
  const backToQuestionBtn = document.getElementById("backToQuestionBtn");

  // NAVIGATION
  recordFoodBtn.addEventListener("click", () => {
    homePage.classList.add("hidden");
    recordFood.classList.remove("hidden");
  });

  goalBtn.addEventListener("click", () => {
    homePage.classList.add("hidden");
    goalPage.classList.remove("hidden");
  });

  backHome1.addEventListener("click", () => {
    recordFood.classList.add("hidden");
    homePage.classList.remove("hidden");
  });

  backHome2.addEventListener("click", () => {
    goalPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  });

  editProfileBtn.addEventListener("click", () => {
    profilePopup.classList.remove("hidden");
  });

  closeProfile.addEventListener("click", () => {
    profilePopup.classList.add("hidden");
  });

  // QUESTIONNAIRE PAGE → HOME PAGE
  toHomeBtn.addEventListener("click", () => {
    questionPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  });

  // HOME PAGE → QUESTIONNAIRE PAGE
  backToQuestionBtn.addEventListener("click", () => {
    homePage.classList.add("hidden");
    questionPage.classList.remove("hidden");
  });

  // CALORIE TRACKER
  const addBtn = document.getElementById("addCal");
  const calInput = document.getElementById("Calorie");
  const totalDisplay = document.getElementById("totalCal");
  let totalCalories = 0;

  addBtn.addEventListener("click", () => {
    const calories = Number(calInput.value);
    if (!isNaN(calories) && calories > 0) {
      totalCalories += calories;
      totalDisplay.textContent = totalCalories;
      calInput.value = "";
    } else {
      alert("Please enter a valid calorie number.");
    }
  });

  // HELPER FUNCTION FOR INPUT BUTTONS
  function handleInput(buttonId, inputId, label) {
    document.getElementById(buttonId).addEventListener("click", function () {
      const value = document.getElementById(inputId).value;
    });
  }

  // Attach handlers to questionnaire buttons
  handleInput("NameBtn", "NameInput", "Name");
  handleInput("GenderBtn", "GenderInput", "Gender");
  handleInput("AgeBtn", "AgeInput", "Age");
  handleInput("WeightBtn", "WeightInput", "Weight");
  handleInput("HeightBtn", "HeightInput", "Height");
  handleInput("CalGoalBtn", "CalGoalInput", "Calorie Goal");
  handleInput("FatGoalBtn", "FatGoalInput", "Fat Goal");
  handleInput("SodGoalBtn", "SodGoalInput", "Sodium Goal");

  // Dropdown change
  document.getElementById("HealthGoal").addEventListener("change", function () {
    const selected = this.options[this.selectedIndex].text;
    alert(`Selected Health Goal: ${selected}`);
    console.log(`Health Goal: ${selected}`);
  });
});
