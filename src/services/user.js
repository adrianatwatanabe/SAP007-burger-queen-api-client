import { setToken } from './storage';
const baseURL = 'https://lab-api-bq.herokuapp.com';

function error(status) {
  switch (status) {
    case 200:
      return '';
    case 400:
      return 'Email e/ou senha incorretos. Tente novamente!';
    case 403:
      return 'Email já cadastrado!';
    default:
      return 'Erro, tente novamente!';
  }
}

export const createUser = (name, email, password, role) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
      restaurant: 'BURGER Queen',
    }),
  };
  return fetch(`${baseURL}/users`, config)
  .then((response) => {
    return error(response.status);
  });
};

export const userLogin = (email, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };
  return fetch(`https://lab-api-bq.herokuapp.com/auth`, config)
    .then((response) => { 
      const errors = error(response.status);
      if(errors !== '') return errors;
      return response.json();
    })
    .then((data) => {
      setToken(data.token);
    });
};
