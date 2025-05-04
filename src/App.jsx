import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import About from "./pages/About";
// import PrivateRoute from "./components/PrivateRoute";


import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NewsPage from './pages/NewsPage';   // Your public news page
import AdminPage from './pages/AdminPage';  // Your admin panel page

function App() {
  return (
    <Router>
      <div className="font-sans">
        
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
