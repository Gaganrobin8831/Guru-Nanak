import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <div className=" px-4 py-8">
      {/* Heading */}
      <div className="bg-white/80 min-h-[80vh] lg:w-[80%] mx-auto p-6 rounded-lg shadow-md">

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
          </div>
  );
};

export default About;
