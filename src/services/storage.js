export function setToken(value) {
  return localStorage.setItem('token', value);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function deleteUserData() {
  return localStorage.clear();
}