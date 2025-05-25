import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl py-2 px-4 sm:px-6 md:py-3 md:px-10 flex justify-between items-center bg-white shadow-lg md:shadow-xl rounded-full z-50 border border-[#478451]/10 backdrop-blur-md"
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
        <NavLink to="/" className="flex items-center gap-2 md:gap-3">
          <h1 className='text-xl md:text-2xl font-bold'><span className='text-[#478451]'>Agro</span>Pulse</h1>
        </NavLink>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#478451]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#478451]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#478451]" />
          )}
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {['home', 'services', 'about'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 relative group cursor-pointer text-sm lg:text-base"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#478451] group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>

      {/* User Icon - Desktop */}
      <div className="hidden md:flex items-center">
        <div className="relative">
          <motion.button
            className="p-2 rounded-full text-[#2a4b32] hover:bg-[#f0f7f1] transition-all duration-300 flex items-center justify-center border border-[#478451]/30 hover:border-[#478451]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowUserDropdown(!showUserDropdown)}
          >
            <UserIcon className="w-5 h-5 text-[#478451]" />
          </motion.button>
          <AnimatePresence>
            {showUserDropdown && (
              <motion.div
                className="absolute right-0 mt-2 w-56 lg:w-64 origin-top-right bg-white rounded-xl shadow-lg z-10 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="py-1">
                  <NavLink 
                    to="/buyerlogin" 
                    className="block px-4 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-[#478451]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2a4b32]">Login</p>
                        <p className="text-xs text-gray-500">Access your account</p>
                      </div>
                    </div>
                  </NavLink>
                  <div className="mx-4 h-px bg-gray-100 my-1"></div>
                  <NavLink 
                    to="/buyersignup" 
                    className="block px-4 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#478451]">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#2a4b32]">Sign Up</p>
                        <p className="text-xs text-gray-500">Create new account</p>
                      </div>
                    </div>
                  </NavLink>
                  <NavLink 
                    to="/buyerlanding" 
                    className="block px-4 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-[#478451]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#2a4b32]">Buyer</p>
                        <p className="text-xs text-gray-500">Access your account</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl mx-4 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-6">
                {['home', 'services', 'about'].map((section) => (
                  <Link
                    key={section}
                    to={section}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 text-lg text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 rounded-lg hover:bg-[#f0f7f1]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
              </div>

              {/* Mobile User Dropdown */}
              <div className="space-y-4">
                <div className="relative">
                  <button
                    className="w-full px-4 py-3 text-lg text-[#2a4b32] font-medium rounded-lg border border-[#478451]/30 hover:border-[#478451]/50 flex items-center gap-3"
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-[#478451]" />
                    </div>
                    <span>Account</span>
                    <ChevronDownIcon 
                      className={`w-5 h-5 text-[#478451] transition-transform duration-300 ml-auto ${showUserDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {showUserDropdown && (
                      <motion.div
                        className="mt-2 bg-white rounded-lg shadow-md overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-2 space-y-2">
                          <NavLink 
                            to="/buyerlogin" 
                            className="block px-4 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 rounded-lg"
                            onClick={() => {
                              setShowUserDropdown(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                                <UserIcon className="w-4 h-4 text-[#478451]" />
                              </div>
                              <div>
                                <p className="font-medium text-[#2a4b32]">Login</p>
                                <p className="text-sm text-gray-500">Access your account</p>
                              </div>
                            </div>
                          </NavLink>
                          <NavLink 
                            to="/buyersignup" 
                            className="block px-4 py-3 text-gray-700 hover:bg-[#f0f7f1] transition-colors duration-200 rounded-lg"
                            onClick={() => {
                              setShowUserDropdown(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#478451]/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#478451]">
                                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-[#2a4b32]">Sign Up</p>
                                <p className="text-sm text-gray-500">Create new account</p>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;