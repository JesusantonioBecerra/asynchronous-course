import fetch from "node-fetch";
import * as constants from "../../const.cjs";
const API = constants.default.constants.API;

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return response
}

const data = {
  "title": "New Product Jesus",
  "price": 105,
  "description": "Description Jesus Platzi",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))