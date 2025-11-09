  // Attach handlers to questionnaire buttons
  handleInput("NameBtn", "NameInput", "Name");
  handleInput("GenderBtn", "GenderInput", "Gender");
  handleInput("AgeBtn", "AgeInput", "Age");
  handleInput("WeightBtn", "WeightInput", "Weight");
  handleInput("HeightBtn", "HeightInput", "Height");
  handleInput("CalGoalBtn", "CalGoalInput", "Calorie Goal");
  handleInput("FatGoalBtn", "FatGoalInput", "Fat Goal");
  handleInput("SodGoalBtn", "SodGoalInput", "Sodium Goal");

   // HELPER FUNCTION FOR INPUT BUTTONS
  function handleInput(buttonId, inputId, label) {
    document.getElementById(buttonId).addEventListener("click", function () {
      const value = document.getElementById(inputId).value;
    });
  }

  // Dropdown change
  document.getElementById("HealthGoal").addEventListener("change", function () {
    const selected = this.options[this.selectedIndex].text;
  });

  const questionPage = document.getElementById("question");
  const recordFood = document.getElementById("recordFood");
  const goalPage = document.getElementById("goalPage");