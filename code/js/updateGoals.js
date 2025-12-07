// Save button: store Nutrition A and B in localStorage
document.getElementById('saveGoals').addEventListener('click', function(event) {
    event.preventDefault();

    const goalA = document.getElementById('goalA').value;
    const goalB = document.getElementById('goalB').value;

    // Save to localStorage
    localStorage.setItem('nutritionA', goalA);
    localStorage.setItem('nutritionB', goalB);

    alert('Goals saved! You can now go to Home.');
});

// Home button: only redirects
document.getElementById('backHome2').addEventListener('click', function() {
    window.location.href = 'home.html';
});
