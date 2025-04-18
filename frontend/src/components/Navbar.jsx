import React, { useState } from 'react'
import logo from '../images/logogreen.png'
import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)
  const [showSignupDropdown, setShowSignupDropdown] = useState(false)

  return (
    <div>
       <nav className='flex justify-between'>
            <div className='pl-5'>
                <img 
                  src={logo} 
                  alt="logo" 
                  className='w-45'/>
            </div>
            <div className='flex p-10 gap-10 font-semibold text-gray-600'>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `hover:text-[#478451] relative ${isActive ? 'text-[#478451]' : ''}`
                  }>
                  {({isActive}) => (
                    <>
                      Home
                      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#478451]"></span>}
                    </>
                  )}
                </NavLink>
                <NavLink 
                  to="/services" 
                  className={({isActive}) => 
                    `hover:text-[#478451] relative ${isActive ? 'text-[#478451]' : ''}`
                  }>
                  {({isActive}) => (
                    <>
                      Services
                      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#478451]"></span>}
                    </>
                  )}
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => 
                    `hover:text-[#478451] relative ${isActive ? 'text-[#478451]' : ''}`
                  }>
                  {({isActive}) => (
                    <>
                      About
                      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#478451]"></span>}
                    </>
                  )}
                </NavLink>
            </div> 
            <div className='pt-10 pr-7 relative'>
                <div className='relative inline-block'>
                  <button 
                    className='border rounded-[50px] p-2 mr-4 text-gray-600 hover:bg-gray-100 flex items-center gap-1'
                    onClick={() => {
                      setShowLoginDropdown(!showLoginDropdown)
                      setShowSignupDropdown(false)
                    }}
                  > 
                    LogIn
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${showLoginDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {showLoginDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <NavLink 
                          to="/login/buyer" 
                          className="block px-4 py-2 text-gray-700 hover:bg-[#478451] hover:text-white"
                          onClick={() => setShowLoginDropdown(false)}
                        >
                          👨🏻‍🌾 Login as Buyer
                        </NavLink>
                        <NavLink 
                          to="/login/officer" 
                          className="block px-4 py-2 text-gray-700 hover:bg-[#478451] hover:text-white"
                          onClick={() => setShowLoginDropdown(false)}
                        >
                          👨🏽‍💼 Login as Officer
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className='relative inline-block'>
                  <button 
                    className='border rounded-[50px] p-2 font-bold text-white bg-[#478451] hover:bg-[#3a6d42] flex items-center gap-1'
                    onClick={() => {
                      setShowSignupDropdown(!showSignupDropdown)
                      setShowLoginDropdown(false)
                    }}
                  >
                    SignUp
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${showSignupDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {showSignupDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <NavLink 
                          to="/buyersignup" 
                          className="block px-4 py-2 text-gray-700 hover:bg-[#478451] hover:text-white"
                          onClick={() => setShowSignupDropdown(false)}
                        >
                          👨🏻‍🌾 SignUp as Buyer
                        </NavLink>
                        <NavLink 
                          to="/signup/officer" 
                          className="block px-4 py-2 text-gray-700 hover:bg-[#478451] hover:text-white"
                          onClick={() => setShowSignupDropdown(false)}
                        >
                          👨🏽‍💼 SignUp as Officer
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar