import { getElement } from "../utils.js";
import display from "../displayProducts.js";



const setupSearch = (store) => {
  const form = getElement('.search-form');
  const searchInput = getElement('.search-input');
  
  form.addEventListener('keyup', function () {
    const value = searchInput.value;
    if (value) {
      
      let newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, getElement('.products-container'), true);

      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">
      sorry, no products match your search criteria
      </h3>`
      }
    } else {
      display(store, getElement('.products-container'), true)
    }
  })
};

export default setupSearch;