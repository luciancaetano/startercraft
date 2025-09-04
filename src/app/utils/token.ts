function getToken() {
  return localStorage.getItem('token') ?? null;
}

export { getToken };

export function setToken(token: string): void {
  localStorage.setItem('token', token);
}

export function clearToken(): void {
  localStorage.removeItem('token');
}
