import React from 'react';
import BuyerNavbar from '../components/BuyerNavbar';
import { motion } from 'framer-motion';

const BuyerProfile = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] relative overflow-hidden'>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#478451]/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#478451]/3 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-[#478451]/10 blur-3xl"></div>
      </div>

      <BuyerNavbar />
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column - Profile Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-fit"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#478451] p-6 text-white text-center">
              <div className="relative mx-auto w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#478451]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold">John Michael Doe</h2>
              <p className="text-white/90">Premium Member Since 2022</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Account Status</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-medium">Verified</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Member Level</p>
                  <p className="font-medium">Gold</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#478451]/10 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#478451]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="font-medium">+94 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#478451]/10 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#478451]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#478451]/10 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#478451]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-medium">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-[#478451] hover:bg-[#3a6d43] text-white py-3 rounded-lg font-medium transition-colors duration-300 shadow-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Right Column - Details and Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Details Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                <button className="text-[#478451] hover:text-[#3a6d43] flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Full Name</label>
                  <p className="font-medium">John Michael Doe</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">NIC Number</label>
                  <p className="font-medium">901234567V</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Date of Birth</label>
                  <p className="font-medium">15 June 1985</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Gender</label>
                  <p className="font-medium">Male</p>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Address Information</h3>
                <button className="text-[#478451] hover:text-[#3a6d43] flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Address Line 1</label>
                  <p className="font-medium">123 Farm Road</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Address Line 2</label>
                  <p className="font-medium">Colombo 05</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">District</label>
                  <p className="font-medium">Colombo</p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">Division</label>
                  <p className="font-medium">Colombo Municipal Council</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Your Activity</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#f8faf8] p-4 rounded-lg text-center border border-[#478451]/10">
                  <p className="text-2xl font-bold text-[#478451]">24</p>
                  <p className="text-gray-500 text-sm">Total Orders</p>
                </div>
                <div className="bg-[#f8faf8] p-4 rounded-lg text-center border border-[#478451]/10">
                  <p className="text-2xl font-bold text-[#478451]">18</p>
                  <p className="text-gray-500 text-sm">Completed</p>
                </div>
                <div className="bg-[#f8faf8] p-4 rounded-lg text-center border border-[#478451]/10">
                  <p className="text-2xl font-bold text-[#478451]">3</p>
                  <p className="text-gray-500 text-sm">In Progress</p>
                </div>
                <div className="bg-[#f8faf8] p-4 rounded-lg text-center border border-[#478451]/10">
                  <p className="text-2xl font-bold text-[#478451]">3</p>
                  <p className="text-gray-500 text-sm">Farmers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyerProfile;