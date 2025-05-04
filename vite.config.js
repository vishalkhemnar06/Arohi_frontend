// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Assuming you installed this plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Keep your existing plugins
  ],
  // --- Add the server configuration below ---
  server: {
    port: 5173, // Your frontend port (you confirmed this)
    proxy: {
      // Requests starting with /api will be forwarded to your backend
      '/api': {
        target: 'http://localhost:5001', // <<<< Your backend server address and port
        changeOrigin: true, // Recommended, helps with CORS and virtual hosts
        // secure: false,      // Uncomment if your backend uses https with self-signed cert (usually not needed for localhost http)
        // ws: true,           // Uncomment if you need WebSocket proxying

        // Optional: Rewrite path only if absolutely necessary.
        // If your backend routes are defined like router.post('/news', ...), you might need to remove /api
        // rewrite: (path) => path.replace(/^\/api/, ''),
        // But if your backend routes are router.post('/', ...) under app.use('/api/news', ...),
        // then you DON'T need the rewrite. (This is how your backend is set up).
      },
      // You can add other proxies here if needed, e.g., for different API versions or services
      // '/auth': 'http://localhost:5002',
    },
  },
});