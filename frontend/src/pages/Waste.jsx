import React, { useState } from 'react';
import OfficerNavbar from '../components/OfficerNavbar';
import { motion } from 'framer-motion';

const Waste = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    district: '',
    division: '',
    crop: '',
    quantity: '',
    reason: '',
    otherReason: ''
  });

  const [selectedReason, setSelectedReason] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReasonChange = (e) => {
    const value = e.target.value;
    setSelectedReason(value);
    setFormData(prev => ({
      ...prev,
      reason: value,
      otherReason: value === 'other' ? prev.otherReason : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  const reasonOptions = [
    'storage functionality issues',
    'transportation issues',
    'improper packaging',
    'couldn\'t tell',
    'expired stock',
    'other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] py-[120px]">
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
            Waste Records
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            After your harvest has been submitted to the system, if any kind of damage occurs, please provide details about the nature of the damage and the possible causes.
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
                  Full Name
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

              {/* District */}
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                  required
                />
              </div>

              {/* Division */}
              <div>
                <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1">
                  Division
                </label>
                <input
                  type="text"
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                  required
                />
              </div>

              {/* Crop */}
              <div>
                <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">
                  Crop
                </label>
                <input
                  type="text"
                  id="crop"
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (kg)
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

              {/* Reason Dropdown */}
              <div className='relative'>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Waste
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={selectedReason}
                  onChange={handleReasonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition appearance-none bg-white text-gray-500"
                  required
                >
                  <option value="">Select a reason</option>
                  {reasonOptions.map((option) => (
                    <option key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400 pt-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
              </div>

              {/* Other Reason (conditionally rendered) */}
              {selectedReason === 'other' && (
                <div className="md:col-span-2">
                  <label htmlFor="otherReason" className="block text-sm font-medium text-gray-700 mb-1">
                    Please specify the reason
                  </label>
                  <input
                    type="text"
                    id="otherReason"
                    name="otherReason"
                    value={formData.otherReason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#478451] focus:border-[#478451] transition"
                    required
                  />
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <motion.button
                type="submit"
                className="px-6 py-3 bg-[#478451] text-white font-medium rounded-lg shadow-md hover:bg-[#386c3f] transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Waste Record
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Waste;