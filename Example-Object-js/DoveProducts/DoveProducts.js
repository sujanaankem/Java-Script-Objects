// Define Dove products as objects
const doveProducts = {
  soap: {
    name: "Dove Beauty Bar",
    type: "Soap",
    price: "$3",
    description: "Moisturizing beauty bar that gently cleanses and nourishes skin.",
    features: ["Mild cleanser", "Moisturizing cream", "Soft fragrance"]
  },
  shampoo: {
    name: "Dove Shampoo",
    type: "Hair Care",
    price: "$6",
    description: "Nourishing shampoo that strengthens hair and reduces breakage.",
    features: ["Strengthens hair", "Reduces frizz", "Gentle formula"]
  },
  conditioner: {
    name: "Dove Conditioner",
    type: "Hair Care",
    price: "$5",
    description: "Smooth conditioner that detangles and adds shine to hair.",
    features: ["Detangles easily", "Adds shine", "Moisturizes hair"]
  },
  bodyLotion: {
    name: "Dove Body Lotion",
    type: "Skin Care",
    price: "$7",
    description: "Hydrating lotion that keeps skin soft and smooth all day.",
    features: ["Deep hydration", "Non-greasy", "Long-lasting moisture"]
  }
};

// Function to display product details
function displayProductDetails(productKey) {
  const product = doveProducts[productKey];
  const container = document.getElementById("product-details");

  container.innerHTML = `
    <div class="product-card">
      <h2>${product.name}</h2>
      <p><strong>Type:</strong> ${product.type}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>${product.description}</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        ${product.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>
  `;
}

// Event listener for dropdown
document.getElementById("product-select").addEventListener("change", function() {
  displayProductDetails(this.value);
});

// Initial render (default soap)
displayProductDetails("soap");
