import React, { useState } from 'react';
import { motion } from 'framer-motion';
import officerSignupImage from '../images/officersignup.jpg';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const OfficerSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    registrationNumber: '',
    email: '',
    phoneNumber: '',
    nic: '',
    district: '',
    division: '',
    password: '',
    confirmPassword: ''
  });

  const districts = ['Colombo', 'Gampaha', 'Kaluthara'];
  const divisions = ['Colombo Division', 'Gampaha Division', 'Kaluthara Division'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {/* Image Section */}
          <div className="lg:w-2/5 relative">
            <img 
              src={officerSignupImage}
              alt="officer signup"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Officer Registration</h2>
                <p className="text-white/90 text-sm">Join our professional network</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5 p-6 sm:p-8 relative">
            <Link to="/" className="absolute top-4 left-6 flex items-center text-[#478451] hover:text-[#3a6d43] transition-colors duration-200">
              <ArrowLeftIcon className="h-5 w-5" />
            </Link>

            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-[#478451] rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              <span className="text-[#478451]">Officer</span> Sign Up
            </h1>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Registration Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="AG-12345"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone & NIC in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                    placeholder="0771234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NIC Number</label>
                  <input
                    type="text"
                    name="nic"
                    value={formData.nic}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                    placeholder="200012345678"
                  />
                </div>
              </div>

              {/* District & Division in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                  <select
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
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300 appearance-none pr-8"
                  >
                    <option value="">Select division</option>
                    {divisions.map(division => (
                      <option key={division} value={division}>{division}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 bottom-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Password & Confirm Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="8"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                    placeholder="At least 8 characters"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-br from-[#478451] to-[#3a6d43] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Account
              </motion.button>

              <div className="text-center text-xs text-gray-600 mt-3">
                Already have an account?{' '}
                <Link to="/officerlogin" className="text-[#478451] hover:underline font-medium">
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

export default OfficerSignup;