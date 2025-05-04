import { motion } from "framer-motion";
import { FaComputer, FaDatabase, FaPrint, FaWifi } from "react-icons/fa6";
import { MdDesignServices, MdEmail, MdCloud } from "react-icons/md";
import { FaFileAlt, FaChartLine, FaShieldAlt } from "react-icons/fa"; // Correct import path

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const coreServices = [
    {
        title: "कॉम्प्युटर ॲक्सेस",
        icon: <FaComputer className="text-4xl" />,
        description: "हाय-स्पीड इंटरनेटसह प्रीमियम कॉन्फिगरेशन कॉम्प्युटर्स",
        features: [
          "वेब ब्राउझिंग, ईमेल, रिसर्च",
          "MS Office (Word, Excel, PowerPoint)",
          "PDF रीडर/एडिटर",
          "प्रिंट/स्कॅन/फोटोकॉपी सुविधा",
          "ऑनलाइन परीक्षा व टेस्ट सोल्व्हिंग",
          "फॉर्म भरणे व सबमिशन (सरकारी/खाजगी)",
          "WhatsApp Web व इतर मेसेजिंग अ‍ॅप्स अ‍ॅक्सेस",
          "ऑनलाइन ट्रेनिंग/वेबिनारसाठी सपोर्ट",
          "वीडिओ कॉलिंग/झूम मीटिंग्ज",
          "मल्टीमीडिया/व्हिडिओ/फोटो एडिटिंग बेसिक सॉफ्टवेअर",
          "डाटा ट्रान्सफर व बॅकअप सुविधा"
        ]
      },      
    {
        title: "डॉक्युमेंट सेवा",
        icon: <FaFileAlt className="text-4xl" />,
        description: "सर्व प्रकारच्या दस्तऐवज तयारी आणि प्रक्रिया",
        features: [
          "रिझ्युमे / सीव्ही तयारी",
          "अर्ज / फॉर्म भरणे",
          "प्रोजेक्ट रिपोर्ट फॉरमॅटिंग",
          "थीसिस / डिसर्टेशन एडिटिंग",
          "आधार कार्ड अपडेट व प्रिंट",
          "पॅन कार्ड अर्ज व प्रिंट",
          "जन्मदिनांक (DOB) अर्ज भरणे",
          "वृद्धापकाळ निवृत्ती योजना फॉर्म",
          "शिक्षण संबंधित प्रमाणपत्रे स्कॅन / प्रिंट",
          "दाखले व नोंदणीसाठी ऑनलाइन अर्ज (उदा. उत्पन्न, जात, रहिवाशी)",
          "बँक खाते उघडणे फॉर्म",
          "पासपोर्ट अर्ज भरून देणे",
          "सरकारी योजना अर्ज (शेतकरी योजना, श्रमिक कार्ड, पीएम किसान, उज्वला योजना इ.)",
          "फोटोकॉपी व प्रिंटिंग सेवा (B/W व कलर)",
          "डिजिटल सिग्नेचर अर्ज / वापर",
          "ईमेल तयार करणे व मेल पाठविणे",
          "ऑनलाइन परीक्षा फॉर्म भरणे",
          "शिक्षण संस्थांचे ऑनलाइन अ‍ॅडमिशन फॉर्म",
          "रेल्वे / बस / विमान तिकीट बुकिंग मदत",
          "PDF फाइल एडिटिंग व कन्वर्जन"
        ]
      },      
      {
        title: "प्रिंटिंग सेवा",
        icon: <FaPrint className="text-4xl" />,
        description: "उच्च दर्जाच्या प्रिंटिंग सोल्यूशन्स",
        features: [
          "रंगीत आणि ब्लॅक-व्हाइट प्रिंट",
          "लेझर प्रिंटिंग (A4, A3)",
          "फोटो प्रिंटिंग (ग्लॉसी/मॅट)",
          "लॅमिनेशन आणि बाइंडिंग",
          "ID कार्ड प्रिंटिंग",
          "व्हिजीटींग कार्ड डिझाइन आणि प्रिंट",
          "बॅनर/फ्लेक्स प्रिंटिंग (ऑर्डर वरून)",
          "अर्ज / दस्तऐवज प्रिंटिंग",
          "शाळा / कॉलेज प्रोजेक्ट प्रिंटिंग",
          "PDF / DOC फायलींमधून प्रिंटिंग",
          "बुकलेट/पुस्तिका प्रिंटिंग",
          "टिपणवही / नोट्स प्रिंटिंग",
          "पेपर सेटिंग व फॉर्मॅटिंगसह प्रिंटिंग",
          "ईमेल / WhatsApp मधून आलेल्या फाइल्सची प्रिंटिंग",
          "USB / मोबाईल / कार्ड मधून प्रिंटिंग"
        ]
      }      
  ];

  const techServices = [
    {
      title: "इंटरनेट सेवा",
      icon: <FaWifi className="text-3xl" />,
      description: "हाय-स्पीड वायरलेस इंटरनेट अॅक्सेस"
    },
    {
      title: "ईमेल सेवा",
      icon: <MdEmail className="text-3xl" />,
      description: "ईमेल अकाउंट सेटअप आणि ट्रबलशूटिंग"
    },
    {
      title: "डेटा ट्रान्सफर",
      icon: <FaDatabase className="text-3xl" />,
      description: "USB/HDD/मोबाईलमध्ये डेटा ट्रान्सफर"
    },
    {
      title: "बँकिंग सेवा",
      icon: <MdDesignServices className="text-3xl" />,
      description: "बँक खाती उघडणे, कर्ज सल्ला आणि व्यवहार सहाय्य"
    }
  ];

  const premiumServices = [
    {
      title: "सायबर सुरक्षा",
      icon: <FaShieldAlt className="text-3xl" />, // Now correctly imported
      description: "व्हायरस स्कॅन आणि मालवेअर रिमूव्हल"
    },
    {
      title: "क्लाउड स्टोरेज",
      icon: <MdCloud className="text-3xl" />,
      description: "Google Drive/Dropbox सेटअप आणि सपोर्ट"
    },
    {
      title: "डिझायनिंग",
      icon: <MdDesignServices className="text-3xl" />,
      description: "साधे पोस्टर/बॅनर/कार्ड डिझाइन"
    },
    {
      title: "डेटा रिकव्हरी",
      icon: <FaDatabase className="text-3xl" />,
      description: "कॉम्प्युटर/मोबाईलमधून डेटा रिकव्हरी"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-28 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[url('https://svgur.com/i/15eK.svg')] bg-cover"
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="border-b-4 border-amber-400 pb-2">सायबर कॅफे सेवा</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">
            व्यावसायिक कॉम्प्युटर आणि इंटरनेट सेवा - सुरक्षित, वेगवान आणि विश्वासार्ह
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            <span className="border-b-4 border-amber-400 pb-2">मुख्य सेवा</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            सर्वसामान्य ग्राहकांसाठी आमच्या मूलभूत सेवा
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="text-amber-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              <span className="border-b-4 border-amber-400 pb-2">तांत्रिक सेवा</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              विशेष तांत्रिक सहाय्य आणि समस्या निराकरण
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {techServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <div className="text-amber-500 mb-4 mx-auto flex justify-center">
                  {service.icon}
                </div>
                <h3 className="font-bold text-indigo-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
     
      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              <span className="border-b-4 border-amber-400 pb-2">किंमत यादी</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              सर्व सेवांसाठी पारदर्शक आणि स्पर्धात्मक दर
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {[
                {
                  title: "मूलभूत सेवा",
                  items: [
                  
                    { name: "इंटरनेट वापर", price: "₹25/तास" },
                    { name: "ब्लॅक & व्हाइट प्रिंट", price: "₹5/पान" },
                    { name: "रंगीत प्रिंट", price: "₹15/पान" }
                  ]
                },
                {
                  title: "दस्तऐवज सेवा",
                  items: [
                    { name: "टायपिंग (प्रति पान)", price: "₹30" },
                    { name: "स्कॅनिंग", price: "₹10/पान" },
                    { name: "फोटोकॉपी", price: "₹2/पान" },
                    { name: "लेझर प्रिंटिंग", price: "₹8/पान" }
                  ]
                },
                {
                  title: "विशेष सेवा",
                  items: [
                    { name: "डेटा रिकव्हरी", price: "₹500 पासून" },
                    { name: "व्हायरस रिमूव्हल", price: "₹200" },
                    { name: "सॉफ्टवेअर इंस्टॉलेशन", price: "₹150" },
                    { name: "ईमेल सेटअप", price: "₹100" }
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 1 ? 0 : (index === 0 ? -50 : 50) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <h3 className="font-bold text-lg text-indigo-800 mb-4 border-b border-amber-400 pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-bold text-amber-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Services;