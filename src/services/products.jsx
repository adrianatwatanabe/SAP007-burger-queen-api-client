import { getUserData } from './storage';
const baseURL = 'https://lab-api-bq.herokuapp.com';

const error = (status) => {
  switch (status) {
    case 200:
      return '';
    case 401:
      return 'Usuário não autenticado!';
    case 404:
      return 'Não encontrado!';
    default:
      return 'Carregando...';
  }
}

export const getAllProducts = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: getUserData()[1]
    },
  };
  return fetch(`${baseURL}/products`, config)
    .then((response) => {
      const errors = error(response.status);
      if (errors !== '') return errors;
      return response.json();
    })
    .then((data) => {
      const products = data.map((product) => ({
        ...product,
        counter: 0,
        subTotal: product.price,
      }))
      return products.sort((a, b) => a.name.localeCompare(b.name));
    });
};

export const createOrders = (client, table, products) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: getUserData()[1]
    },
    body: JSON.stringify({
      client,
      table,
      products,
    })
  };
  return fetch(`${baseURL}/orders`, config)
    .then((response) => {
      const errors = error(response.status);
      if (errors !== '') return errors;
      return response.json();
    });
}
