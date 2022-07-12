import { getUserData } from './storage';
const baseURL = 'https://lab-api-bq.herokuapp.com';

export const getAllProducts = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: getUserData()[1]
    },
  };
  return fetch(`${baseURL}/products`, config);
};

export const createOrders = (orders) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: getUserData()[1]
    },
    body: JSON.stringify({
      client: orders.client,
      table: orders.table,
      products: orders.products,
    })
  };
  return fetch(`${baseURL}/orders`, config);
}
