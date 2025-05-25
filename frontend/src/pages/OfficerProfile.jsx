import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OfficerNavbar from '../components/OfficerNavbar';

const OfficerProfile = () => {
  // Mock profile data
  const profileData = {
    name: "K. Perera",
    address: "123 Farm Lane, Colombo 05",
    phoneNumber: "0771234567",
    nic: "901234567V",
    district: "Colombo",
    division: "Colombo",
    suppliedCrops: [
      { name: "Carrots", quantity: "250kg", date: "2023-05-15" },
      { name: "Coconut", quantity: "150kg", date: "2023-05-10" },
      { name: "Banana", quantity: "80kg", date: "2023-05-05" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#f0f7f1] py-[80px]">
      <OfficerNavbar />
      
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#478451]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#478451]/5 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#478451] rounded-xl shadow-lg p-6 border border-[#478451]/10 text-white"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">{profileData.name}</h2>
              <p className="text-white/90 font-medium">{profileData.district} District</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-white/80">Address</h3>
                <p>{profileData.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80">Phone Number</h3>
                <p>{profileData.phoneNumber}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80">NIC Number</h3>
                <p>{profileData.nic}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80">Division</h3>
                <p>{profileData.division}</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#478451]/10 lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Link
                to="/available-production"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-[#478451] text-[#478451] hover:bg-[#478451]/10 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Available Production
                </motion.button>
              </Link>

              <Link
                to="/future-production"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center p-3 rounded-lg border border-[#478451] text-[#478451] hover:bg-[#478451]/10 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Future Production
                </motion.button>
              </Link>
            </div>

            {/* Supplied Crops Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recently Supplied Crops</h2>
                <span className="text-sm text-[#478451] font-medium">Last 3 records</span>
              </div>

              <div className="space-y-4">
                {profileData.suppliedCrops.map((crop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 rounded-lg border border-[#478451]/10 hover:bg-[#f0f7f1] transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800">{crop.name}</h3>
                      <p className="text-sm text-gray-500">{crop.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#478451]/10 text-[#478451] rounded-full text-sm font-medium">
                      {crop.quantity}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/supplied-crops"
                  className="text-[#478451] font-medium flex items-center justify-end"
                >
                  View all records
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OfficerProfile;