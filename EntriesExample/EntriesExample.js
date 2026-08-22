// Start with an empty object
let student = {};

// Get elements
const keyInput = document.getElementById("keyInput");
const valueInput = document.getElementById("valueInput");
const addBtn = document.getElementById("addBtn");
const outputDiv = document.getElementById("output");

// Function to display object entries dynamically
function displayEntries() {
  const entries = Object.entries(student);
  outputDiv.innerHTML = "<strong>Current Object:</strong><br>";
  
  entries.forEach(([key, value]) => {
    outputDiv.innerHTML += `${key}: ${value}<br>`;
  });
}

// Add property on button click
addBtn.addEventListener("click", () => {
  const key = keyInput.value.trim();
  const value = valueInput.value.trim();

  if (key && value) {
    student[key] = value; // Add new property dynamically
    displayEntries();     // Refresh display
    keyInput.value = "";
    valueInput.value = "";
  }
});
