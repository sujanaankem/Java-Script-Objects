// Create an object
const product = {
  name: "Laptop",
  brand: "Dell",
  price: 50000
};

// Freeze the object
Object.freeze(product);

function showObject() {
  document.getElementById("result").innerHTML = 
    "Original Object: " + JSON.stringify(product);
}

function tryModify() {
  // Attempt to modify properties
  product.price = 60000;   // Won't change
  product.color = "Black"; // Won't be added
  delete product.brand;    // Won't be deleted

  document.getElementById("result").innerHTML = 
    "After Modification Attempt: " + JSON.stringify(product);
}
