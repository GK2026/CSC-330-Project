const currentUser = sessionStorage.getItem("currentUser") || null

// RECORDFOOD.JS
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addFood");
  const calorieInput = document.getElementById("Calorie");
  const fatInput = document.getElementById("Fat");
  const sodiumInput = document.getElementById("Sodium");
  const quantityInput = document.getElementById("quantity");
  const homeBtn = document.getElementById("backHome1");

  // Use sessionStorage so it resets every refresh
  let totalCalories = Number(sessionStorage.getItem("totalCalories")) || 0;
  let totalFat = Number(sessionStorage.getItem("totalFat")) || 0;
  let totalSodium = Number(sessionStorage.getItem("totalSodium")) || 0;

  addBtn.addEventListener("click", () => {
    let calories = Number(calorieInput.value);
    let fat = Number(fatInput.value);
    let sodium = Number(sodiumInput.value);
    let quantity = Number(quantityInput.value);

    let calorieToAdd = 0;
    let fatToAdd = 0;
    let sodiumToAdd = 0;

    if (!isNaN(calories) && calories > 0) {
      caloriesToAdd = calories * quantity;
      totalCalories += caloriesToAdd;

      // Save updated running total
      sessionStorage.setItem("totalCalories", totalCalories);

    } else {
      alert("Please enter a valid calorie number.");
    }

      if (!isNaN(fat) && fat > 0) {
      fatToAdd = fat * quantity;
      totalFat += fatToAdd;

      // Save updated running total
      sessionStorage.setItem("totalFat", totalFat);


    } else {
      alert("Please enter a valid fat number.");
    }

      if (!isNaN(sodium) && sodium > 0) {
      sodiumToAdd = sodium * quantity;
      totalSodium += sodiumToAdd;

      // Save updated running total
      sessionStorage.setItem("totalSodium", totalSodium);

    } else {
      alert("Please enter a valid sodium number.");
    }

    alert(`Added ${caloriesToAdd} calories, ${fatToAdd} fat, ${sodiumToAdd} sodium!`);

    // Clear input fields
    calorieInput.value = "";
    fatInput.value = "";
    sodiumInput.value = "";
    quantityInput.value = 1;

  });

  

  homeBtn.addEventListener("click", () => {
    location.href = "home.html";
  });
});
