import React from 'react'
import { Link } from 'react-router-dom'

const BuyerNavbar = () => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl py-2 px-4 sm:px-6 md:py-3 md:px-10 flex justify-between items-center bg-white shadow-lg md:shadow-xl rounded-full z-50 border border-[#478451]/10 backdrop-blur-md">
        <div>
            <h1 className='text-xl font-bold'>Agro<span className='text-[#478451]'>Pulse</span></h1>
        </div>
        <div className='flex gap-5'>
            <Link
            to="/"
            >
                Home
            </Link>
            <Link
            to=""
            >
                Dashboard
            </Link>
            <Link
            to=""
            >
                Order
            </Link>
            <Link
            to=" "
            >
                
            </Link>
        </div>
    </nav>
  )
}

export default BuyerNavbar