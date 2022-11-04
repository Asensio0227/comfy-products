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


// show product when page loads
