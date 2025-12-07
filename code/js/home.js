document.addEventListener("DOMContentLoaded", function () {

    // Calories consumed (from sessionStorage)
    const totalCalDisplay = document.getElementById("totalCal");
    const savedTotal = sessionStorage.getItem("totalCalories") || 0;
    if (totalCalDisplay) totalCalDisplay.textContent = savedTotal;

    // Nutrition A and B from localStorage
    const nutritionADisplay = document.getElementById("nutritionADisplay");
    const nutritionBDisplay = document.getElementById("nutritionBDisplay");
    const nutritionA = localStorage.getItem("nutritionA") || "--";
    const nutritionB = localStorage.getItem("nutritionB") || "--";

    if (nutritionADisplay) nutritionADisplay.textContent = nutritionA;
    if (nutritionBDisplay) nutritionBDisplay.textContent = nutritionB;

    // Navigation buttons
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
