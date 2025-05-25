import React, { useState } from 'react'
import OfficerNavbar from '../components/OfficerNavbar'
import { motion } from 'framer-motion';

const FuturePRD = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        district: '',
        division: '',
        crop: '',
        quantity: '',
        availableTime: ''
      });
    
      const districts = [
        'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
        'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
        'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
        'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
        'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
      ];
    
      const divisions = [
        'Colombo', 'Dehiwala', 'Sri Jayawardenepura Kotte', 'Negombo',
        'Kandy', 'Galle', 'Jaffna', 'Trincomalee', 'Dambulla', 'Matara',
        'Anuradhapura', 'Ratnapura', 'Badulla', 'Matale', 'Kalutara'
      ];
    
      const crops = [
        'Rice', 'Tea', 'Rubber', 'Coconut', 'Vegetables',
        'Fruits', 'Spices', 'Other'
      ];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You would typically send this data to your backend
      };
    
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] pt-[80px]">
          {/* Floating background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#478451]/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#478451]/5 blur-3xl"></div>
          </div>
    
          <OfficerNavbar />
    
          <motion.div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Future Available Production Form
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Please fill out the form below to submit the details of the crops that will be available in your division. 
                This helps us keep track of the quantity, types, and order status of crops for efficient distribution.
              </motion.p>
            </div>
    
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-[#478451]/10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                      required
                    />
                  </div>
    
                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                      required
                    />
                  </div>
    
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                    />
                  </div>
    
                  {/* District */}
                  <div className='relative'>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                      District <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none bg-white text-gray-500"
                      required
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400 pt-5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                  </div>
    
                  {/* Division */}
                  <div className='relative'>
                    <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
                      Division <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={formData.division}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none bg-white text-gray-500"
                      required
                    >
                      <option value="">Select Division</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </select>
                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400 pt-5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                  </div>
    
                  {/* Crop */}
                  <div className='relative'>
                    <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">
                      Crop <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="crop"
                      name="crop"
                      value={formData.crop}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none bg-white text-gray-500"
                      required
                    >
                      <option value="">Select Crop</option>
                      {crops.map((crop) => (
                        <option key={crop} value={crop}>{crop}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400 pt-5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                  </div>
    
                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
    
                  {/* Available Time */}
                  <div>
                    <label htmlFor="availableTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="availableTime"
                      name="availableTime"
                      value={formData.availableTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
    
                <div className="mt-8 flex justify-end">
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-[#478451] text-white font-medium rounded-lg shadow-md hover:bg-[#386c3f] transition duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Production Data
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      );
    };

export default FuturePRD