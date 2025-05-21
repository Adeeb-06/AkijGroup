"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import localFont from 'next/font/local';

// Make sure to install gsap with:
// npm install gsap

const founderGrotesk = localFont({
    src: "../app/fonts/FoundersGroteskXCond-Bold.otf",
    display: "swap",
});


export default function CounterSections() {
    const sectionsRef = useRef([]);
    const employeesCountRef = useRef(null);
    const achievementsCountRef = useRef(null);
    const unitsCountRef = useRef(null);

    useEffect(() => {
        // Register the ScrollTrigger plugin
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Create GSAP animations
            const sections = sectionsRef.current;

            // Animation for the counter sections
            sections.forEach((section, index) => {
                const textElement = section.querySelector('.counter-text');

                // Create the scroll trigger for pinning
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false
                });

                // Create the counter animation
                let counterElement;
                let endValue;

                switch (index) {
                    case 0:
                        counterElement = employeesCountRef.current;
                        endValue = 35053;
                        break;
                    case 1:
                        counterElement = achievementsCountRef.current;
                        endValue = 25;
                        break;
                    case 2:
                        counterElement = unitsCountRef.current;
                        endValue = 31;
                        break;
                }

                // Counter animation
                gsap.fromTo(
                    counterElement,
                    { innerHTML: "0" },
                    {
                        innerHTML: endValue,
                        duration: 2.5,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            toggleActions: "play none none reverse"
                        },
                        onUpdate: function () {
                            counterElement.innerHTML = Math.ceil(this.targets()[0].innerHTML);
                        }
                    }
                );



                // Text animation
                gsap.fromTo(
                    textElement,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.5,
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }

        return () => {
            // Clean up ScrollTrigger instances when component unmounts
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Add a reference to each section
    const addSectionRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div id='more' className="w-full">
            {/* Employees Section */}
            <section
                
                ref={addSectionRef}
                className="h-screen w-full flex justify-center items-center gap-20   bg-[#F7E6C4] text-white"
            >
                <div className="textstructure text-center  mt- px- ">

                    <div className="masker">

                        <div className='w-fit flex flex-col text-[#606C5D]  overflow-hidden '>
                            <h1 ref={employeesCountRef} className={`  ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[25vw] xl:text-[15vw] xl:leading-[12vw] uppercase leading-[22vw] font-[500] tracking `}>0</h1>
                            <h1 className={` ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[25vw] xl:text-[15vw] xl:leading-[12vw] uppercase leading-[22vw] font-[500] tracking `}>Employees</h1>
                        </div>
                    </div>

                </div>
            </section>

            {/* Achievements Section */}
            <section
                ref={addSectionRef}
                className="h-screen w-full flex flex-col items-center justify-center bg-[#E0D8B0]  text-white"
            >
              <div className="textstructure text-center  mt- px-14 ">

                    <div className="masker">

                        <div className='w-fit flex flex-col text-[#000]  overflow-hidden '>
                            <h1 ref={achievementsCountRef} className={`  ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[20vw] xl:text-[15vw] xl:leading-[12vw] uppercase leading-[18vw] font-[500] tracking  `}>25+</h1>
                            <h1 className={`  ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[20vw] xl:text-[15vw] xl:leading-[12vw] uppercase leading-[18vw] font-[500] tracking  `}>Achievements</h1>
                        </div>
                    </div>

                </div>
            </section>

            {/* Units Section */}
            <section
                ref={addSectionRef}
                className="h-screen w-full flex flex-col items-center justify-center bg-[#F7E6C4]  text-white"
            >
               <div className="textstructure text-center  mt- px-14 ">

                    <div className="masker">

                        <div className='w-fit flex flex-col text-[#606C5D]  overflow-hidden '>
                            <h1 ref={unitsCountRef} className={` ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[25vw] xl:text-[15vw] xl:leading-[12vw] uppercase leading-[22vw] font-[500] tracking `}>25+</h1>
                            <h1 className={` ${founderGrotesk.className} pt-[2vw] -mb-[.9vw] text-[25vw] xl:text-[15vw] xl:leading-[12vw]  leading-[22vw] uppercase font-[500] tracking `}>Units</h1>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}