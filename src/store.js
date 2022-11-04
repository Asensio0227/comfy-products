import {
  getStorageItem,
  setStorageItem,
} from './utils.js';


let store = getStorageItem('store');

const setupStore = (products) => { 
  store = products.map((product) => {
    const { id, fields } = product;
    const {
      colors,
      featured,
      image: img,
      company,
      name,
      price,
    } = fields;
    const image = img[0].thumbnails.large.url;
    return {
      id,
      featured,
      name,
      price,
      company,
      colors,
      image
    }
  })
  setStorageItem("store", store);
  
};

const findProduct = (id) => {
  let newAmount = store.find((product) => product.id === id);
  return newAmount;
 };

export {
  store,
  setupStore,
  findProduct,
}

