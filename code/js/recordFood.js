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

  let foodHistory = JSON.parse(sessionStorage.getItem("foodHistory")) || [];

  function displayHistory() {
    const list = document.getElementById("foodHistory");
    list.innerHTML = "";
    foodHistory.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    })};

  displayHistory();

  addBtn.addEventListener("click", () => {
    let foodName = document.getElementById("foodName").value;
    let calories = Number(calorieInput.value);
    let fat = Number(fatInput.value);
    let sodium = Number(sodiumInput.value);
    let quantity = Number(quantityInput.value);

    let caloriesToAdd = 0;
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

    const item = `${foodName || "genericItem"}: ${caloriesToAdd} calories, ${fatToAdd} fat, ${sodiumToAdd} sodium, (x${quantity})`;
    foodHistory.push(item);
    sessionStorage.setItem("foodHistory", JSON.stringify(foodHistory));
    displayHistory();
    alert(`Added ${caloriesToAdd} calories, ${fatToAdd} fat, ${sodiumToAdd} sodium!`);

    // Clear input fields
    document.getElementById("foodName").value = '';
    calorieInput.value = "";
    fatInput.value = "";
    sodiumInput.value = "";
    quantityInput.value = 1;

  });

  

  homeBtn.addEventListener("click", () => {
    location.href = "home.html";
  });
});
