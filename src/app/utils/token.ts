export default function getToken() {
  return localStorage.getItem('token') ?? null;
}
