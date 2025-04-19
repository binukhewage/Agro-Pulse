import React, { useState } from 'react';
import { motion } from 'framer-motion';
import officer from '../images/officer.jpg';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const OfficerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
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
              src={officer}
              alt="officer login"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Agriculture Officer</h2>
                <p className="text-white/90 text-sm">Access your dashboard</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-center relative">
            {/* Back Arrow */}
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
              <span className="text-[#478451]">Welcome</span> Back
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
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
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-[#478451] focus:ring-2 focus:ring-[#478451]/50 transition duration-300"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#478451] focus:ring-[#478451] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-xs">
                  <Link to="/forgot-password" className="text-[#478451] hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-br from-[#478451] to-[#3a6d43] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 mt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>

              <div className="text-center text-xs text-gray-600 mt-4">
                Need an officer account?{' '}
                <Link to="/officersignup" className="text-[#478451] hover:underline font-medium">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfficerLogin;