

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Message = () => {
    useGSAP(() => {
        const mobile = window.innerWidth < 768;
        // Animate title on load
        gsap.from(".message-title", { opacity: 0, y: -50, duration: 1 });

        // Animate sections on scroll
        gsap.fromTo(".message-section",
            { opacity: 0, x: -10, y: 50 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".message-section",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1
                }
            }
        );
        gsap.fromTo(".message-section2",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".message-section2",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1
                }
            }
        );
        gsap.fromTo(".message-section3",
            { opacity: 0, x: 10, y: 50 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".message-section3",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1
                }
            }
        );
        gsap.fromTo(".message-section4",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".message-section4",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1
                }
            }
        );
    });

    return (
        <div className='bg-gray-100 flex flex-col gap-12 py-12 min-h-screen items-center justify-center px-4'>
            <h1 className="text-center text-4xl md:text-5xl font-extrabold text-orange-500 message-title mb-8">MANAGEMENT TEAM</h1>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 message-section">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <img src="/pardhan.jpg" alt="President" className='h-75 w-75 rounded-full object-center shadow-lg' />
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">President's Message <br />
                            (Harjinder Singh Dhami)</h2>
                        <p className="text-gray-700 leading-relaxed">At SHRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL, we offer a rigorous curriculum designed to challenge and inspire our students. Our experienced and dedicated faculty employ innovative teaching methods to ensure that every student excels academically. We emphasize critical thinking, problem-solving, and effective communication skills.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 message-section2">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                    <img src="/Secretary.jpg" alt="Secretary" className='h-64 w-64 rounded-full object-center shadow-lg' />
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Secretary (Education) Message <br />
                            (Sukhminder Singh)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">The Shiromani Gurudwara Parbandhak Committee, Sri Amritsar, has not only excelled in managing religious institutions but also played a vital role in humanitarian efforts and building a healthy society. Education holds a special place in our services dedicated to human welfare. In today's globalized era, the importance of quality education has become even more pronounced. Our educational institutions, operating under the Shiromani Gurdwara Parbandhak Committee, Sri Amritsar, are consistently striving to educate students to meet national and international standards. Sri Guru Nanak Girls Sen Sec School, Ghee Mandi is an esteemed educational institution in the city of Sri Amritsar Sahib, has made notable contributions in the field of education.</p>
                        <p className="text-gray-700 leading-relaxed">This institution has achieved significant accomplishments not only in academics but also in sports, cultural, and literary fields. Our alumni, who have secured high positions, continue to make meaningful contributions as good citizens in various sectors of society. Thus, this institution is making remarkable strides in various domains alongside the expansion of education.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 message-section3">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <img src="/presidentMam.jpg" alt="Panthic Council" className='h-64 w-64 rounded-full object-center shadow-lg' />
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">(Director of Education in SGPC Message) <br />
                            (Bibi Satwant Kaur)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">I am delighted to welcome you to Sri Guru Nanak Girls Sen Sec School, Ghee Mandi, Sri Amritsar Sahib


                            Our Core Aspiration is to provide an Educational Excellence, in that every student makes a positive difference during the time with us. In expecting Excellence we ensure that children enjoy school in a happy, safe and secure atmosphere designed to fulfill their potential. We also strive to provide a caring, supportive and challenging environment to the children, in which they can grow and flourish to the esteemed heights.</p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-8 message-section4">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                    <img src="/principal.jpg" alt="Principal" className='h-64 w-64 rounded-full object-center shadow-lg' />
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4"> Principal 's message <br />
                            (Mrs. Maninderpal Kaur )</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">Dear students, parents and all my well - wishers, we stand on the threshold of a new academic session at Sri Guru Nanak Girls Senior Secondary School. I extend a heartly and warm welcome to all my students, staff and parents. Each academic year is a challenge to achieve greater heights with new targets set for the future. Our school is built on a foundation of values that promotes respect, empathy and kindness.</p>
                        <p className="text-gray-700 leading-relaxed"><span className="font-bold">Our Mission: -</span> As a principal, I am honoured to lead a team of talented, committed educators, who share a passion for teaching and learning.
                            Our curriculum is designed to be challenging, engaging and relevant with a focus on developing critical thinking, problem solving and communication skills. I welcome parents to be a part of this family to shape the future of children.
                            I invite you to explore the website and learn more about our school community.
                            Warm regards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message