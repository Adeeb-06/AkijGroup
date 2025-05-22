'use client'

import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Teams from './Teams';
import { cubicBezier } from 'framer-motion';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const spaceGrotesk = localFont({
  src: '../app/fonts/SpaceGrotesk-Bold.ttf',
  display: 'swap',
});


const Founder = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

   useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top 20%",
        end:"bottom 80%"
      }
    })

    tl.from(imgRef.current,{
      y:50,
      opacity:0,
      duration:1,
      transition: cubicBezier
    })
  
    return () => {
      
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="-.06"
      className='w-full xl:rounded-tl-3xl xl:rounded-tr-3xl bg-[#FCFFE7] p'
    >
      <div ref={imgRef}  className='w-full p-6 md:p-14 flex flex-col gap-10'>
        <div className="akij w-full relative h-[75vh]">
          <div className="img">
            <div className="absolute inset-0 rounded-3xl bg-black/60 z-10" />
            <Image alt='sl' fill className='absolute object-cover rounded-3xl' src={'/akijuddin.jpg'} />
          </div>

          <div className={`container z-[99] md:w-1/2 w-full flex justify-center items-center md:right-0 absolute h-full ${spaceGrotesk.className}`}>
            <div className="absolute bottom-0 mb-[10vw] md:mb-[3.5vw] font- uppercase m20 md:text-right text-center text-[#f7f3ee] text-[13.4vw] md:text-[14vw] leading-none md:pr-10 z-[99] img-text">
              Akij Uddin
            </div>
            <div className="absolute bottom-0 mb-[3vw] md:right-0 md:mb-[1.5vw] font- uppercase m20 md:text-right text-[#f7f3ee] text-[4.2vw] md:text-[2.3vw] leading-none md:pr-10 z-[99] img-text">
              Founder of Akij Group
            </div>
          </div>
        </div>

     
     
      </div>
    </div>
  );
};

export default Founder;
