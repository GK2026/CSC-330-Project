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
    const calories = Number(calorieInput.value);
    const fat = Number(fatInput.value);
    const sodium = Number(sodiumInput.value);
    const quantity = Number(quantityInput.value);

    if (!isNaN(calories) && calories > 0) {
      const caloriesToAdd = calories * quantity;
      totalCalories += caloriesToAdd;

      // Save updated running total
      sessionStorage.setItem("totalCalories", totalCalories);


      // Clear input fields
      calorieInput.value = "";
      quantityInput.value = 1;
    } else {
      alert("Please enter a valid calorie number.");
    }

      if (!isNaN(fat) && fat > 0) {
      const fatToAdd = fat * quantity;
      totalFat += fatToAdd;

      // Save updated running total
      sessionStorage.setItem("totalFat", totalFat);


      // Clear input fields
      fatInput.value = "";
      quantityInput.value = 1;
    } else {
      alert("Please enter a valid fat number.");
    }

      if (!isNaN(sodium) && sodium > 0) {
      const sodiumToAdd = sodium * quantity;
      totalSodium += sodiumToAdd;

      // Save updated running total
      sessionStorage.setItem("totalSodium", totalSodium);


      // Clear input fields
      sodiumInput.value = "";
      quantityInput.value = 1;
    } else {
      alert("Please enter a valid sodium number.");
    }
    alert(`Added ${caloriesToAdd} calories, ${fatToAdd} fat, ${sodiumToAdd} sodium!`);
  });

  

  homeBtn.addEventListener("click", () => {
    location.href = "home.html";
  });
});
