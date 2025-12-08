const currentUser = sessionStorage.getItem("currentUser") || null

document.getElementById("submit").addEventListener("click", async () => {
    const data = {
        fatGoal: document.getElementById("fat").value,
        sodiumGoal: document.getElementById("sodium").value,
        calorieGoal: document.getElementById("calorie").value,
        healthGoal: document.getElementById("health").value
    } 
     try {
        const res = await fetch("/editList", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    if (res.ok) {
        alert("Goals Updated");
        sessionStorage.setItem("calGoal", data.calorieGoal);
        sessionStorage.setItem("fatGoal", data.fatGoal);
        sessionStorage.setItem("sodiumGoal", data.sodiumGoal);
        sessionStorage.setItem("healthGoal", data.healthGoal);

    } else {
        alert("Error, could not update goals");
    }
    } catch (err) {
        alert("Network error, please try again later");
    }
});
//redirects to home page
document.getElementById("toHomeBtn").addEventListener("click", () => {
    location.pathname = "../home.html";
});
