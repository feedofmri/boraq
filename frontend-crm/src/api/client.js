import axios from 'axios';

// Use environment variable for API base so we can deploy to different domains
// VITE is only available at build time; for runtime flexibility you can
// keep this inlined or use a small runtime config script on the server.
const rawBase = import.meta.env.VITE_API_URL || import.meta.env.VITE_CRM_API || '/api/admin';
const API_BASE = rawBase.replace(/\/+$/g, '');

const api = axios.create({
  baseURL: API_BASE,
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
    // Add URL and status to errors for easier debugging
    if (err?.response) {
      console.error('API Response Error:', err.response.status, err.config?.url, err.response.data);
    } else {
      console.error('API Error:', err.message);
    }

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
