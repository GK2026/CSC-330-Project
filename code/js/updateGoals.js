document.getElementById("saveGoals").addEventListener("click", async () => {
    const data = document.getElementById("goalA").value;
    try {
        const res = await fetch("/updateGoals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    if (res.ok) {
          alert("Goals Updated");
    } else {
          alert("Error, could not update goals");
    }
    } catch (err) {
        alert("Network error, please try again later");
    }
});
// Takes user back to home page
document.getElementById('backHome2').addEventListener('click', function(event) {
    window.location.pathname = '../home.html';
});
