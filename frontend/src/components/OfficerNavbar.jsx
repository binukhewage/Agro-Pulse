import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const OfficerNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'home', path: '/officerlanding' },
    { label: 'dashboard', path: '/odashboard' },
    { 
      label: 'Submit Production', 
      submenu: [
        { label: 'Available Production', path: '/available-production' },
        { label: 'Future Production', path: '/future-production' }
      ]
    },
    { label: 'Waste', path: '/waste' } 
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl py-2 px-4 sm:px-6 md:py-3 md:px-10 flex justify-between items-center bg-white shadow-lg md:shadow-xl rounded-full z-50 border border-[#478451]/10 backdrop-blur-md">
      <Link to="/">
        <h1 className='text-xl font-bold'>Agro<span className='text-[#478451]'>Pulse</span></h1>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className="text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 relative group cursor-pointer text-sm lg:text-base"
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#478451] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 flex items-center group cursor-pointer text-sm lg:text-base"
                >
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#478451] group-hover:w-full transition-all duration-300"></span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-[#478451]/20"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-[#2a4b32] hover:bg-[#f0f7f1] hover:text-[#478451] transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            )
          ))}
        </div>

        <motion.button
          className="p-2 rounded-full text-[#2a4b32] hover:bg-[#f0f7f1] transition-all duration-300 flex items-center justify-center border border-[#478451]/30 hover:border-[#478451]/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/officerprofile')}
        >
          <UserIcon className="w-5 h-5 text-[#478451]" />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center space-x-4">
        <motion.button
          className="p-2 rounded-full text-[#2a4b32] hover:bg-[#f0f7f1] transition-all duration-300 flex items-center justify-center border border-[#478451]/30 hover:border-[#478451]/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/officerlogin')}
        >
          <UserIcon className="w-5 h-5 text-[#478451]" />
        </motion.button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full text-[#2a4b32] hover:bg-[#f0f7f1] transition-all duration-300 flex items-center justify-center border border-[#478451]/30 hover:border-[#478451]/50"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-5 h-5 text-[#478451]" />
          ) : (
            <Bars3Icon className="w-5 h-5 text-[#478451]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-xl py-4 px-6 z-50 border border-[#478451]/20"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.path ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-[#2a4b32] hover:text-[#478451] font-medium py-2 px-3 rounded-lg hover:bg-[#f0f7f1] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                  </Link>
                ) : (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-[#2a4b32] hover:text-[#478451] font-medium py-2 px-3 rounded-lg hover:bg-[#f0f7f1] transition-colors duration-200 flex items-center justify-between"
                    >
                      {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                      <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block py-2 px-3 text-sm text-[#2a4b32] hover:bg-[#f0f7f1] hover:text-[#478451] rounded-lg transition-colors duration-200"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default OfficerNavbar;