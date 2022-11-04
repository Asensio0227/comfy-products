// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from './src/fetchProducts.js';
import {setupStore,store} from './src/store.js';
import display from "./src/displayProducts.js";
import {getElement} from "./src/utils.js"

const loading = getElement('.lds-facebook');

const init = async () => {
  const products = await fetchProducts();;
  
  if (products.length < 1) {
    setupStore(products);
    console.log(products);
  }

  const featured = store.filter((product) => product.featured === true);
  display(featured, getElement('.featured-center'));
  loading.style.display = "none";
}

window.addEventListener('DOMContentLoaded',function(){
  init();
})