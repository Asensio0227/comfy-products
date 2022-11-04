import {
  allProductsUrl
} from './utils.js'

const fetchProducts = async () => { 
  try {
    const resp = await fetch(allProductsUrl);
    if (resp) {
      return resp.json();
    }
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;