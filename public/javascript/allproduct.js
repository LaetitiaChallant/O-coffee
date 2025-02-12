const buttonAllProduct = document.querySelector("#all-product");
const othersProducts = document.querySelector("#others-products");

buttonAllProduct.addEventListener("click", () => {
  buttonAllProduct.classList.toggle("hidden");
  othersProducts.classList.remove("hidden");
  othersProducts.classList.add("grid");
});