import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserIcon } from '@heroicons/react/24/solid'

const OfficerNavbar = () => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl py-2 px-4 sm:px-6 md:py-3 md:px-10 flex justify-between items-center bg-white shadow-lg md:shadow-xl rounded-full z-50 border border-[#478451]/10 backdrop-blur-md">
        <Link
            to="/"
        >
            <h1 className='text-xl font-bold'>Agro<span className='text-[#478451]'>Pulse</span></h1>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {[
           { label: 'home', path: '/buyerlanding' },
           { label: 'dashboard', path: '/bdashboard' },
           { label: 'order', path: '/order' } 
        ].map(({label,path}) => (
          <Link
            key={label}
            to={path}
            className="text-[#2a4b32] hover:text-[#478451] font-medium transition-colors duration-200 relative group cursor-pointer text-sm lg:text-base"
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#478451] group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
      <motion.button
            className="p-2 rounded-full text-[#2a4b32] hover:bg-[#f0f7f1] transition-all duration-300 flex items-center justify-center border border-[#478451]/30 hover:border-[#478451]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/officerlogin')}
          >
            <UserIcon className="w-5 h-5 text-[#478451]" />
        </motion.button>
        </div>
    </nav>
  )
}

export default OfficerNavbar