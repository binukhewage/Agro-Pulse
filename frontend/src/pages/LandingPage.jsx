import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import homeimage from '../images/homeimg.jpg';
import homeimage1 from '../images/homeimg1.jpg';
import aboutimage from '../images/about.jpg'
import { motion } from 'framer-motion';

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] pt-24 ">
      {/* Hero Section */}
      <section  className="min-h-screen relative">
        {/* Abstract organic shapes background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div 
            className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-[#478451]/5 blur-3xl"
            initial={{ x: -100, y: -100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
          />
          <motion.div 
            className="absolute -right-40 bottom-1/3 w-[32rem] h-[32rem] rounded-full bg-[#478451]/3 blur-3xl"
            initial={{ x: 100, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
          />
          
          {/* Floating leaf elements */}
          <motion.div 
            className="absolute left-1/4 top-1/4 opacity-10"
            initial={{ rotate: -45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0C60 0 75 30 60 60C45 90 60 120 60 120C60 120 45 90 60 60C75 30 60 0 60 0Z" fill="#478451"/>
            </svg>
          </motion.div>
          <motion.div 
            className="absolute right-1/4 bottom-1/4 opacity-10 rotate-12"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 12, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <svg width="150" height="150" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0C60 0 75 30 60 60C45 90 60 120 60 120C60 120 45 90 60 60C75 30 60 0 60 0Z" fill="#478451"/>
            </svg>
          </motion.div>
        </div>

        <Navbar />
        
        <motion.div 
          className="container mx-auto px-6 flex items-center justify-center h-[calc(100vh-5rem)] relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div id='home' className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <motion.div className="lg:w-1/2 space-y-8 relative" variants={itemVariants}>
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-[#478451]/10 rounded-full blur-xl"></div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                variants={slideInFromLeft}
              >
                <span className="text-[#478451]">Reimagining</span> Agriculture Through Technology
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-lg"
                variants={slideInFromLeft}
              >
                A digital ecosystem connecting farmers, buyers, and agricultural experts for sustainable growth
              </motion.p>
              <motion.div 
                className="flex gap-4"
                variants={slideInFromLeft}
              >
                <Link
                  to="/available-production"
                  className="bg-[#478451] hover:bg-[#3a6d43] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] group flex items-center shadow-lg hover:shadow-[#478451]/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </motion.div>
              
              {/* Stats bar */}
              <motion.div 
                className="flex flex-wrap gap-8 pt-8"
                variants={slideInFromLeft}
              >
                {[
                  { value: "100%", label: "Organic Focus" },
                  { value: "95%", label: "Success Rate" },
                  { value: "24/7", label: "Expert Support" },
                  
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="w-3 h-3 bg-[#478451] rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-bold text-2xl text-gray-800">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              variants={slideInFromRight}
            >
              <div className="relative">
                <motion.div 
                  className="relative h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-8 border-white hover:border-[#478451]/10 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={homeimage} 
                    alt="Modern agriculture" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                    <p className="text-white font-medium text-xl">Smart Farming Techniques</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-8 -right-8 h-64 w-64 rounded-2xl overflow-hidden shadow-xl border-8 border-white hover:border-[#478451]/10 transition-all duration-500"
                  whileHover={{ y: -5 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                    src={homeimage1} 
                    alt="Sustainable farming" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">Organic Crop Production</p>
                  </div>
                </motion.div>
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#478451]/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      

      {/* Services Section */}
      <motion.section 
        id='services'
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#478451]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#478451]/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Empowering <span className="text-[#478451]">Farmers</span> With Digital Tools
            </h2>
            <div className="w-24 h-1.5 bg-[#478451] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl">
              Services We Provide
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Production Tracker",
                description: "Monitor and optimize your farm's output with real-time analytics and AI-powered insights",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                bg: "bg-white"
              },
              {
                title: "Agricultural Officer Insights",
                description: "Direct access to certified officers for expert recommendations and compliance guidance",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                bg: "bg-white"
              },
              {
                title: "Smart Crop Recommender",
                description: "Personalized crop suggestions based on soil analysis, climate data, and market demand",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#478451">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                bg: "bg-white"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className={`${feature.bg} h-full flex flex-col p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-[#478451]/20 relative overflow-hidden group`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#478451]/5 group-hover:bg-[#478451]/10 transition duration-500 blur-lg"></div>
                <div className="mb-6 p-3 w-16 h-16 flex items-center justify-center rounded-xl bg-[#478451]/10 group-hover:bg-[#478451]/20 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                <Link 
                  to="/services" 
                  className="mt-auto text-[#478451] hover:text-[#3a6d43] font-medium text-sm flex items-center justify-start group-hover:underline"
                >
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id='about' className="py-24 bg-[#f8faf8] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute left-1/4 top-1/3 w-60 h-60 bg-[#478451] rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-[#478451] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="lg:w-1/2 relative"
              variants={slideInFromLeft}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl border-2 border-[#478451]/20 z-0"></div>
                <div className="relative rounded-2xl overflow-hidden z-10">
                  <img 
                    src={aboutimage} 
                    alt="aboutus logo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#478451]/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#478451]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">+85%</p>
                      <p className="text-sm text-gray-500">Productivity Increase</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              variants={slideInFromRight}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About <span className="text-[#478451]">Agro Pulse</span> 
              </h2>
              <div className="w-24 h-1.5 bg-[#478451] mb-8 rounded-full"></div>
              
              <p className='mb-4 leading-relaxed'>AgroPulse is a Smart Agriculture Management Platform designed to revolutionize the way farmers, agriculture officers and buyers connect. We leverage AI, real-time data and digital commerce to enhance productivity, improve market accessibility and support informed decision-making in Sri Lanka's agricultural sector.</p>
              <p className='mb-8 leading-relaxed'>Our team combines decades of agricultural expertise with cutting-edge technology to create a seamless marketplace for farm products.</p>
              <motion.div
                className="mt-12"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#478451] to-[#3a6d43] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready To Transform Your Agricultural Experience?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-12">
              Join hundreds of farmers and buyers already benefiting from our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/buyersignup"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-[#478451] bg-white hover:bg-gray-50 transition duration-300 shadow-lg"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;