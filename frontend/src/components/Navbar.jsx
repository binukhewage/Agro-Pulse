import React from 'react'
import logo from '../images/logogreen.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className='flex justify-between'>
            <img 
            src={logo} 
            alt="logo" 
            className='w-45'/>
            <div className='flex p-10 gap-10'>
                <Link>
                Home
                </Link>
                <Link>
                Services
                </Link>
                <Link>
                About
                </Link>
            </div> 
            <div className='pt-10 pr-7'>
                <button className='border rounded-[50px] p-2 mr-4'> 
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