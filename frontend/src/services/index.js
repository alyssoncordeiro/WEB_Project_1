

export function auth() {
  return localStorage.jwtToken;
}

export function setUser(token) {
  localStorage.setItem("jwtToken", token);
}

export function logout() {
  localStorage.removeItem("jwtToken");
  window.location.reload();
}
