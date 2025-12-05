// RECORDFOOD.JS
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addCal");
  const calorieInput = document.getElementById("Calorie");
  const quantityInput = document.getElementById("quantity");
  const homeBtn = document.getElementById("backHome1");

  // Use sessionStorage so it resets every refresh
  let totalCalories = Number(sessionStorage.getItem("totalCalories")) || 0;

  addBtn.addEventListener("click", () => {
    const calories = Number(calorieInput.value);
    const quantity = Number(quantityInput.value);

    if (!isNaN(calories) && calories > 0) {
      const caloriesToAdd = calories * quantity;
      totalCalories += caloriesToAdd;

      // Save updated running total
      sessionStorage.setItem("totalCalories", totalCalories);

      alert(`Added ${caloriesToAdd} calories!`);

      // Clear input fields
      calorieInput.value = "";
      quantityInput.value = 1;
    } else {
      alert("Please enter a valid calorie number.");
    }
  });

  homeBtn.addEventListener("click", () => {
    location.href = "home.html";
  });
});
