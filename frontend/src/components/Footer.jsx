import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,
        FaTwitter,
        FaInstagram,
        FaLinkedin,
        FaMapMarkerAlt,
        FaPhone,
        FaEnvelope } from 'react-icons/fa';
import mlogo from '../images/sltmobitel.png'

const Footer = () => {
  return (
    <footer className="bg-[#2a4b32] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-[#8bc34a]">Agro</span>Pulse
            </h2>
            <p className="text-gray-300">
              Revolutionizing agriculture through technology and innovation. 
              Empowering farmers with smart solutions for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#8bc34a] transition duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8bc34a] transition duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8bc34a] transition duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#8bc34a] transition duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8bc34a]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8bc34a]">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/production-tracker" className="text-gray-300 hover:text-white transition duration-300">
                  Production Tracker
                </Link>
              </li>
              <li>
                <Link to="/services/officer-insights" className="text-gray-300 hover:text-white transition duration-300">
                  Officer Insights
                </Link>
              </li>
              <li>
                <Link to="/services/crop-recommender" className="text-gray-300 hover:text-white transition duration-300">
                  Crop Recommender
                </Link>
              </li>
              <li>
                <Link to="/services/marketplace" className="text-gray-300 hover:text-white transition duration-300">
                  Digital Marketplace
                </Link>
              </li>
              <li>
                <Link to="/services/analytics" className="text-gray-300 hover:text-white transition duration-300">
                  Farm Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8bc34a]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#8bc34a] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Agriculture Street, Colombo 05, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-[#8bc34a]" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#8bc34a]" />
                <span className="text-gray-300">info@agropulse.lk</span>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-[#8bc34a] mb-2">Powered By</h4>
              <div className="flex">
                <img src={mlogo} alt=""  className='w-40'/>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AgroPulse. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;