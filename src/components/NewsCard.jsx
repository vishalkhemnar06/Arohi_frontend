import React, { useState } from 'react';

// --- Modern Styling ---
const cardStyle = {
  border: 'none',
  borderRadius: '12px',
  padding: '0',
  marginBottom: '30px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
};

const imgContainerStyle = {
  overflow: 'hidden',
  borderBottom: '1px solid #f0f0f0',
  height: '100%', // or any smaller value like '100px'
  // width: '100%', 
  
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.5s ease',
};

const contentStyle = {
  padding: '20px 25px 25px 25px',
};

const titleStyle = {
  margin: '0 0 12px 0',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#2c3e50',
  lineHeight: '1.4',
  letterSpacing: '0.5px',
  position: 'relative',
  paddingBottom: '10px',
};

const descriptionStyle = {
  color: '#555',
  lineHeight: '1.7',
  marginBottom: '20px',
  fontSize: '1rem',
  fontWeight: '400',
  transition: 'all 0.3s ease',
};

const dateStyle = {
  fontSize: '0.85rem',
  color: '#7f8c8d',
  textAlign: 'left',
  marginTop: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const readMoreStyle = {
  display: 'inline-block',
  marginTop: '15px',
  padding: '8px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  borderRadius: '50px',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  border: '2px solid #3498db',
  cursor: 'pointer',
};

const tagStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  backgroundColor: '#e74c3c',
  color: 'white',
  padding: '5px 12px',
  borderRadius: '50px',
  fontSize: '0.75rem',
  fontWeight: '600',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  zIndex: '1'
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  try {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return new Date(dateString).toLocaleDateString('mr-IN', options);
  } catch (e) {
    console.error("Error formatting date:", e);
    return new Date(dateString).toLocaleString();
  }
}

const NewsCard = ({ news }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isExternalLink, setIsExternalLink] = useState(false);

  if (!news || !news._id) {
    return null;
  }

  const toggleDescription = (e) => {
    if (isExternalLink) {
      // If it's an external link, let the default anchor behavior happen
      return;
    }
    e.preventDefault();
    setShowFullDescription(!showFullDescription);
  };

  const handleLinkClick = (e) => {
    if (!news.url) {
      e.preventDefault();
    } else {
      setIsExternalLink(true);
    }
  };

  const getDescription = () => {
    if (!news.description) return 'वर्णन उपलब्ध नाही';
    
    if (showFullDescription) {
      return news.description;
    }
    
    // Show first 150 characters followed by '...' if description is longer
    return news.description.length > 150 
      ? `${news.description.substring(0, 150)}...` 
      : news.description;
  };

  return (
    <div
      style={cardStyle}
      aria-labelledby={`news-title-${news._id}`}
      className="news-card"
    >
      {news.category && (
        <div style={tagStyle} className="news-card-tag">
          {news.category}
        </div>
      )}

      <div style={imgContainerStyle} className="news-card-image-container">
        <img
          src={news.imageUrl || 'https://via.placeholder.com/600x400?text=News+Image'}
          alt={news.title || 'बातमीची प्रतिमा'}
          style={imgStyle}
          className="news-card-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
          }}
        />
      </div>

      <div style={contentStyle} className="news-card-content">
        <h3 id={`news-title-${news._id}`} style={titleStyle} className="news-card-title">
          {news.title || 'शीर्षक उपलब्ध नाही'}
        </h3>

        <p 
          style={{
            ...descriptionStyle,
            WebkitLineClamp: showFullDescription ? 'unset' : '3',
            display: showFullDescription ? 'block' : '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }} 
          className="news-card-description"
        >
          {getDescription()}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="news-card-footer">
          {news.createdAt && (
            <div style={dateStyle} className="news-card-date">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {formatDate(news.createdAt)}
            </div>
          )}

          {news.url ? (
            <a 
              href={news.url} 
              style={readMoreStyle} 
              className="read-more-btn" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Read more about ${news.title}`}
              onClick={(e) => {
                handleLinkClick(e);
                if (!isExternalLink) {
                  toggleDescription(e);
                }
              }}
            >
              {showFullDescription ? 'कमी वाचा' : 'अधिक वाचा'}
            </a>
          ) : (
            <button
              style={{
                ...readMoreStyle, 
                backgroundColor: '#bdc3c7', 
                border: '2px solid #bdc3c7',
              }}
              onClick={toggleDescription}
            >
              {showFullDescription ? 'कमी वाचा' : 'अधिक वाचा'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;