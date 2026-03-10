import axios from 'axios';

const api = axios.create({
  baseURL: '/api/admin',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
});

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('boraq_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// On 401, clear token and redirect to login
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('boraq_token');
      localStorage.removeItem('boraq_user');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  }
);

export default api;

