const currentUser = sessionStorage.getItem("currentUser") || null

// Helper function to handle button clicks
function handleInput(buttonId, inputId, label) {
    document.getElementById(buttonId).addEventListener("click", function () {
      const value = document.getElementById(inputId).value;
  
  // Attach handlers to all buttons
  handleInput("NameBtn", "NameInput", "Name");
  handleInput("GenderBtn", "GenderInput", "Gender");
  handleInput("AgeBtn", "AgeInput", "Age");
  handleInput("WeightBtn", "WeightInput", "Weight");
  handleInput("HeightBtn", "HeightInput", "Height");
  handleInput("CalGoalBtn", "CalGoalInput", "Calorie Goal");
  handleInput("FatGoalBtn", "FatGoalInput", "Fat Goal");
  handleInput("SodGoalBtn", "SodGoalInput", "Sodium Goal");
  
  // Handle dropdown changes
  document.getElementById("HealthGoal").addEventListener("change", function () {
    const selected = this.options[this.selectedIndex].text;
    alert(`Selected Health Goal: ${selected}`);
    console.log(`Health Goal: ${selected}`);
  })
    })
  };
