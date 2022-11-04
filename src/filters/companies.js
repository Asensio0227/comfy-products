import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies.map((company) => {
    return `<button class="company-btn">${company}</button>`
  })
    .join('');
  
  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    let newStores = [];
    if (element.textContent === "all") {
      newStores = [...store];
    } else {
      newStores = store.filter((product) => product.company === element.textContent
      );
    }

    display(newStores, getElement('.products-container'), true)
  })
};

export default setupCompanies;
