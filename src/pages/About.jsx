import { motion } from "framer-motion";
import { FaUsers, FaAward, FaHandsHelping, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import { MdOutlineComputer, MdGppGood } from "react-icons/md";
import { Link } from 'react-router-dom';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: "4+", label: "वर्षांचा अनुभव", icon: <FaAward className="text-4xl" /> },
    { value: "1000+", label: "समाधानी ग्राहक", icon: <FaUsers className="text-4xl" /> },
    { value: "100%", label: "गुणवत्ता", icon: <MdGppGood className="text-4xl" /> }
  ];

  const features = [
    {
      icon: <MdOutlineComputer className="text-3xl" />,
      title: "आधुनिक तंत्रज्ञान",
      description: "सर्वात नवीन तांत्रिक उपकरणे आणि सॉफ्टवेअर वापरून सेवा"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "व्यावसायिक दृष्टीकोन",
      description: "ग्राहकांच्या गरजा लक्षात घेऊन व्यावसायिक सेवा"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "नाविन्यपूर्ण उपाय",
      description: "समस्यांचे नाविन्यपूर्ण आणि कार्यक्षम निराकरण"
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
            <span className="border-b-4 border-amber-400 pb-2">आरोही कॉम्प्युटर्स</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">
            २०२१ पासून विश्वासार्ह आणि व्यावसायिक सेवा देणारे अग्रगण्य केंद्र
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-500 mb-4 mx-auto flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-indigo-900 mb-2">{stat.value}</div>
              <div className="text-lg text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Arohi Computers Team"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl opacity-30 blur-md"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              <span className="border-b-4 border-amber-400 pb-2">आमची कहाणी</span>
            </h2>
            <p className="text-gray-700 mb-6">
              २०२१ मध्ये स्थापन झालेल्या आरोही कॉम्प्युटर्सने गेल्या ४ वर्षांत हजारो ग्राहकांच्या डिजिटल गरजा पूर्ण केल्या आहेत. छोट्या सुरुवातीपासून ते आजच्या अग्रगण्य सेवा केंद्रापर्यंतचा आमचा प्रवास संघर्ष, समर्पण आणि ग्राहकांच्या विश्वासामुळे शक्य झाला.
            </p>
            <p className="text-gray-700 mb-6">
              आमचे मुख्य उद्दिष्ट तंत्रज्ञानाचा वापर करून समाजाच्या प्रत्येक घटकापर्यंत पोहोचणे आणि सर्वांना सहज डिजिटल सेवा उपलब्ध करून देणे हे आहे. ग्रामीण भागातील लोकांसाठी सुद्धा गुणवत्तापूर्ण तांत्रिक सेवा पुरवणे हे आमचे ध्येय आहे.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/80 p-4 rounded-lg border border-gray-200">
                  <div className="text-amber-500 mb-2">{feature.icon}</div>
                  <h3 className="font-bold text-indigo-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              <span className="border-b-4 border-amber-400 pb-2">संस्थापक</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              आरोही कॉम्प्युटर्सच्या मागील प्रेरणादायी व्यक्तिमत्वाची ओळख करून घ्या
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
              <img 
                src="Founder.jpg" 
                alt="Founder of Arohi Computers"
                className="rounded-full shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-2xl opacity-30 blur-md"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <FaQuoteLeft className="text-amber-400 text-4xl opacity-20 absolute top-4 left-4" />
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">अजित धुळगंड</h3>
                <p className="text-gray-700 mb-6">
                  "माझा विश्वास आहे की तंत्रज्ञान हे समाज बदलण्याचे सर्वात शक्तिशाली साधन आहे. आरोही कॉम्प्युटर्सची स्थापना करताना माझे ध्येय होते की ग्रामीण भागातील लोकांनाही शहरी भागातील प्रमाणेच उच्च दर्जाच्या तांत्रिक सेवा उपलब्ध करून देणे."
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-indigo-800 mb-2">४+ वर्षांचा अनुभव</h4>
                  <p className="text-gray-600">
                    कॉम्प्युटर तंत्रज्ञान, नेटवर्किंग आणि सॉफ्टवेअर डेव्हलपमेंटमध्ये विपुल अनुभव. 
                    महाराष्ट्रातील अनेक शैक्षणिक संस्था आणि लहान व्यवसायांना तांत्रिक मार्गदर्शन.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            <span className="border-b-4 border-amber-400 pb-2">आमची मूल्ये</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            आमच्या प्रत्येक कृतीमागील तत्त्वे जी आम्हाला उत्कृष्टतेकडे नेत आहेत
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ग्राहक केंद्रित",
              description: "ग्राहकांच्या गरजा आणि समाधान हे आमच्या प्रत्येक निर्णयाचे केंद्रबिंदू आहे",
              color: "from-indigo-500 to-blue-500"
            },
            {
              title: "पारदर्शकता",
              description: "सर्व सेवा आणि किंमत पद्धतींमध्ये पूर्ण पारदर्शकता",
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "नैतिकता",
              description: "सर्व व्यवहार आणि सेवांमध्ये उच्च नैतिक मूल्यांचे पालन",
              color: "from-amber-500 to-orange-500"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${value.color} text-white rounded-xl p-8 shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            आमच्या सेवांबद्दल अधिक जाणून घ्यायचे आहे?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
          >
            आमच्या तज्ञ टीमशी संपर्क साधा आणि तुमच्या गरजांसाठी सर्वोत्तम समाधान मिळवा.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
              संपर्क करा
            </button>
            </Link>
            <Link to="/services">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              सेवा पहा
            </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;