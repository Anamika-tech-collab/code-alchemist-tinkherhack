import axios from 'axios';

// Create a central instance of axios
const api = axios.create({
  // Use your local backend URL for now. 
  // Later, this can be moved to a .env file for production.
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export default api;