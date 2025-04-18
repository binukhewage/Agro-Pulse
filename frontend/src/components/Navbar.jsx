import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import logo from '../images/logogreen.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl py-3 px-6 sm:px-10 flex justify-between items-center bg-white shadow-xl rounded-full z-50 border border-[#478451]/10 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <NavLink to="/" className="flex items-center gap-3">
          <h1 className='text-2xl font-bold'><span className='text-[#478451]'>Agro</span>Pulse</h1>
        </NavLink>
      </motion.div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {['home', 'services', 'about'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#478451] group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        {/* Login */}
        <div className="relative">
          <motion.button
            className="px-6 py-2 rounded-full text-[#2a4b32] font-medium hover:bg-[#f0f7f1] transition-all duration-300 flex items-center gap-2 border border-[#478451]/30 hover:border-[#478451]/50 group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setShowLoginDropdown(!showLoginDropdown);
              setShowSignupDropdown(false);
            }}
          >
            <span className="relative z-10">Login</span>
            <ChevronDownIcon 
              className={`w-4 h-4 text-[#478451] transition-transform duration-300 ${showLoginDropdown ? 'rotate-180' : ''} relative z-10`}
            />
          </motion.button>
          <AnimatePresence>
            {showLoginDropdown && (
              <motion.div
                className="absolute right-0 mt-3 w-64 origin-top-right bg-white rounded-xl shadow-lg z-10 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="py-2">
                  <NavLink 
                    to="/login/buyer" 
                    className="block px-5 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 flex items-center gap-3"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="text-lg">👨🏻‍🌾</span>
                    <div>
                      <p className="font-medium text-[#2a4b32]">Buyer Login</p>
                      <p className="text-xs text-gray-500">Access marketplace</p>
                    </div>
                  </NavLink>
                  <div className="mx-4 h-px bg-gray-100 my-1"></div>
                  <NavLink 
                    to="/login/officer" 
                    className="block px-5 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 flex items-center gap-3"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="text-lg">👨🏽‍💼</span>
                    <div>
                      <p className="font-medium text-[#2a4b32]">Officer Login</p>
                      <p className="text-xs text-gray-500">Agriculture tools</p>
                    </div>
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Signup */}
        <div className="relative">
          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-br from-[#478451] to-[#3a6d43] text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-[#478451]/40 group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setShowSignupDropdown(!showSignupDropdown);
              setShowLoginDropdown(false);
            }}
          >
            <span className="relative z-10">Sign Up</span>
            <ChevronDownIcon 
              className={`w-4 h-4 text-white/90 transition-transform duration-300 ${showSignupDropdown ? 'rotate-180' : ''} relative z-10`}
            />
          </motion.button>
          <AnimatePresence>
            {showSignupDropdown && (
              <motion.div
                className="absolute right-0 mt-3 w-64 origin-top-right bg-white rounded-xl shadow-lg z-10 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="py-2">
                  <NavLink 
                    to="/buyersignup" 
                    className="block px-5 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 flex items-center gap-3"
                    onClick={() => setShowSignupDropdown(false)}
                  >
                    <span className="text-lg">👨🏻‍🌾</span>
                    <div>
                      <p className="font-medium text-[#2a4b32]">Buyer Sign Up</p>
                      <p className="text-xs text-gray-500">Join marketplace</p>
                    </div>
                  </NavLink>
                  <div className="mx-4 h-px bg-gray-100 my-1"></div>
                  <NavLink 
                    to="/signup/officer" 
                    className="block px-5 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 flex items-center gap-3"
                    onClick={() => setShowSignupDropdown(false)}
                  >
                    <span className="text-lg">👨🏽‍💼</span>
                    <div>
                      <p className="font-medium text-[#2a4b32]">Officer Sign Up</p>
                      <p className="text-xs text-gray-500">Register credentials</p>
                    </div>
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
