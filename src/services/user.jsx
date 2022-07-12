const baseURL = 'https://lab-api-bq.herokuapp.com';

export const createUser = async (name, email, password, role) => {
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
  return await fetch(`${baseURL}/users`, config);
}

export const userLogin = async (email, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }
  return await fetch(`${baseURL}/auth`, config);
}
