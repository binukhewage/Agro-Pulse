import React from 'react';
import BuyerNavbar from '../components/BuyerNavbar';
import { motion } from 'framer-motion';

const CropOrderForm = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] relative overflow-hidden'>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#478451]/5 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#478451]/3 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
        />
      </div>

      <BuyerNavbar />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Form Header */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Place Your Crop Order</h1>
            <p className="text-gray-600 max-w-4xl mx-auto">
            Please fill out the form below to place the order for crop purchase.This helps us keep track of the quantity, types, and order status of crops for efficient distribution. Ensure that all fields are filled accurately to process your order smoothly. 
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Form Header */}
            <div className="bg-[#478451] p-4 md:p-6 text-white">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">Order Details</h2>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Crop Selection */}
                <div className="space-y-2">
                  <label htmlFor="crop" className="block text-sm font-medium text-gray-700">Crop Name</label>
                  <div className="relative">
                    <select 
                      id="crop" 
                      name="crop"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none"
                    >
                      <option value="">Select a crop</option>
                      <option value="Carrot">Carrot</option>
                      <option value="Tomato">Tomato</option>
                      <option value="Potato">Potato</option>
                      <option value="Onion">Onion</option>
                      <option value="Garlic">Garlic</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="quantity" 
                      placeholder="Enter quantity" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 text-sm">kg</span>
                    </div>
                  </div>
                </div>

                {/* District */}
                <div className="space-y-2">
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                  <div className="relative">
                    <select 
                      id="district" 
                      name="district"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none"
                    >
                      <option value="">Select district</option>
                      <option value="Colombo">Colombo</option>
                      <option value="Kaluthara">Kaluthara</option>
                      <option value="Gampaha">Gampaha</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Division */}
                <div className="space-y-2">
                  <label htmlFor="division" className="block text-sm font-medium text-gray-700">Division</label>
                  <div className="relative">
                    <select 
                      id="division" 
                      name="division"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none"
                    >
                      <option value="">Select division</option>
                      <option value="Panadura">Panadura</option>
                      <option value="Moratuwa">Moratuwa</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Officer's Name */}
                <div className="space-y-2">
                  <label htmlFor="officer" className="block text-sm font-medium text-gray-700">Officer's Name</label>
                  <input 
                    type="text" 
                    id="officer" 
                    placeholder="Enter officer's name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                  />
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (LKR)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="amount" 
                      placeholder="Enter amount" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 text-sm">LKR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center items-center">

                <motion.button 
                  type="button" 
                  className="bg-[#478451] hover:bg-[#3a6d43] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md flex items-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CropOrderForm;