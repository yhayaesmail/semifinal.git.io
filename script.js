
const yalor = document.querySelector(".productsSection");
const buyButtons = document.querySelectorAll(".buy-now");

buyButtons.forEach(button => {
  button.addEventListener("click", function () {
    const productCard = this.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;
    alert(`✅ Added to cart: ${productName} (${productPrice})`);
  });
});








