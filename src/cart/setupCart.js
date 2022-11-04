import {
  formatPrice,
  getStorageItem,
  setStorageItem,
  getElement
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDom from "./addToCart.js";

const cartItemsDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");
const cartItemCountDom = getElement(".cart-item-count");

let cart = getStorageItem("cart");

export const addToCart = (id) => { 
  
};




