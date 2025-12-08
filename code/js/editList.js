const currentUser = sessionStorage.getItem("currentUser") || null

function displayRec() {
    const rec = document.getElementById("recommendation");

    let age = Number(sessionStorage.getItem("age"));
    let gender = sessionStorage.getItem("gender");

    if (gender == "F") {
        if (age < 19) {
            rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 1800.</b> `;
        }
        else if (age >= 19 && age <=30) {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 2000.</b> `;
        } else if (age >=31 && age <=50) {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 1800.</b> `;
        } else {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 1600.</b> `;
        }
    } else {
        if (age < 19) {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 2800.</b> `;
        }
        else if (age >= 19 && age <=30) {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 2600.</b> `;
        } else if (age >=31 && age <=50) {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 2200.</b> `;
        } else {
                        rec.innerHTML = `Based on your gender and age, we recommend a <b> calorie goal of 2000.</b> `;
        }
    }
}


displayRec();

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
