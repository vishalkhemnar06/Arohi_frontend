// client/src/services/api.js
import axios from 'axios';

// ✅ Use full URL since you're running on port 5001
const API_URL = 'http://localhost:5001/api/news';

// ✅ Load secret from environment variable (.env file in client folder)
const getAuthConfig = () => {
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-admin-secret': process.env.REACT_APP_ADMIN_SECRET // Secret should be defined in .env
    }
  };
};

// Add news item
export const addNewsItem = async (formData) => {
  try {
    const res = await axios.post(API_URL, formData, getAuthConfig());
    return res.data;
  } catch (error) {
    console.error('Error adding news:', error.response?.data || error.message);
    throw error;
  }
};

// Update news item
export const updateNewsItem = async (id, formData) => {
  if (!id) throw new Error("Update requires a valid news item ID.");
  try {
    const res = await axios.put(`${API_URL}/${id}`, formData, getAuthConfig());
    return res.data;
  } catch (error) {
    console.error('Error updating news:', error.response?.data || error.message);
    throw error;
  }
};

// Delete news item
export const deleteNewsItem = async (id) => {
  if (!id) throw new Error("Delete requires a valid news item ID.");
  try {
    const res = await axios.delete(`${API_URL}/${id}`, { headers: getAuthConfig().headers });
    return res.data;
  } catch (error) {
    console.error('Error deleting news:', error.response?.data || error.message);
    throw error;
  }
};

// Get all news (no auth needed)
export const getAllNews = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching news:', error.response?.data || error.message);
    throw error;
  }
};
