import { useState } from 'react';
import { FaHome, FaInfoCircle, FaCalendar, FaBuilding, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav", { opacity: 0, y: -20, duration: 0.5 });

    // Animate nav li from top one by one
    gsap.from(".nav li", { y: -50, opacity: 0, duration: 1, stagger: 0.1 });

    // Animate nav on scroll - make it smaller
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
    <div className="fixed top-0 left-0 lg:w-full z-50 bg-blue-900 text-white flex py-3 lg:px-8 items-center justify-evenly ">
        <div className="flex-1 font-extrabold h-auto text-wrap   text-lg md:text-2xl flex items-center gap-4">
            <img src="/logo.png" alt="" className="w-12 md:w-16 object-contain" />
            SRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL
            (Ghee Mandi)
        </div>
        <ul className="hidden md:flex items-center justify-evenly w-[50%] text-lg font-semibold">
           <Link to="/"><li className="hover:border-b cursor-pointer flex items-center gap-2"><FaHome /> Home</li></Link>
            <li className="hover:border-b cursor-pointer flex items-center gap-2"><FaInfoCircle /> About Us</li>
           <Link to="/events"> <li className="hover:border-b cursor-pointer flex items-center gap-2"><FaCalendar /> Events</li></Link>
            <li className="hover:border-b cursor-pointer flex items-center gap-2"><FaBuilding /> Infrastructure</li>
            <li className="hover:border-b cursor-pointer flex items-center gap-2"><FaPhone /> Contact Us</li>
            
        </ul>
        <div className="md:hidden mr-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>
        <ul className={`absolute z-20 top-full left-0 w-full bg-blue-900 md:hidden flex flex-col items-center py-4 text-lg font-semibold transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <li className=" cursor-pointer py-2 flex items-center gap-2"><FaHome /> Home</li>
                <hr className='bg-white w-full '/>
                <li className="cursor-pointer py-2 flex items-center gap-2"><FaInfoCircle /> About Us</li>
                <hr className='bg-white w-full '/>
                <li className="cursor-pointer py-2 flex items-center gap-2"><FaCalendar /> Events</li>
                <hr className='bg-white w-full '/>
                <li className="cursor-pointer py-2 flex items-center gap-2"><FaBuilding /> Infrastructure</li>
                <hr className='bg-white w-full '/>
                <li className="cursor-pointer py-2 flex items-center gap-2"><FaPhone /> Contact Us</li>
            </ul>
    </div>
  )
}

export default Nav