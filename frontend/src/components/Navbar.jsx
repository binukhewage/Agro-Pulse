import React from 'react'
import logo from '../images/logogreen.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
            <div className='pt-10 pr-7'>
                <button className='border rounded-[50px] p-2 mr-4 text-gray-600'> 
                    LogIn
                </button>
                <button className='border rounded-[50px] p-2 font-bold text-white bg-[#478451]'>
                    SignUp
                </button>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar