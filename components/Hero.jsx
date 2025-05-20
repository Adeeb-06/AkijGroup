"use client"
import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import Image from 'next/image'
import localFont from 'next/font/local';
import gsap from 'gsap'
import { easeInOut } from 'framer-motion';

const futuraBold = localFont({
  src: "../app/fonts/Futura-Bold.ttf",
  display: "swap",
});

const Hero = () => {
  // Add state to control visibility until animations are ready
  const [isLoaded, setIsLoaded] = useState(false);
  
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);
  const imgRef = useRef(null);
  
  useEffect(() => {
    // Set elements to their initial state immediately
    gsap.set(headRef1.current, { y: 100, opacity: 0 });
    gsap.set(headRef2.current, { y: 100, opacity: 0 });
    gsap.set(imgRef.current, { opacity: 0 });
    
    // Show the container now that initial states are set
    setIsLoaded(true);
    
    // Create and start the animation timeline
    const tl = gsap.timeline();
    tl.to(headRef1.current, { y: 0, opacity: 1, duration: 0.9, delay: 0.6 })
      .to(headRef2.current, { y: 0, opacity: 1, duration: 0.9, stagger: 0.2 }, "-=0.8")
      .to(imgRef.current, { opacity: 1, transition: easeInOut, duration: 0.5 })

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#FCFFE7]'>
      <Nav />

      {/* Only show content after initial GSAP setup */}
      <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="up uppercase w-full flex relative items-center h-[45vh] bg--600">
          <div className={`text-[7vw] absolute ml-[2vw] tracking- font-medium mt-[10vw] w-[96vw] leading-[6.4vw] ${futuraBold.className}`}>
            <h1 ref={headRef1}>
              Decades of Impact
            </h1>
            <h1 ref={headRef2}>Grounded in True Integrity</h1>
          </div>
        </div>
        <div className="bott py-8 w-full h-[55vh] flex justify-center items-center bg--600">
          <div ref={imgRef} className="img py-8 w-[96vw] h-full relative">
            <Image fill alt="ssdfj" className='object-cover rounded-3xl' src={'/building.jpg'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero