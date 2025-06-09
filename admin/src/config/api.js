// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export const API_ENDPOINTS = {
  reservations: `${API_BASE_URL}/api/reservations`,
  checkAvailability: `${API_BASE_URL}/api/reservations/check-availability`,
  tableTypes: `${API_BASE_URL}/api/table-types`,
  auth: {
    login: `${API_BASE_URL}/api/auth/login`,
    logout: `${API_BASE_URL}/api/auth/logout`,
    verify: `${API_BASE_URL}/api/auth/verify`
  }
};

export { API_BASE_URL };
