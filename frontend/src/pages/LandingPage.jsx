import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import homeimage from '../images/homeimg.jpg';
import homeimage1 from '../images/homeimg1.jpg';

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0f7f1]">
      {/* Hero Section - Full viewport height */}
      <section className="min-h-screen relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#478451]/10 blur-3xl animate-float-slow"></div>
          <div className="absolute -right-20 bottom-1/3 w-96 h-96 rounded-full bg-[#478451]/5 blur-3xl animate-float-medium"></div>
          <div className="absolute right-1/4 top-20 w-32 h-32 rounded-full bg-[#478451]/15 blur-xl animate-float-fast"></div>
          
          {/* Decorative leaf patterns */}
          <div className="absolute left-10 top-1/4 opacity-20">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0C60 0 75 30 60 60C45 90 60 120 60 120C60 120 45 90 60 60C75 30 60 0 60 0Z" fill="#478451"/>
            </svg>
          </div>
          <div className="absolute right-20 bottom-1/4 opacity-15 rotate-45">
            <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0C60 0 75 30 60 60C45 90 60 120 60 120C60 120 45 90 60 60C75 30 60 0 60 0Z" fill="#478451"/>
            </svg>
          </div>
        </div>

        <Navbar />
        
        <div className="container mx-auto px-6 flex items-center justify-center h-[calc(100vh-4rem)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="lg:w-1/2 space-y-8 relative">
              <div className="absolute -left-8 -top-8 w-16 h-16 bg-[#478451]/10 rounded-full blur-md"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cultivating <span className="text-[#478451]">The Future</span> Of Agriculture
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Innovative solutions for sustainable farming and food production. 
                Harnessing technology to grow more with less.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/available-production"
                  className="bg-[#478451] hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 group flex items-center shadow-lg hover:shadow-[#478451]/30">
                  See More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-[#478451] text-[#478451] hover:bg-[#478451]/5 px-8 py-3 rounded-lg font-medium transition duration-300 group flex items-center">
                  Learn About Us
                </Link>
              </div>
              
              {/* Stats bar */}
              <div className="flex gap-6 pt-6">
                {[
                  { value: "500+", label: "Farmers" },
                  { value: "95%", label: "Success Rate" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#478451] rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-800">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:border-[#478451]/20 transition-all duration-300">
                  <img 
                    src={homeimage} 
                    alt="Modern agriculture" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">Smart Farming Techniques</p>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mt-8 border-4 border-white hover:border-[#478451]/20 transition-all duration-300">
                  <img 
                    src={homeimage1} 
                    alt="Sustainable farming" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">Organic Crop Production</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#478451]/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#478451]/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#478451]/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#478451]">Services</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#478451] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive solutions designed to empower Sri Lanka's agricultural community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Production Tracker",
                description: "Monitor and optimize your farm's output with real-time production analytics",
                icon: "📈",
                bg: "bg-[#478451]/5"
              },
              {
                title: "Officer Insights",
                description: "Expert recommendations and compliance guidance from certified officers",
                icon: "👨‍🌾",
                bg: "bg-[#478451]/10"
              },
              {
                title: "Crop Recommender",
                description: "AI-powered suggestions for ideal crops based on soil and climate data",
                icon: "🌾",
                bg: "bg-[#478451]/15"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.bg} h-80 flex flex-col justify-center items-center p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border border-transparent hover:border-[#478451]/30 relative overflow-hidden group`}
              >
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#478451]/10 group-hover:bg-[#478451]/20 transition duration-500"></div>
                <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link 
                  to="/services" 
                  className="text-[#478451] hover:text-[#3a6d43] font-medium text-sm flex items-center justify-center group-hover:underline"
                >
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About AgroPulse Section */}
      <section className="py-20 bg-[#f8faf8] relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute left-1/4 top-1/3 w-40 h-40 bg-[#478451] rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/3 w-32 h-32 bg-[#478451] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-[#478451]">AgroPulse</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#478451] mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-6">
                AgroPulse is a Smart Agriculture Management Platform designed to revolutionize the way farmers, 
                agriculture officers and buyers connect. We leverage AI, real-time data and digital commerce to 
                enhance productivity, improve market accessibility and support informed decision-making in 
                Sri Lanka's agricultural sector.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team combines decades of agricultural expertise with cutting-edge technology to create 
                a seamless marketplace for farm products.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#478451] hover:bg-[#3a6d43] transition duration-300 shadow-sm"
              >
                Learn More About Our Mission
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#478451]/10 p-6 rounded-lg flex flex-col items-center">
                    <div className="text-3xl mb-3">🌱</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-center text-sm">
                      To transform Sri Lankan agriculture through technology and innovation
                    </p>
                  </div>
                  <div className="bg-[#478451]/10 p-6 rounded-lg flex flex-col items-center">
                    <div className="text-3xl mb-3">🤝</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Approach</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Bridging the gap between traditional farming and modern technology
                    </p>
                  </div>
                  <div className="bg-[#478451]/10 p-6 rounded-lg flex flex-col items-center">
                    <div className="text-3xl mb-3">🌍</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Impact</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Supporting sustainable farming practices across the island
                    </p>
                  </div>
                  <div className="bg-[#478451]/10 p-6 rounded-lg flex flex-col items-center">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Our Future</h3>
                    <p className="text-gray-600 text-center text-sm">
                      Expanding to serve all agricultural communities in Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default LandingPage;