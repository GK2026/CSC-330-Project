
document.getElementById("submit").addEventListener("click", async () => {
    const data = {
        fat: document.getElementById("fat").value,
        sodium: document.getElementById("sodium").value
    } 
    try {
        const res = await fetch("/editList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    })
        if (res.ok) {
            alert("Goals Updated");
        }
        else {
            alert("Error, could not update goals");
        }
    }
    catch (err) {
        alert("Network error, please try again later");
    }
});
//redirects to home page
document.getElementById("toHomeBtn").addEventListener("click", () => {
    location.pathname = "../home.html";
});