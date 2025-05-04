// client/src/services/api.js (Example - Check your actual code)
import axios from 'axios';

// --- CHECK THIS URL ---
// Option 1: Using Proxy (if configured in client/package.json)
const API_URL = '/api/news';
// Option 2: Explicit URL (if not using proxy or proxy isn't working)
// const API_URL = 'http://localhost:5001/api/news'; // Make sure port 5001 is correct

// --- CHECK AUTH HEADER (if using the placeholder auth) ---
// You need to send the header you defined in the backend middleware
const getAuthConfig = () => {
    // !! Replace 'your-very-secret-key' with the actual key from authMiddleware.js !!
    return {
        headers: {
            'Content-Type': 'multipart/form-data', // Axios might set this automatically for FormData, but explicit can help
            'x-admin-secret': 'your-very-secret-key' // <<< ADD THIS HEADER FOR PROTECTED ROUTES
        }
    };
};


// Add a news item
export const addNewsItem = async (formData) => { // formData is FormData object
  try {
    // --- CHECK THIS CALL ---
    const res = await axios.post(API_URL, formData, getAuthConfig()); // Pass FormData and Auth Config
    return res.data;
  } catch (error) {
    console.error('Error adding news:', error.response?.data || error.message);
    throw error;
  }
};

// Update a news item
export const updateNewsItem = async (id, formData) => { // formData is FormData object
  if (!id) throw new Error("Update requires a valid news item ID.");
  try {
     // --- CHECK THIS CALL ---
    const res = await axios.put(`${API_URL}/${id}`, formData, getAuthConfig()); // Pass FormData and Auth Config
    return res.data;
  } catch (error) {
    console.error('Error updating news:', error.response?.data || error.message);
    throw error;
  }
};

// ... (getAllNews, deleteNewsItem - make sure deleteNewsItem also sends auth header if needed)

export const deleteNewsItem = async (id) => {
   if (!id) throw new Error("Delete requires a valid news item ID.");
   try {
    // --- ADD AUTH HEADER TO DELETE IF NEEDED ---
     const res = await axios.delete(`${API_URL}/${id}`, { headers: getAuthConfig().headers }); // Simplified way to send headers for DELETE
     return res.data;
   } catch (error) {
     console.error('Error deleting news:', error.response?.data || error.message);
     throw error;
   }
 };

// ... (getAllNews doesn't need auth usually)
export const getAllNews = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error('Error fetching news:', error.response?.data || error.message);
    throw error;
  }
};