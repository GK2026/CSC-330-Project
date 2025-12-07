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

    if (healthGoal == "calories") {
        document.getElementById("calList").style.fontWeight = "bold";
        document.getElementById("advice").textContent = "Calorie Intake"
        document.getElementById("tip1").textContent = "Low-fat and fiber-rich foods, such as fruit and vegetables, have few calories"
        document.getElementById("tip2").textContent = "Generally, if you cut about 500 calories a day, you may lose .5-1 lbs a week"
        document.getElementById("tip3").textContent = "Eat from plates instead of packages to get a sense of what is going in your body"
    } else if ( healthGoal == "sodium") {
        document.getElementById("sodiumList").style.fontWeight = "bold";
        document.getElementById("advice").textContent = "Sodium Intake"
        document.getElementById("tip1").textContent = "When cooking, use alternatives to salt such as garlic, citrus, or spices"
        document.getElementById("tip2").textContent = "When eating out, ask for salt to be omitted from your meal"
        document.getElementById("tip3").textContent = "Avoid processed, cured, salted meats and opt for fresh options"
    } else {
        document.getElementById("fatList").style.fontWeight = "bold";
        document.getElementById("advice").textContent = "Fat Intake"
        document.getElementById("tip1").textContent = "Choose lower-fat or reduced-fat dairy products"
        document.getElementById("tip2").textContent = "Grill, bake, poach or steam food rather thann frying or roasting"
        document.getElementById("tip3").textContent = "Choose leaner cuts of meat that are lower in fat"
    };


    // Calories consumed (from sessionStorage)
    const totalCalDisplay = document.getElementById("totalCal");
    const savedTotal = sessionStorage.getItem("totalCalories") || 0;
    if (totalCalDisplay) totalCalDisplay.textContent = savedTotal;

    const totalFatDisplay = document.getElementById("totalFat");
    const savedFatTotal = sessionStorage.getItem("totalCalories") || 0;
    if (totalFatDisplay) totalFatDisplay.textContent = savedFatTotal;

    const totalSodiumDisplay = document.getElementById("totalSodium");
    const savedSodiumTotal = sessionStorage.getItem("totalCalories") || 0;
    if (totalSodiumDisplay) totalSodiumDisplay.textContent = savedSodiumTotal;

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
