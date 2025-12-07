const currentUser = sessionStorage.getItem("currentUser") || null

//Takes user back to home page
document.getElementById('closeProfile').addEventListener('click', function(event) {
    window.location.pathname = '../home.html';
});
