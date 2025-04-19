import React, { useState } from 'react';
import teapic from '../images/tea.jpg';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const BuyerSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nic: '',
    district: '',
    password: '',
    confirmPassword: ''
  });

  const districts = ['Colombo', 'Gampaha', 'Kaluthara'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#478451] flex items-center justify-center py-8 px-4 sm:px-6">
      <motion.div 
        className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Section - Smaller */}
          <div className="lg:w-2/5 relative">
            <img 
              src={teapic}
              alt="signup pic"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Join AgroPulse</h2>
                <p className="text-white/90 text-sm">Connect with farmers directly</p>
              </div>
            </div>
          </div>

          {/* Form Section - Compact */}
          <div className="lg:w-3/5 p-6 sm:p-8 relative">
            {/* Back Arrow positioned at top-left of form div */}
            <Link 
              to="/" 
              className="absolute top-4 left-6 flex items-center text-[#478451] hover:text-[#3a6d43] transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </Link>

            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-[#478451] rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Get Started With <span className="text-[#478451]">AgroPulse</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="0771234567"
                />
              </div>

              {/* NIC */}
              <div>
                <label htmlFor="nic" className="block text-sm font-medium text-gray-700 mb-1">
                  NIC
                </label>
                <input
                  type="text"
                  id="nic"
                  name="nic"
                  value={formData.nic}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="200012345678 or 200012345V"
                />
              </div>

              {/* District with dropdown icon */}
              <div className="relative">
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300 appearance-none pr-8"
                >
                  <option value="">Select district</option>
                  {districts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 bottom-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="At least 8 characters"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="Confirm password"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-br from-[#478451] to-[#3a6d43] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 mt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
              </motion.button>

              <div className="text-center text-xs text-gray-600 mt-3">
                Already have an account?{' '}
                <Link to="/buyerlogin" className="text-[#478451] hover:underline font-medium">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyerSignup;