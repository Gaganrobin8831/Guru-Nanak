

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Message = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        const mobile = window.innerWidth < 768;
        // Animate title on load
        tl.from(".message-title", { opacity: 0, y: -50, duration: 1 });

        // Animate sections on scroll - replay on every scroll down/up
        tl.fromTo(".message-section", 
            { opacity: 0, x: -10, y: 50 }, 
            { 
                opacity: 1, 
                x: mobile ? 0 : 0, 
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
         tl.fromTo(".message-section2", 
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
    });

    return (
        <div className='bg-gray-200 flex flex-col gap-8 py-8 min-h-screen items-center justify-center'>
            <h1 className="text-center text-[35px] font-extrabold text-orange-400 message-title">MANAGEMENT TEAM</h1>
            <div className="lg:w-[70%]  mx-auto flex flex-col lg:flex-row  items-center justify-evenly gap-4 p-8 message-section">
                <img src="/pardhan.jpg" alt="" srcset="" className='h-75 w-75'/>
                <div className="max-w-2xl text-center lg:text-left">
                    <h2 className="text-2xl font-bold">President's Message <br />
                        (Harjinder Singh Dhami)</h2>
                    <p className="my-2">At SHRI GURU NANAK GIRLS SENIOR SECONDARY SCHOOL, we offer a rigorous curriculum designed to challenge and inspire our students. Our experienced and dedicated faculty employ innovative teaching methods to ensure that every student excels academically. We emphasize critical thinking, problem-solving, and effective communication skills.</p>
                </div>
            </div>
            <div className="lg:w-[70%] mx-auto flex flex-col-reverse lg:flex-row-reverse  items-center justify-evenly gap-4 p-8 message-section2">
                <img src="/satwant.jpg" alt="" srcset="" className='h-75 w-75'/>
                <div className="max-w-2xl text-center lg:text-left">
                    <h2 className="text-2xl font-bold">Panthic Council Message <br />
                        (Bibi Satwant Kaur)</h2>
                    <p className="my-2">Education is everyone’s right we as administrators with the help of faculty and staff must facilitate this right to the contemporaries for their holistic development and to make this earth a living able place for everyone. Education is the root of every development,discovery and ethics.It must reach to every part of society.</p>
                    <p className="my-2"><span className="font-bold">Our Misson: -</span> is to equip children with knowledge, skill, good character and social skills so that they become responsible citizens .These future builders develop positive thinking, respect for nation's rich heritage and take the nation as well as this world to the new heights with their virtues and smart skills.</p>
                </div>
            </div>
            <div className="lg:w-[70%] mx-auto flex flex-col lg:flex-row  items-center justify-evenly gap-4 p-8 message-section2">
                <img src="/principal.jpg" alt="" srcset="" className='h-75 w-75'/>
                <div className="max-w-2xl text-center lg:text-left">
                    <h2 className="text-2xl font-bold">Principal's Message <br />
                        (Maninderpal Kaur)</h2>
                    <p className="my-2">Education is everyone’s right we as administrators with the help of faculty and staff must facilitate this right to the contemporaries for their holistic development and to make this earth a living able place for everyone. Education is the root of every development,discovery and ethics.It must reach to every part of society.</p>
                    <p className="my-2"><span className="font-bold">Our Misson: -</span> is to equip children with knowledge, skill, good character and social skills so that they become responsible citizens .These future builders develop positive thinking, respect for nation's rich heritage and take the nation as well as this world to the new heights with their virtues and smart skills.</p>
                </div>
            </div>
        </div>
    )
}

export default Message