import React from 'react';
import BuyerNavbar from '../components/BuyerNavbar';
import { Link } from 'react-router-dom';
import produceImage from '../images/homeimg.jpg';
import farmImage from '../images/homeimg1.jpg';
import { motion } from 'framer-motion';

const BuyerLandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1]">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#478451]/10 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#478451]/5 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
        />
      </div>

      <BuyerNavbar />

      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Source <span className="text-[#478451]">Fresh</span> Direct From Farms
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with local farmers and get the freshest produce delivered to your business
            </motion.p>
          </motion.div>

          {/* Image Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <img 
                src={produceImage} 
                alt="Fresh produce" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Quality Produce</h3>
                  <Link 
                    to="/available-production" 
                    className="text-white font-medium hover:underline flex items-center"
                  >
                    Browse selection <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <img 
                src={farmImage} 
                alt="Farm fresh" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Farm Direct</h3>
                  <Link 
                    to="/how-it-works" 
                    className="text-white font-medium hover:underline flex items-center"
                  >
                    How it works <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className='flex justify-center mt-15'>
            <button className='px-6 py-3 bg-[#478451] text-white font-bold rounded-md shadow-md hover:bg-[#386c3f] transition duration-300'>
              See More<span className="ml-2">→</span>
            </button>
          </div>
         
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section 
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Buy Through <span className="text-[#478451]">AgroPulse</span>?
            </motion.h2>
            <div className="w-20 h-1 bg-[#478451] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Verified Quality",
                description: "All products meet strict quality standards from trusted farms"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast Delivery",
                description: "Get fresh produce within 24-48 hours of harvest"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Fair Pricing",
                description: "Competitive prices with no middlemen markups"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#f8faf8] p-6 rounded-xl border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#478451]/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#478451] to-[#3a6d43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to revolutionize your supply chain?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of businesses sourcing directly from farms
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/buyersignup"
              className="bg-white text-[#478451] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
            >
              Purchase Crops 
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuyerLandingPage;