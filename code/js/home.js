  // PAGES -> Mostly redundant, relevant ones moved to questionnaire.js

  // BUTTONS -> Moved to under navigation

  // NAVIGATION
 document.addEventListener("DOMContentLoaded", function () {
    
    const message = "This is our prototype";
    document.querySelector("#header").innerHTML = message;
    console.log(message);

    const recordFoodBtn = document.getElementById("recordFoodBtn");
        recordFoodBtn.onclick = function() {
            location.href = "code/recordFood.html";
        };


    const goalBtn = document.getElementById("goalBtn");
    goalBtn.onclick = function() {
        location.href = "code/updateGoals.html";
    };

    const editNutritionBtn = document.getElementById("editNutritionBtn");
    editNutritionBtn.onclick = function() {
        location.href = "code/editList.html";
    };


    const editProfileBtn = document.getElementById("editProfileBtn");
    editProfileBtn.onclick = function() {
        location.href = "code/editProfile.html";
    };

    const chatBtn = document.getElementById("chatBtn");
    chatBtn.onclick = function() {
        location.href = "code/coach.html";
    };

    const backToQuestionBtn = document.getElementById("backToQuestionBtn");
    backToQuestionBtn.onclick = function() {
        location.href = "code/questionnaire.html";
    };


});
