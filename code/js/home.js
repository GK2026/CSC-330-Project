document.addEventListener("DOMContentLoaded", async function () {

    let currentUser = null;

    try {
        const response = await fetch ('/currentUser');
        const responseJSON = await response.json();
        console.log("/currentUser response:", responseJSON);
        currentUser = responseJSON.user || null;
        sessionStorage.setItem("currentUser", currentUser);
    } catch (error) {
        console.error ("Failed to grab currentUser", error);
    }

    const calGoal = sessionStorage.getItem("calGoal");
    const fatGoal = sessionStorage.getItem("fatGoal");
    const sodiumGoal = sessionStorage.getItem("sodiumGoal");
    const age = sessionStorage.getItem("age");
    const gender = sessionStorage.getItem("gender");
    const healthGoal = sessionStorage.getItem("healthGoal");
    const name = sessionStorage.getItem("name");



    console.log("goals:", calGoal, fatGoal, sodiumGoal, age, gender, healthGoal, name);

    window.currentUser = currentUser;

    console.log(window.currentUser);

    document.getElementById("calGoal").textContent = calGoal;
    document.getElementById("fatGoal").textContent = fatGoal;
    document.getElementById("sodiumGoal").textContent = sodiumGoal;
    document.getElementById("name").textContent = name;

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
