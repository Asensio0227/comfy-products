import {
  formatPrice,
  getStorageItem,
  setStorageItem,
  getElement
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDom from "./addToCartDOM.js";

const cartItemsDom = getElement(".cart-items");
const cartTotalDom = getElement(".cart-total");
const cartItemCountDom = getElement(".cart-item-count");

let cart = getStorageItem("cart");

export const addToCart = (id) => { 
  let items = cart.find((product) => product.id === id); 
  if (!items) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDom(product);
  } else {
    const amount = increaseCart(id);
    const items = [...cartItemsDom.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }

  displayCartItemsCount();
  displayCartTotal();
  setStorageItem("cart", cart);
  openCart();
};

function displayCartItemsCount() {
  const amount = cart.reduce((cartAmount, cartItem) => {
    return cartAmount += cartItem.amount;
  }, 0)
  cartItemCountDom.textContent = amount;
};

function displayCartTotal() {
  const total = cart.reduce((cartTotal, cartItem) => {
    return cartTotal += cartItem.price * cartItem.amount;
  }, 0)
  cartTotalDom.textContent = `Total :  ${formatPrice(total)}`;
}

function displayCartDom() {
  cart.forEach((cartItem) => {
    addToCartDom(cartItem);
  })
}


function removeCart(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

function increaseCart(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function decreaseCart(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function setupCartFunctionality() {
  cartItemsDom.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;
    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeCart(id);
      element.parentElement.parentElement.remove();
    }
    // increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseCart(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
     if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseCart(parentID);
      parent.previousElementSibling.textContent = newAmount;
    }
    displayCartItemsCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

function init() {
  displayCartItemsCount();
  displayCartTotal();
  displayCartDom();
  setupCartFunctionality();
}

init();