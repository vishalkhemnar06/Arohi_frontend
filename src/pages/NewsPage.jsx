// client/src/pages/NewsPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
// Ensure path is correct
import { getAllNews } from '../services/api';
// Ensure path is correct
import NewsCard from '../components/NewsCard';

// --- Modern Styling ---
const pageStyle = {
    maxWidth: '960px', // Adjusted max-width for better readability in single column
    margin: '0 auto',
    padding: '0 20px 20px 20px', // Keep horizontal/bottom padding
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8f9fa',
    paddingTop: '80px', // Keep the padding for the navbar
};

const headingStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '40px',
    paddingBottom: '15px',
    position: 'relative',
    fontSize: '2.5rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
};

const headingUnderline = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '4px',
    background: 'linear-gradient(90deg, #3498db, #9b59b6)',
    borderRadius: '2px',
};

const messageContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px',
};

const messageStyle = {
    textAlign: 'center',
    padding: '30px 40px',
    fontSize: '1.2em',
    color: '#7f8c8d',
    border: '2px dashed #bdc3c7',
    borderRadius: '12px',
    backgroundColor: '#fff',
    margin: '30px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
};

const errorStyle = {
    ...messageStyle,
    color: '#e74c3c',
    backgroundColor: '#fadbd8',
    border: '2px solid #e74c3c',
};

const loadingStyle = {
    ...messageStyle,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const loadingAnimation = {
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px',
};

// *** REMOVED newsGrid style - no longer needed ***
// const newsGrid = { ... };

const floatingButton = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    zIndex: '1000',
};

const globalStyles = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .floating-btn:hover {
        transform: scale(1.1);
        background-color: #2980b9;
    }

    .news-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .news-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
`;

// --- Component ---
const NewsPage = () => {
    // State and hooks remain the same
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) { setShowScrollButton(true); }
            else { setShowScrollButton(false); }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    const fetchNews = useCallback(async () => {
        setLoading(true); setError('');
        try {
            const data = await getAllNews();
            if (Array.isArray(data)) { setNewsList(data); }
            else { console.warn("API response not an array:", data); setNewsList([]); }
        } catch (err) {
            console.error("Error fetching news:", err);
            if (err.message.includes('Network Error') || err.message.includes('ERR_NAME_NOT_RESOLVED')) {
                setError('सर्व्हरशी कनेक्ट करण्यात अयशस्वी.');
            } else { setError('बातम्या लोड करताना समस्या आली.'); }
            setNewsList([]);
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchNews(); }, [fetchNews]);

    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = globalStyles; document.head.appendChild(styleElement);
        return () => document.head.removeChild(styleElement);
    }, []);


    if (loading) {
        return (
            <div style={pageStyle}>
                <style>{globalStyles}</style>
                <h1 style={headingStyle}>📰 ताज्या बातम्या<span style={headingUnderline}></span></h1>
                <div style={messageContainer}><div style={loadingStyle}><div style={loadingAnimation}></div><p>बातम्या लोड होत आहेत...</p></div></div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={pageStyle}>
                <style>{globalStyles}</style>
                <h1 style={headingStyle}>📰 ताज्या बातम्या<span style={headingUnderline}></span></h1>
                <div style={messageContainer}><div style={errorStyle}><div style={{ fontSize: '2em', marginBottom: '15px' }}>❌</div>{error}<button onClick={fetchNews} style={{marginTop: '20px', padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'} onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}>पुन्हा प्रयत्न करा</button></div></div>
            </div>
        );
    }

    return (
        <div style={pageStyle}>
            <style>{globalStyles}</style>
            <h1 style={headingStyle}>
                📰 ताज्या बातम्या 
                <span style={headingUnderline}></span>
            </h1>

            {newsList.length === 0 ? (
                <div style={messageContainer}><div style={messageStyle}><div style={{ fontSize: '2em', marginBottom: '15px' }}>📪</div>सध्या कोणतीही नवीन बातमी उपलब्ध नाही.<button onClick={fetchNews} style={{marginTop: '20px', padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'} onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}>ताजीकरण करा</button></div></div>
            ) : (
                // *** RENDER CARDS DIRECTLY, NOT IN A GRID DIV ***
                <div>
                    {newsList.map((newsItem) => (
                        <NewsCard key={newsItem._id} news={newsItem} />
                    ))}
                </div>
            )}

            {showScrollButton && ( <button onClick={scrollToTop} style={floatingButton} className="floating-btn" aria-label="Scroll to top">↑</button> )}
        </div>
    );
};

export default NewsPage;