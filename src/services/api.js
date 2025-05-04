import axios from 'axios';

// --- API BASE URL ---
// Option 1: Use proxy (if defined in client/package.json)
// Option 2: Use full URL fallback (if proxy isn't working)
const API_URL = '/api/news';
// const API_URL = 'http://localhost:5001/api/news'; // Uncomment this if proxy doesn't work

// --- AUTH HEADER CONFIG ---
const getAuthConfig = () => {
  const secretKey = process.env.REACT_APP_ADMIN_SECRET;

  return {
    headers: {
      // Do NOT manually set 'Content-Type' for FormData — Axios handles it
      'x-admin-secret': secretKey,
    },
  };
};

// --- ADD NEWS ITEM ---
export const addNewsItem = async (formData) => {
  try {
    const res = await axios.post(API_URL, formData, getAuthConfig());
    return res.data;
  } catch (error) {
    console.error('Error adding news:', error.response?.data || error.message);
    throw error;
  }
};

// --- UPDATE NEWS ITEM ---
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

// --- DELETE NEWS ITEM ---
export const deleteNewsItem = async (id) => {
  if (!id) throw new Error("Delete requires a valid news item ID.");
  try {
    const res = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
    return res.data;
  } catch (error) {
    console.error('Error deleting news:', error.response?.data || error.message);
    throw error;
  }
};

// --- GET ALL NEWS ---
export const getAllNews = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching news:', error.response?.data || error.message);
    throw error;
  }
};
