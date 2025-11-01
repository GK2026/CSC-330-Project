document.addEventListener("DOMContentLoaded", () => {
  const message = "This is our prototype";
  document.querySelector("#header").innerHTML = message;
  console.log(message);

  // PAGE SECTIONS
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

  // CALORIE TRACKER LOGIC
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
});
