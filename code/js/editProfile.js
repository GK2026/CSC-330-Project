const currentUser = sessionStorage.getItem("currentUser") || null

document.getElementById("saveProfile").addEventListener("click", async () => {
    const data = {
        name: document.getElementById("editName").value,
        gender: document.getElementById("editGender").value,
        age: document.getElementById("editAge").value,
    } 
     try {
        const res = await fetch("/editProfile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    if (res.ok) {
        alert("Profile Updated");
      sessionStorage.setItem("name", data.name);
      sessionStorage.setItem("gender", data.gender);
      sessionStorage.setItem("age", data.age);

    } else {
        alert("Error, could not update goals");
    }
    } catch (err) {
        alert("Network error, please try again later");
    }
});
//redirects to home page
document.getElementById("closeProfile").addEventListener("click", () => {
    location.pathname = "../home.html";
});

