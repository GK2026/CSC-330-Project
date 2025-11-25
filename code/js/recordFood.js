document.addEventListener("DOMContentLoaded", () => {
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

  // Redirect Home button to home.html
  const homeBtn = document.getElementById("backHome1");
  homeBtn.addEventListener("click", () => {
    window.location.href = "home.html"; // adjust path if needed
  });
});
