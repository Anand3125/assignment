import axios from 'axios';

// Set the base URL for the API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/';

// Axios instance for making requests
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await apiClient.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to submit the form data
export const submitForm = async (formData) => {
  try {
    const response = await apiClient.post('/form', formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to fetch all form data
export const fetchFormData = async () => {
  try {
    const response = await apiClient.get('/form');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
