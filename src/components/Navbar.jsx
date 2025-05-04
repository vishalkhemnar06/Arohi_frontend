import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAdminClick = () => {
    setShowAdminLogin(true);
    setIsOpen(false); // Close mobile menu if open
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === "Arohi" && password === "AdminAjit") {
      navigate("/AdminPage");
      setShowAdminLogin(false);
      setUsername("");
      setPassword("");
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const navLinks = [
    { path: "/", name: "मुख्यपृष्ठ" },
    { path: "/about", name: "आमच्याबद्दल" },
    { path: "/services", name: "सेवा" },
    { path: "/NewsPage", name: "घोषणा" },
    { path: "/contact", name: "संपर्क" },
    { name: "Admin", isAdmin: true },
  ];

  // Color scheme
  const colors = {
    primary: "#4f46e5",
    secondary: "#ec4899",
    accent: "#f59e0b",
    dark: "#1e293b",
    light: "#f8fafc"
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: colors.secondary,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav 
        className={`fixed w-full px-6 py-3 flex justify-between items-center z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-r from-indigo-900 to-purple-800 shadow-xl" 
            : "bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Logo and Brand Name */}
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src="logo.jpg"
            alt="Arohi Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-amber-400 shadow-lg"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.span 
            className="text-xl font-bold bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 bg-clip-text text-transparent tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            आरोही कॉम्प्युटर्स आणि मल्टीसर्व्हिसेस
          </motion.span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.path || link.name}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {link.isAdmin ? (
                <button
                  onClick={handleAdminClick}
                  className="text-amber-100 font-medium px-3 py-1 relative group transition-colors hover:text-white"
                >
                  {link.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </button>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-amber-100 font-medium px-3 py-1 relative group transition-colors hover:text-white"
                >
                  {link.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div 
          className="md:hidden z-50"
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={toggleMenu} 
            className="text-amber-200 p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <X size={28} className="text-amber-300" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/70 md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-indigo-800 to-purple-900 shadow-xl flex flex-col z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Logo and Brand in Mobile Menu */}
              <div className="flex items-center space-x-3 p-6 border-b border-purple-700">
                <motion.img
                  src="logo.jpg"
                  alt="Arohi Logo"
                  className="h-12 w-12 object-cover rounded-full border-2 border-amber-400 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.span 
                  className="text-lg font-bold bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  आरोही
                </motion.span>
              </div>

              {/* Navigation Links */}
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col space-y-6 p-6 overflow-y-auto"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path || link.name}
                    variants={mobileLinkVariants}
                  >
                    {link.isAdmin ? (
                      <button
                        onClick={handleAdminClick}
                        className="text-amber-100 text-xl font-medium py-3 px-6 rounded-lg hover:bg-white/10 hover:text-amber-300 transition-all flex items-center w-full text-left"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-amber-400 rounded-full mr-3"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                        {link.name}
                      </button>
                    ) : (
                      <Link 
                        to={link.path} 
                        onClick={toggleMenu}
                        className="text-amber-100 text-xl font-medium py-3 px-6 rounded-lg hover:bg-white/10 hover:text-amber-300 transition-all flex items-center"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-amber-400 rounded-full mr-3"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="mt-auto p-6 border-t border-purple-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full mb-4" />
                <p className="text-center text-amber-100 text-sm">
                  आरोही कॉम्प्युटर्स आणि मल्टीसर्व्हिसेस
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showAdminLogin && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-indigo-700 to-purple-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h3 className="text-2xl font-bold text-amber-300 mb-6 text-center">Admin Login</h3>
              
              <form onSubmit={handleAdminLogin}>
                <div className="mb-4">
                  <label className="block text-amber-100 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Enter username"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-amber-100 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-500 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    placeholder="Enter password"
                  />
                </div>
                
                {loginError && (
                  <div className="mb-4 text-red-300 text-sm">{loginError}</div>
                )}
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAdminLogin(false);
                      setLoginError("");
                    }}
                    className="px-4 py-2 rounded-lg border border-indigo-400 text-indigo-100 hover:bg-indigo-600/50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                  >
                    Login
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;