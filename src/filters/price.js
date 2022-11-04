import { getElement } from "../utils.js";
import display from "../displayProducts.js";


const setupPrice = (store) => { 
  const priceValue = getElement('.price-value');
  const priceInput = getElement('.price-filter');

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice)
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`
  
  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;

    let newStore;
    newStore = store.filter((product) => product.price / 100 <= value);

    display(newStore, getElement('.products-container'), true)
  })
};

export default setupPrice;