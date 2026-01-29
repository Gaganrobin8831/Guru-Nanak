import { useState } from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaCalendar,
  FaBuilding,
  FaPhone,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav", { opacity: 0, y: -20, duration: 0.5 });
    gsap.from(".nav li", { y: -50, opacity: 0, duration: 1, stagger: 0.1 });

    gsap.to(".nav", {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      scrollTrigger: {
        start: "top -50",
        scrub: true
      }
    });
  });

  return (
    <div className="nav fixed top-0 left-0 w-full z-50 bg-blue-900 text-white flex py-3 px-4 lg:px-8 items-center justify-between">
      
      {/* Logo */}
      <div className="flex font-extrabold text-lg md:text-2xl items-center gap-4">
        <img src="/logo.png" alt="logo" className="w-12 md:w-16 object-contain" />
        <span className="hidden sm:block">
          SRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL (Ghee Mandi)
        </span>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* 🔥 SINGLE UL FOR ALL SCREENS */}
      <ul
        className={`
          absolute top-full left-0 w-full bg-blue-900
          flex flex-col items-center text-lg font-semibold
          transition-all duration-300
          md:static md:flex md:flex-row md:w-auto md:bg-transparent
          md:gap-8 md:opacity-100 md:translate-y-0 md:pointer-events-auto
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
          md:pointer-events-auto
        `}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <li className="py-2 md:py-0 hover:border-b cursor-pointer flex items-center gap-2">
            <FaHome /> Home
          </li>
        </Link>

        <li className="py-2 md:py-0 hover:border-b cursor-pointer flex items-center gap-2">
          <FaInfoCircle /> About Us
        </li>

        <Link to="/events" onClick={() => setIsOpen(false)}>
          <li className="py-2 md:py-0 hover:border-b cursor-pointer flex items-center gap-2">
            <FaCalendar /> Events
          </li>
        </Link>
          <Link to={'/Infrastructure'} onClick={() => setIsOpen(false)}>
        <li className="py-2 md:py-0 hover:border-b cursor-pointer flex items-center gap-2">
          <FaBuilding /> Infrastructure
        </li>
          </Link>

        <li className="py-2 md:py-0 hover:border-b cursor-pointer flex items-center gap-2">
          <FaPhone /> Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Nav;
