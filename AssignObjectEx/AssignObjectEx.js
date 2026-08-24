// Create an object
let person = {
  name: "Sujana",
  age: 22,
  city: "Eluru"
};

// Assign new properties
person.country = "India";
person.age = 23; // updating existing property

// Function to display object details
function showDetails() {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
    <p>City: ${person.city}</p>
    <p>Country: ${person.country}</p>
  `;
}
