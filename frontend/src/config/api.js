// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export const API_ENDPOINTS = {
  reservations: `${API_BASE_URL}/api/reservations`,
  checkAvailability: `${API_BASE_URL}/api/reservations/check-availability`,
  tableTypes: `${API_BASE_URL}/api/table-types`,
  auth: `${API_BASE_URL}/api/auth`
};

export { API_BASE_URL };
