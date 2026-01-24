import React from 'react'
import { FaHome, FaInfoCircle, FaCalendar, FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Name */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6">
          <img src="/logo.png" alt="School Logo" className="w-12 md:w-16 object-contain" />
          <h2 className="text-lg md:text-xl font-bold text-center md:text-left">
            SHRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL
          </h2>
        </div>

        {/* Main Content */}
        <div className=" flex flex-wrap gap-8">
          {/* Address Section */}
          <div className=' w-100'>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Address
            </h3>
            <p className="text-sm lg:text-xl space-y-5 font-bold">
              JVFP+58H, Ghee Mandi,<br />
              Guru Ram Das Market, Jahaj Ghar,<br />
              Amritsar, Punjab 143006
            </p>
            <p className="text-sm lg:text-xl space-y-5 font-bold mt-4">
              Sri Guru Nanak Girls Sen Sec School<br />
              Ghee Mandi Sri Amritsar Sahib
            </p>
          </div>

          {/* Contact Section */}
          <div className=' w-80 lg:mx-20'>
            <h3 className="text-sm lg:text-xl space-y-5 font-semibold mb-2 flex items-center gap-2">
              <FaPhone /> Contact Us
            </h3>
            <p className="text-sm lg:text-xl space-y-5 flex items-center gap-2 mb-2">
              <FaPhone /> 087290 12244
            </p>
            <p className="text-sm lg:text-xl space-y-5 flex items-center gap-2">
              <FaEnvelope /> sgngssschool@gmail.com
            </p>
          </div>

          {/* Useful Links */}
          <div className=' w-80 flex flex-col lg:items-center '>
            
            <ul className="text-sm lg:text-xl space-y-5">
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaHome /> Home</a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaInfoCircle /> About Us</a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaCalendar /> Events</a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaBuilding /> Infrastructure</a></li>
              <li><a href="#" className="hover:underline flex items-center gap-2"><FaPhone /> Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 mt-6 pt-4 text-center ">
          <p className="text-sm">
            &copy; 2024 SHRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer