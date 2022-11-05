import {
  getStorageItem,
  setStorageItem,
} from './utils.js';


let store = getStorageItem('store');

const setupStore = (products) => { 
  store = products.map((product) => {
    const { id, fields } = product;
    const {
      company,
      name,
      colors,
      price,
      description,
      image: img,
      featured
    } = fields;
    const image = img[0].thumbnails.large.url;

    return {
      id,
      featured,
      company,
      name,
      colors,
      description,
      price,
      image
    }
  })

  setStorageItem("store", store);
};

const findProduct = (id) => {
  let products = store.find((product) => product.id === id);
  return products;
 };

export {
  store,
  setupStore,
  findProduct,
}

