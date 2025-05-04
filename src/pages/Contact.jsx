import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // --- <<< YOUR GOOGLE APPS SCRIPT WEB APP URL IS NOW SET HERE >>> ---
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0itOIgupGrrr9jay-5C5BjCdxgxzLrIqNPO6LKXWcH69rK4ZCxArTDbFrlAmVPIAJ8g/exec';
  // ------------------------------------------------------------------

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string } | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear previous submission status on new input
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic check just in case the URL was accidentally cleared, though it's hardcoded now.
    if (!GOOGLE_SCRIPT_URL) {
        console.error("Configuration critical error: Google Script URL is missing.");
        alert("A configuration error occurred. Please contact support.");
        return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // mode: 'no-cors', // Usually not needed if GAS doPost returns JSON correctly with ContentService
        headers: {
          // Sending as plain text initially, letting GAS parse it.
          // If GAS expects JSON explicitly, use 'application/json'.
          // Let's try without Content-Type first, GAS often handles it.
          // If issues, uncomment below:
          // 'Content-Type': 'application/json',
        },
         // Sending data as FormData might be more robust for GAS,
         // especially if avoiding 'application/json' header issues.
         // Let's try sending as JSON string first as it matches the GAS doPost.
        body: JSON.stringify(formData) // Send form data as a JSON string
      });

      // Check if the fetch itself was successful (network level)
      if (!response.ok) {
          // Attempt to get more specific error from response body if possible
          let errorBody = 'Could not read error response.';
          try {
              errorBody = await response.text(); // Use text() as it might not be JSON
          } catch (parseError) {
              console.error("Could not parse error response body:", parseError);
          }
          throw new Error(`Network response was not ok. Status: ${response.status}. Body: ${errorBody}`);
      }

      // Try parsing the response JSON from Google Apps Script
      const result = await response.json();

      if (result.result === 'success') {
        // --- SUCCESS ---
        setSubmitStatus({ type: 'success', message: 'धन्यवाद! आपला संदेश यशस्वीरित्या पाठवला गेला आहे.' });
        alert('धन्यवाद! आपला संदेश प्राप्त झाला आहे. आम्ही लवकरच आपल्याशी संपर्क साधू.'); // Keep original alert

        // --- Reset form ---
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

      } else {
        // --- ERROR reported by Google Apps Script ---
        console.error("Submission failed (script error):", result);
        setSubmitStatus({ type: 'error', message: `त्रुटी: संदेश पाठवण्यात अयशस्वी. (${result?.message || 'Unknown script error'})` });
        alert(`त्रुटी: संदेश पाठवण्यात अयशस्वी. ${result?.message ? `(${result.message})` : '(Script reported an error)'}`);
      }

    } catch (error) {
      // --- NETWORK OR OTHER FETCH/PARSING ERROR ---
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: 'error', message: `त्रुटी: नेटवर्क समस्या किंवा स्क्रिप्ट एंडपॉइंटमध्ये समस्या. (${error.message})` });
      alert(`त्रुटी: संदेश पाठवण्यास असमर्थ. कृपया आपले इंटरनेट कनेक्शन तपासा किंवा नंतर पुन्हा प्रयत्न करा. (${error.message})`);
    } finally {
      setIsSubmitting(false); // Reset loading state regardless of outcome
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="border-b-4 border-amber-400 pb-2">आमच्याशी संपर्क साधा</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100">
            तुमच्या प्रश्नांसाठी, सूचनांसाठी किंवा सेवा विनंत्यांसाठी
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">
              <span className="border-b-4 border-amber-400 pb-2">संपर्क फॉर्म</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Inputs */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">नाव <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">ईमेल <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">मोबाईल नंबर</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[+0-9\s-]{10,}"
                  title="कृपया वैध मोबाईल नंबर टाका (उदा. +91 1234567890 किंवा 9876543210)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">संदेश <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={isSubmitting}
                ></textarea>
              </div>

               {/* Optional: Display submission status message */}
              {submitStatus && (
                <div className={`p-3 rounded-lg text-center ${
                  submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'पाठवत आहे...' : 'संदेश पाठवा'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                <span className="border-b-4 border-amber-400 pb-2">संपर्क माहिती</span>
              </h2>
              <div className="space-y-6">
                 <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4 shrink-0">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">पत्ता</h3>
                    <p className="text-gray-600">
                    आरोही कॉम्प्युटर्स अँड मल्टी सर्व्हिसेस, मांडवे बुद्रुक, तालुका- संगमनेर, 422622
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4 shrink-0">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">फोन नंबर</h3>
                    <p className="text-gray-600">+91 9561562080</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4 shrink-0">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">ईमेल</h3>
                    <p className="text-gray-600">arohicomputers1@gmail.com</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4 shrink-0">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">कार्यरत तास</h3>
                    <p className="text-gray-600">
                      सोमवार ते शनिवार: सकाळी ९:०० ते रात्री ९:००<br />
                      रविवार: सकाळी १०:०० ते संध्याकाळी ६:००
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.4623954164731!2d74.3346699164384!3d19.339691453133007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdce76660576fc5%3A0xc01bb1b3a5682515!2sArohi%20Computers%20And%20Multiservices!5e0!3m2!1sen!2sin!4v1744560782011!5m2!1sen!2sin" // Your map embed code
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;