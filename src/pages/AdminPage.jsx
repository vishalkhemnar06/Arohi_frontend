// client/src/pages/AdminPage.jsx

import React, { useState, useEffect, useCallback } from 'react';
// Ensure path is correct
import { getAllNews, addNewsItem, updateNewsItem, deleteNewsItem } from '../services/api';

// --- Modern Styling ---
const pageStyle = {
  // Keep existing horizontal/bottom padding defined in shorthand below
  // padding: '30px', // Original value
  padding: '0 30px 30px 30px', // Adjusted to exclude top padding from shorthand
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  maxWidth: '1200px',
  margin: '0 auto',
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  // *** FIX: Add top padding to push content below the fixed navbar ***
  // *** Adjust '80px' to match your actual navbar height + desired spacing ***
  paddingTop: '80px',
};

// --- ALL OTHER STYLES (headerStyle, formStyle, inputStyle, etc.) REMAIN EXACTLY AS YOU PROVIDED ---
const headerStyle = {
  color: '#2c3e50',
  marginBottom: '30px',
  paddingBottom: '15px',
  borderBottom: '3px solid #3498db',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
};

const formStyle = {
  background: 'white',
  padding: '30px',
  marginBottom: '40px',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  border: '1px solid #e0e0e0'
};

const sectionHeaderStyle = {
  color: '#2c3e50',
  margin: '30px 0 20px',
  paddingBottom: '10px',
  borderBottom: '2px solid #eee',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  marginBottom: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'border 0.3s, box-shadow 0.3s',
  // ':focus': { // Note: Pseudo-classes require CSS-in-JS libs or CSS files
  //   borderColor: '#3498db',
  //   boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
  //   outline: 'none'
  // }
};

const textareaStyle = {
  ...inputStyle,
  height: '150px',
  resize: 'vertical',
  lineHeight: '1.6'
};

const fileInputStyle = {
  ...inputStyle,
  padding: '10px',
  cursor: 'pointer'
};

const buttonBaseStyle = {
  padding: '12px 25px',
  marginRight: '15px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px'
};

const primaryButtonStyle = {
  ...buttonBaseStyle,
  background: 'linear-gradient(135deg, #3498db, #2980b9)',
  color: 'white',
  // ':hover': { ... } // Use CSS classes for hover
};

const dangerButtonStyle = {
  ...buttonBaseStyle,
  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
  color: 'white',
   // ':hover': { ... } // Use CSS classes for hover
};

const secondaryButtonStyle = {
  ...buttonBaseStyle,
  background: 'linear-gradient(135deg, #95a5a6, #7f8c8d)',
  color: 'white',
  // ':hover': { ... } // Use CSS classes for hover
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  background: 'white',
  marginBottom: '15px',
  borderRadius: '10px',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s, box-shadow 0.3s',
   // ':hover': { ... } // Use CSS classes for hover
};

const listContentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  flex: '1',
  minWidth: '0'
};

const listImageStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  borderRadius: '8px',
  border: '1px solid #eee',
  flexShrink: '0'
};

const listTextStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#2c3e50',
  fontWeight: '500'
};

const messageStyle = {
  padding: '15px 20px',
  marginBottom: '25px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
};

const errorStyle = {
  ...messageStyle,
  color: '#c0392b',
  backgroundColor: '#fdecea',
  borderLeft: '4px solid #e74c3c'
};

const successStyle = {
  ...messageStyle,
  color: '#27ae60',
  backgroundColor: '#e8f8ef',
  borderLeft: '4px solid #2ecc71'
};

const loadingStyle = {
  textAlign: 'center',
  padding: '40px 20px',
  fontSize: '1.2rem',
  color: '#7f8c8d'
};

const previewImageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
  marginTop: '15px',
  borderRadius: '8px',
  objectFit: 'contain',
  border: '1px solid #ddd',
  padding: '5px',
  backgroundColor: 'white'
};

const imagePreviewContainerStyle = {
  marginTop: '20px',
  padding: '20px',
  border: '2px dashed #ddd',
  borderRadius: '10px',
  background: '#f8fafc',
  textAlign: 'center'
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '10px',
  flexShrink: '0'
};

const emptyStateStyle = {
  textAlign: 'center',
  padding: '40px 20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.05)',
  color: '#7f8c8d'
};
// --- End Styling ---


