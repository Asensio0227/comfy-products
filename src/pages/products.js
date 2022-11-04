// global imports;
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// filter imports
import setupCompanies from '../filters/companies.js';
import setupSearch from "../filters/search.js";
import setupPrice from "../filters/price.js";

// specific imports;
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";
import fetchProducts from "../fetchProducts.js";


const init = async () => {
  const loading = getElement('.lds-facebook');
  
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  
  display(store, getElement('.products-container'))
  
  setupSearch(store)
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = "none";
}


init();
