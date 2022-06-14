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
      return 'Erro, tente novamente!';
  }
}

export const getAllProducts = async () => {
  const config = {
    method: 'GET',
    headers: { 'Content-type': 'application/json', Authorization: getUserData()[1] },
  };
  return fetch(`${baseURL}/products`, config)
  .then((response) => { 
    const errors = error(response.status);
    if(errors !== '') return errors;
    return response.json();
  })
  .then((data) => {
    return data;
  });
};
