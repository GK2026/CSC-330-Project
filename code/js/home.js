document.addEventListener("DOMContentLoaded", function () {

    // Get the span where total calories are displayed
    const totalCalDisplay = document.getElementById("totalCal");

    // Load total calories from sessionStorage (starts at 0 if nothing is stored)
    const savedTotal = Number(sessionStorage.getItem("totalCalories")) || 0;

    // Display the total
    if (totalCalDisplay) {
        totalCalDisplay.textContent = savedTotal;
    }

    // Header
    const header = document.querySelector("#header");
    if (header) {
        header.innerHTML = "This is Daily Diet";
    }

    // NAVIGATION BUTTONS
    const recordFoodBtn = document.getElementById("recordFoodBtn");
    if (recordFoodBtn) recordFoodBtn.onclick = () => location.href = "recordFood.html";

    const goalBtn = document.getElementById("goalBtn");
    if (goalBtn) goalBtn.onclick = () => location.href = "updateGoals.html";

    const editNutritionBtn = document.getElementById("editNutritionBtn");
    if (editNutritionBtn) editNutritionBtn.onclick = () => location.href = "editList.html";

    const editProfileBtn = document.getElementById("editProfileBtn");
    if (editProfileBtn) editProfileBtn.onclick = () => location.href = "editProfile.html";

    const chatBtn = document.getElementById("chatBtn");
    if (chatBtn) chatBtn.onclick = () => location.href = "coach.html";

    const backToQuestionBtn = document.getElementById("backToQuestionBtn");
    if (backToQuestionBtn) backToQuestionBtn.onclick = () => location.href = "questionnaire.html";

});
