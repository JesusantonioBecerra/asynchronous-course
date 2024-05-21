import fetch from "node-fetch";
import * as constants from "./../const.cjs";
const API = constants.default.constants.API;

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const anotherFunction = async(urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`)
    const product = await fetchData(`${urlApi}/products/${products[0].id}`)
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`)
    console.log(products, product, category)
  } catch (err) {
    console.error(err)
  }
}

anotherFunction(API)