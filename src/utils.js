const allProductsUrl = 'https://course-api.com/javascript-store-products';
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error(`Please check ${selection} selector, no such element exist`);
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style:"currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
}

const getStorageItem = (item) => {
  let storageItems = localStorage.getItem(item);
  if (storageItems) {
    storageItems = JSON.parse(localStorage.getItem(item));
  } else {
    storageItems = [];
  }
  return storageItems;
}

const setStorageItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}