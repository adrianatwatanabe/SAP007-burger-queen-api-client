export function setUserData(name, token, role) {
  localStorage.setItem('name', name);
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}

export function getUserData() {
  return [localStorage.getItem('name'), localStorage.getItem('token'), localStorage.getItem('role')];
}

export function deleteUserData() {
  return localStorage.clear();
}