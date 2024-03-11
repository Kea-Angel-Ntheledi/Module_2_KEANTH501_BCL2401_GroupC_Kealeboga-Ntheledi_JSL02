const welcomeMessage = () => {
  const today = new Date().toDateString();
  document.getElementById(
    "welcomeMessage"
  ).textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
  const workoutInput = document.querySelector("#workoutInput").value;
  const workoutList = document.querySelector("#workoutList");
  const newWorkout = document.createElement("li");
  newWorkout.textContent = workoutInput;
  workoutList.appendChild(newWorkout);
};
// Event listener for submitting workout routine
document
  .querySelector("#submitWorkout")
  .addEventListener("click", displayWorkoutRoutine);

// Function to add new fitness goals and prevent duplicate goals
const addNewGoal = () => {
  const goalInput = document.querySelector("#goalInput").value;
  const goalList = document.querySelector("#goalList");

  // Check for duplicates
  let isDuplicate = false;
  goalList.querySelectorAll("li").forEach((goal) => {
    if (goal.textContent === goalInput) {
      isDuplicate = true;
      return;
    }
  });

  // Prevent duplicates
  if (isDuplicate) {
    alert("This goal already exists!"); // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    return;
  }

  // If it's not a duplicate, proceed with adding it as a new goal
  const newGoal = document.createElement("li");
  newGoal.textContent = goalInput;
  goalList.appendChild(newGoal);
};
// Event listener for submitting new goals
document.querySelector("#submitGoal").addEventListener("click", addNewGoal);

// Variable to store water intake
let waterIntake = 0;
// Function to update water intake
const updateWaterIntake = (change) => {
  waterIntake += change;
  document.querySelector(
    "#waterIntakeDisplay"
  ).textContent = `${waterIntake} glasses 💦`;
};
// Event listeners for increasing and decreasing water intake
document
  .querySelector("#increaseWater")
  .addEventListener("click", () => updateWaterIntake(1));
document
  .querySelector("#decreaseWater")
  .addEventListener("click", () => updateWaterIntake(-1));

// Function to update progress charts
const updateProgressCharts = () => {
  document.querySelector("#workoutProgress").textContent =
    "Updated workout progress...";
  document.querySelector("#calorieIntakeProgress").textContent =
    "Updated calorie intake progress...";
};
updateProgressCharts();

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};
document.querySelector("#themeToggle").addEventListener("click", toggleTheme);

const submitMealPlan = (event) => {
  event.preventDefault(); // Prevent form submission
  alert("Meal plan submitted successfully! 🍴");
};
document
  .querySelector("#mealPlanForm")
  .addEventListener("submit", submitMealPlan);
