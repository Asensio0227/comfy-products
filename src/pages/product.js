// global imports
import '../toggleSidebar.js';
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from '../utils.js'; 

// selections
const loading = getElement('.lds-facebook');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDom = getElement('.single-product-price');
const colorDom = getElement('.single-product-colors');
const descDom = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// products
let productID

const init = async () => {
  const urlID = window.location.search;
  try {
    const resp = await fetch(`${singleProductUrl}${urlID}`);
   if (resp.status >= 200 && resp.status <= 299) {
      const products = await resp.json();
     const { id, fields } = products;
     productID = id;
     const {
       colors,
       company,
       name,
       price,
       description,
     } = fields;
     const image = fields.image[0].thumbnails.large.url;

     document.title = `${name.toUpperCase()} | comfy`;
     pageTitleDOM.textContent = `home | ${name}`;
     imgDOM.src = image;
     titleDOM.textContent = name;
     companyDOM.textContent = `by ${company}`;
     priceDom.textContent = formatPrice(price);
     colors.map((color) => {
       let span = document.createElement('span');
       span.classList.add("product-color");
       span.style.backgroundColor = color;
       colorDom.appendChild(span);
     });
     descDom.textContent = description;
    } else {
      console.log(resp.status, resp.statusText);
      centerDOM.innerHTML = `<h3 class="error">
      sorry, something went wrong
      </h3>`
    }
  } catch (error) {
    console.log(error);
  }
  loading.style.display = "none";
}

// show product when page loads
window.addEventListener("DOMContentLoaded", function () {
  init();
})

cartBtn.addEventListener('click', function () {
  addToCart(productID);
})