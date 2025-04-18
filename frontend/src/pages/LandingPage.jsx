import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import homeimage from '../images/homeimg.jpg';
import homeimage1 from '../images/homeimg1.jpg';

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Full viewport height */}
      <section className="min-h-screen bg-white relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#478451]/10 blur-3xl"></div>
          <div className="absolute -right-20 bottom-1/3 w-96 h-96 rounded-full bg-[#478451]/5 blur-3xl"></div>
          <div className="absolute right-1/4 top-20 w-32 h-32 rounded-full bg-[#478451]/15 blur-xl"></div>
        </div>

        <Navbar />
        
        <div className="container mx-auto px-6 flex items-center justify-center h-[calc(100vh-4rem)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cultivating <span className="text-[#478451]">The Future</span> Of Agriculture
              </h1>
              <p className="text-xl text-gray-600">
                Innovative solutions for sustainable farming and food production. 
                Harnessing technology to grow more with less.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#478451] hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 group flex items-center">
                  See More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <img 
                    src={homeimage} 
                    alt="Modern agriculture" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mt-8 border-2 border-white">
                  <img 
                    src={homeimage1} 
                    alt="Sustainable farming" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="hidden lg:block">
          <div className="absolute left-1/4 top-1/3 w-6 h-6 rounded-full bg-[#478451]/20 animate-float1"></div>
          <div className="absolute right-1/3 bottom-1/4 w-4 h-4 rounded-full bg-[#478451]/15 animate-float2"></div>
          <div className="absolute left-1/3 top-2/3 w-8 h-8 rounded-full bg-[#478451]/10 animate-float3"></div>
        </div>
      </section>

      {/* Services Section - Full viewport height */}
      <section className="min-h-screen relative z-10 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#478451] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Innovative solutions designed to empower Sri Lanka's agricultural community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Production Tracker",
                description: "Monitor and optimize your farm's output with real-time production analytics",
                icon: "📈"
              },
              {
                title: "Officer Insights",
                description: "Expert recommendations and compliance guidance from certified officers",
                icon: "👨‍🌾"
              },
              {
                title: "Crop Recommender",
                description: "AI-powered suggestions for ideal crops based on soil and climate data",
                icon: "🌾"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border border-gray-100 hover:border-[#478451]/20 h-100"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link 
                  to="/services" 
                  className="text-[#478451] hover:text-[#3a6d43] font-medium text-sm flex items-center justify-center"
                >
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;