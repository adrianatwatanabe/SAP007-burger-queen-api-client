const baseURL = 'https://lab-api-bq.herokuapp.com';
const createUserURL = `${baseURL}/users`;
const loginUserURL = `${baseURL}/auth`;

export const createUser = (nameUser, emailUser, passwordUser, role) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameUser,
      email: emailUser,
      password: passwordUser,
      role: role,
      restaurant: 'BURGER Queen',
    }),
  };
  return fetch(createUserURL, config);
};

export const loginUser = (emailUser, passwordUser) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailUser,
      password: passwordUser,
    }),
  };
  return fetch(loginUserURL, config);
};
