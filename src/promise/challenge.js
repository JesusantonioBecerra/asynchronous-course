import fetch from "node-fetch";
import * as constants from "./../const.cjs";
const API = constants.default.constants.API;

function fetchData(urlApi) {
  return fetch(urlApi);
};

//experimentos llamados fetchData
// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })  .then(() => console.log('hi'))


fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products[0])
    return fetchData(`${API}/products/${products[0]?.id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product?.category?.id}`)
  })
  .then(response => response.json())
  .then( category => {
    return console.log(category.name, 'hi')
  })
  .catch(err => console.log(err))
  .finally(() => console.log('hemos terminado'))