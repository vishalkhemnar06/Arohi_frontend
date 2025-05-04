import { motion } from "framer-motion";
import { FaLaptop, FaFileAlt, FaUserTie, FaHeadset, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { MdPayment, MdImportantDevices } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    { icon: <FaLaptop className="text-4xl" />, title: "कॉम्प्युटर सेवा", description: "हार्डवेअर, सॉफ्टवेअर, नेटवर्किंग आणि इंटरनेट समस्या निराकरण" },
    { icon: <FaFileAlt className="text-4xl" />, title: "सरकारी सेवा", description: "आधार कार्ड, पॅन कार्ड, पासपोर्ट, राशन कार्ड अर्ज प्रक्रिया" },
    { icon: <MdPayment className="text-4xl" />, title: "मोबाईल रिचार्ज", description: "सर्व प्रकारचे मोबाईल रिचार्ज, DTH रिचार्ज आणि बिल भरणे" },
    { icon: <FaUserTie className="text-4xl" />, title: "प्रशिक्षण", description: "कॉम्प्युटर मूलभूत, Tally, GST, डिझाईनिंग कोर्सेस" },
    { icon: <FaHeadset className="text-4xl" />, title: "तांत्रिक सहाय्य", description: "24/7 तांत्रिक सहाय्य आणि रिमोट सपोर्ट सेवा" },
    { icon: <FaChartLine className="text-4xl" />, title: "डिजिटल मार्केटिंग", description: "वेबसाइट डिझाइन, SEO, सोशल मीडिया व्यवस्थापन" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-center py-28 px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://svgur.com/i/15eK.svg')] bg-cover opacity-10"
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
            आरोही कॉम्प्युटर्स
            </span>
            <br />
            <span className="text-white">अँड मल्टी सर्व्हिसेस</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            तुमच्या डिजिटल आणि सरकारी सेवांच्या सर्व गरजांसाठी एक विश्वासार्ह आणि व्यावसायिक सेवा केंद्र
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
          

<Link to="/Services">
  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
    सेवा पहा
  </button>
</Link>
<Link to="/Contact">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
              संपर्क करा
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              <span className="border-b-4 border-amber-400 pb-2">आमच्याबद्दल</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              4+ वर्षांच्या अनुभवासह, आरोही कॉम्प्युटर्सने हजारो ग्राहकांच्या डिजिटल गरजा पूर्ण केल्या आहेत. आम्ही सर्व प्रकारच्या तांत्रिक समस्यांचे व्यावसायिक निराकरण करतो.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-indigo-100 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">आमचे मिशन</h3>
                <p className="text-gray-700 mb-6">
                  तंत्रज्ञानाचा वापर करून समाजाच्या प्रत्येक घटकापर्यंत पोहोचणे आणि सर्वांना सहज डिजिटल सेवा उपलब्ध करून देणे.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MdImportantDevices className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>अत्याधुनिक तंत्रज्ञान</span>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>सुरक्षित आणि विश्वासार्ह सेवा</span>
                  </li>
                  <li className="flex items-start">
                    <FaUserTie className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>तज्ञ आणि अनुभवी स्टाफ</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl opacity-30 blur-md"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1].map((item) => (
              <div className="flex justify-center">
              <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl font-bold text-indigo-600 mb-2 text-center">{item * 500}+</div>
                <div className="text-gray-600 text-center">समाधानी ग्राहक</div>
              </div>
            </div>
            
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              <span className="border-b-4 border-amber-400 pb-2">आमच्या सेवा</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              आम्ही तुमच्या सर्व डिजिटल आणि तांत्रिक गरजांसाठी संपूर्ण समाधान ऑफर करतो.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="text-amber-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 pb-4">
                  <Link to="/services">
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                    अधिक माहिती
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
   

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            आपल्या डिजिटल गरजांसाठी आमच्याशी संपर्क साधा
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto"
          >
            आमच्या तज्ञ टीमच्या मदतीने आपल्या सर्व तांत्रिक समस्यांचे निराकरण करा.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-amber-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
              आता कॉल करा: +91 9561562080
            </button> 
            <a
  href="mailto:arohicomputers1@gmail.com?subject=Feedback&body=नमस्कार, मला तुमच्याशी संपर्क साधायचा आहे."
  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
>
  ईमेल पाठवा
</a>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;