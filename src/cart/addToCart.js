import { formatPrice, getElement } from "../utils.js";

const addToCartDom = ({ id, name, price, image, amount }) => { 
  let article = document.createElement('article');
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
  article.innerHTML = `
  <img src="${image}" alt="${name}" class="cart-item-img">
          <div>
            <h4>${name}</h4>
            <p class="cart-item-price">${formatPrice(price)}</p>
            <button class="cart-item-remove-btn" data-id="${id}">
              remove
            </button>
          </div>

          <div>
            <button class="cart-item-increase-btn" data-id="${id}">
              <i class="fas fa-chevron-up"></i>
            </button>
            <p class="cart-item-amount" data-id="${id}">${amount}</p>
            <button class="cart-item-decrease-btn" data-id="${id}">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
  `
  const cartItemsDom = getElement('.cart-items');
  cartItemsDom.appendChild(article);
};


export default addToCartDom;