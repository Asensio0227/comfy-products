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
  let items = cart.find((product) => product.id === id);
  console.log(items);

  if (!items) {
    console.log("hello");
    let product = findProduct(id);
    console.log(product);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDom(product);
  } else {
    // update value
    const amount = increaseAmount(id);
    const items = [...cartItemsDom.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }

  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart)
  openCart();
};

function displayCartTotal() {
  let total = cart.reduce((cartTotal, cartItem) => {
    return cartTotal += cartItem.price * cartItem.amount;
  },0)
  cartTotalDom.textContent =`${ formatPrice(total)}`;
}

function displayCartDom() {
  cart.forEach((cartItem) => {
    return addToCartDom(cartItem);
  })
}

function removeItems(id) {
  cart = cart.filter((cartItem) => cartItem.id === id);
  displayCartTotal();
  localStorage.removeItem("cart", cart);
};

function increaseAmount(id) {
  let newAmount
  cart  = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
        cartItem = {...cartItem, amount: newAmount};
    }
    return cartItem;
  })
  return newAmount;
}

function decreaseAmount(id) {
  let newAmount
  cart  = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
        cartItem = {...cartItem, amount: newAmount};
    }
    return cartItem;
  })
  return newAmount;
}

function displayCartItemCount() {
  let amount = cart.reduce((cartAmount, cartItem) => {
    return cartAmount += cartItem.amount;
  },0)
  cartItemCountDom.textContent = amount;
}

function setupCartFunctionality() {
  cartItemsDom.addEventListener('click', function (e) {
    
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentId = parent.dataset.id;
    
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItems(id);
      
      element.parentElement.parentElement.remove();
    }
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentId);
      parent.nextElementSibling.textContent = newAmount;
    }
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount=decreaseAmount(parentId);
      console.log(parent.previousElementSibling);
      if (newAmount === 0) {
        removeItems(parentId);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  })
  }
  
function init() {
  displayCartItemCount();
  displayCartTotal();
  displayCartDom();
  setupCartFunctionality();
}

init();