const AdminPage = () => {
  // --- State and Logic (Kept exactly as you provided) ---
  const [newsList, setNewsList] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState('');

  const fetchNewsAdmin = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getAllNews();
      if (Array.isArray(data)) {
        setNewsList(data);
      } else {
        console.warn("API response for news list was not an array:", data);
        setNewsList([]);
        setError("बातम्यांची सूची लोड करण्यात अयशस्वी.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError('बातम्या लोड करण्यात अयशस्वी झाले.');
      setNewsList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNewsAdmin();
  }, [fetchNewsAdmin]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError('');
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
          setError('इमेज फाईल 5MB पेक्षा लहान असावी.');
          setSelectedFile(null);
          setImagePreview(null);
          e.target.value = null;
          return;
      }
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setExistingImageUrl('');
    } else if (file) {
      setError('कृपया फक्त इमेज फाईल्स (jpg, png, gif) निवडा.');
      setSelectedFile(null);
      setImagePreview(null);
      e.target.value = null;
    } else {
        setSelectedFile(null);
        setImagePreview(null);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const clearForm = useCallback(() => {
    setFormData({ title: '', description: '' });
    setSelectedFile(null);
    setImagePreview(null);
    setEditingId(null);
    setExistingImageUrl('');
    setError('');
    setSuccess('');
    const fileInput = document.getElementById('imageFile');
    if(fileInput) fileInput.value = null;
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('कृपया शीर्षक आणि वर्णन भरा.');
      return;
    }

    if (!editingId && !selectedFile) {
        setError('कृपया नवीन बातमीसाठी एक इमेज निवडा.');
        return;
    }
     if (editingId && !selectedFile && !existingImageUrl) {
        setError('कृपया संपादित करण्यासाठी एक इमेज निवडा किंवा विद्यमान ठेवा.');
        return;
    }

    setFormLoading(true);

    const submissionData = new FormData();
    submissionData.append('title', formData.title);
    submissionData.append('description', formData.description);

    if (selectedFile) {
      submissionData.append('imageFile', selectedFile);
    }

    try {
      if (editingId) {
        await updateNewsItem(editingId, submissionData);
        setSuccess('बातमी यशस्वीरित्या अद्यतनित केली.');
      } else {
        await addNewsItem(submissionData);
        setSuccess('नवीन बातमी यशस्वीरित्या जोडली.');
      }
      clearForm();
      fetchNewsAdmin();
    } catch (err) {
      console.error("Error submitting form:", err.response || err);
      const errorMsg = err.response?.data?.message || err.message || 'ऑपरेशन अयशस्वी झाले.';
      setError(errorMsg);
    } finally {
      setFormLoading(false);
      setTimeout(() => { setSuccess(''); setError(''); }, 5000);
    }
  };

  const handleEdit = (newsItem) => {
    setEditingId(newsItem._id);
    setFormData({
      title: newsItem.title,
      description: newsItem.description,
    });
    setSelectedFile(null);
    setImagePreview(null);
    setExistingImageUrl(newsItem.imageUrl);
    setError('');
    setSuccess('');
    const fileInput = document.getElementById('imageFile');
    if(fileInput) fileInput.value = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('तुम्हाला खात्री आहे की तुम्ही ही बातमी काढून टाकू इच्छिता?')) {
      setError(''); setSuccess('');
      try {
        await deleteNewsItem(id);
        setSuccess('बातमी यशस्वीरित्या काढून टाकली.');
        fetchNewsAdmin();
        if (id === editingId) { clearForm(); }
      } catch (err) {
        console.error("Error deleting news:", err);
        setError(err.response?.data?.message || 'बातमी काढून टाकण्यात अयशस्वी.');
      } finally {
         setTimeout(() => { setSuccess(''); setError(''); }, 4000);
      }
    }
  };
  // --- End State and Logic ---


  // --- Render Logic (kept exactly as you provided, but pageStyle applied to outer div now has paddingTop) ---
  return (
    <div style={pageStyle}> {/* This div now has paddingTop */}
      <h1 style={headerStyle}>
        <span style={{
          background: '#3498db', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
        }}>🛡️</span>
        प्रशासक पृष्ठ (Admin Panel)
      </h1>

      {error && (
        <div style={errorStyle}>
          {/* Error Icon SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          {error}
        </div>
      )}
      {success && (
        <div style={successStyle}>
          {/* Success Icon SVG */}
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          {success}
        </div>
      )}

      {/* Form Section */}
      <form onSubmit={handleFormSubmit} style={formStyle} encType="multipart/form-data">
        <h2 style={sectionHeaderStyle}>
          <span style={{ background: editingId ? '#f39c12' : '#2ecc71', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
            {editingId ? '✏️' : '➕'}
          </span>
          {editingId ? 'बातमी संपादित करा (Edit News)' : 'नवीन बातमी जोडा (Add New News)'}
        </h2>

        {/* Title Input */}
        <div>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>शीर्षक (Title):</label>
          <input type="text" id="title" name="title" style={inputStyle} value={formData.title} onChange={handleInputChange} required placeholder="बातमीचे शीर्षक लिहा"/>
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>वर्णन (Description):</label>
          <textarea id="description" name="description" style={textareaStyle} value={formData.description} onChange={handleInputChange} required placeholder="बातमीचे संपूर्ण वर्णन लिहा"/>
        </div>

        {/* File Input */}
        <div>
          <label htmlFor="imageFile" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>प्रतिमा निवडा (Select Image):</label>
          <input type="file" id="imageFile" name="imageFile" style={fileInputStyle} accept="image/png, image/jpeg, image/gif" onChange={handleFileChange}/>
          <small style={{ display: 'block', marginTop: '5px', color: '#7f8c8d' }}>फक्त .jpg, .png, .gif फाईल्स (कमाल 5MB).</small>

          {/* Image Preview Section */}
          {(imagePreview || existingImageUrl) && (
            <div style={imagePreviewContainerStyle}>
              {imagePreview ? (
                <>
                  <p style={{ marginBottom: '10px', fontWeight: '600', color: '#3498db' }}>नवीन प्रतिमा पूर्वावलोकन:</p>
                  <img src={imagePreview} alt="Selected Preview" style={previewImageStyle} />
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '10px', fontWeight: '600', color: '#3498db' }}>सध्याची प्रतिमा:</p>
                  <img src={existingImageUrl} alt="Current" style={previewImageStyle} />
                  <p style={{ marginTop: '10px', color: '#7f8c8d', fontSize: '0.9em' }}>नवीन प्रतिमा निवडल्याशिवाय ही प्रतिमा राहील</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Form Buttons */}
        <div style={{ marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}> {/* Added flexWrap */}
          <button type="submit" style={primaryButtonStyle} disabled={formLoading}>
             {/* SVG logic for loading/edit/add icons */}
             {formLoading ? ( <> {/* Loading Icon */} <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{animation: 'spin 1s linear infinite'}}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg> प्रक्रिया चालू आहे...</> )
             : editingId ? ( <> {/* Edit Icon */} <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> अद्यतनित करा</> )
             : ( <> {/* Save Icon */} <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> जतन करा</> )
            }
          </button>
          {editingId && (
            <button type="button" style={secondaryButtonStyle} onClick={clearForm} disabled={formLoading}>
              {/* Cancel Icon SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              रद्द करा
            </button>
          )}
        </div>
      </form>

       {/* Manage News Section Header */}
      <h2 style={sectionHeaderStyle}>
        <span style={{ background: '#9b59b6', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📰</span>
        बातम्या व्यवस्थापित करा (Manage News)
      </h2>

      {/* Loading Indicator for List */}
      {loading && (
        <div style={loadingStyle}>
           {/* Loading Icon SVG */}
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" style={{animation: 'spin 1s linear infinite'}}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
          <p>बातम्या लोड होत आहेत...</p>
        </div>
      )}

      {/* News List */}
      {!loading && newsList.length > 0 && (
        <div>
          {newsList.map((item) => (
            <div key={item._id} style={listItemStyle}>
              <div style={listContentStyle}>
                <img src={item.imageUrl} alt={item.title.substring(0, 20)} style={listImageStyle} onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=No+Image'; }}/>
                <span style={listTextStyle} title={item.title}><strong>{item.title}</strong></span>
              </div>
              <div style={buttonGroupStyle}>
                 {/* Edit Button */}
                <button style={secondaryButtonStyle} onClick={() => handleEdit(item)} title="संपादन करा">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  संपादन
                </button>
                 {/* Delete Button */}
                <button style={dangerButtonStyle} onClick={() => handleDelete(item._id)} title="काढून टाका">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  काढून टाका
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State for News List */}
      {!loading && newsList.length === 0 && !error && (
        <div style={emptyStateStyle}>
           {/* Empty Icon SVG */}
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#7f8c8d" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <h3>कोणतीही बातमी आढळली नाही</h3>
          <p>कृपया वरील फॉर्म वापरून नवीन बातमी जोडा</p>
        </div>
      )}
    </div>
    // --- End Render Logic ---
  );
};

export default AdminPage;