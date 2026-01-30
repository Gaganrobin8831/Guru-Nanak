import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
     useGSAP(() => {
        const tl = gsap.timeline();
        const mobile = window.innerWidth < 768;
    
        // Animate heading on load
        tl.from(".about-title", {
          opacity: 0,
          y: -50,
          duration: 1
        });
    
        // Animate content on load
        tl.from(".about-content", {
          opacity: 0,
          y: mobile ? 30 : 50,
          duration: 1
        }, "-=0.5");
    
        // On scroll, replay
        ScrollTrigger.create({
          trigger: ".about-title",
          start: "top 90%",
          onEnter: () => tl.restart(),
          onLeaveBack: () => tl.restart()
        });
      });
  return (
    <div className='bg-gray-200 min-h-screen'>
       
          <div className="min-h-[80vh] lg:w-[80%] mx-auto p-6 rounded-lg shadow-md">

      <h1 className="text-center text-2xl sm:text-3xl lg:text-[35px] font-extrabold text-orange-400 mb-6 about-title">
        About Us
      </h1>

      {/* Content */}
      <div className="  flex flex-col-reverse lg:flex-row items-center justify-evenly gap-6 max-w-7xl mx-auto about-content">
        
        {/* Text */}
        <p className="w-full lg:w-1/3 text-justify ">
          Sri GURU NANAK GIRLS HIGHER SECONDARY SCHOOL was established in the year
          1993 under the aegis of Sri Guru Nanak Dev Educational Society, Ludhiana.
          The school is affiliated to the Punjab School Education Board,
          Chandigarh. The school is managed by a team of dedicated and experienced
          professionals who are committed to providing quality education to the
          students. The management team includes the President, Vice-President,
          Secretary, Treasurer, and other members who work together to ensure the
          smooth functioning of the school.
        </p>

        {/* Image */}
        <img
          src="/slider/slide3.jpg"
          alt="School Building"
          className="w-full sm:w-[80%] lg:w-[45%] rounded-lg shadow-lg"
          />
      </div>
    </div>
    <div className='flex flex-col items-center justify-center p-8'>
        <p className=' my-7 text-wrap w-1/2'><span className='text-orange-400 text-2xl mx-3'>ADDRESS:</span>
        JVFP+58H, Ghee Mandi, Guru Ram Das Market, Jahaj Ghar, Amritsar, Punjab 143006
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.3982491465335!2d74.8832754751236!3d31.62294464206802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197cabbc8af8f1%3A0xf9e7787cb47a763b!2sShri%20Guru%20Nanak%20Girls%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1769747980464!5m2!1sen!2sin" width="1000" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-xl rounded-2xl'></iframe>
    </div>
    </div>
  )
}

export default AboutUs