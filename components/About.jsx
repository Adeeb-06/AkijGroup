"use client";
import localFont from 'next/font/local';
import React, { useEffect, useRef } from 'react';
import { Lexend } from 'next/font/google';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, SplitText);


const grodita = localFont({
  src: '../app/fonts/Gordita-Regular.otf',
  display: 'swap',
});

const About = () => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null)



  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }
  const tl = gsap.timeline()

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 2,
        start: "top center",
        end: "bottom 80%"
      },
      color: "#000",
      stagger: 2,
      duration: 16,
      markers: true,
    })
  
    return () => {
      reveal.kill()
   
    }
  }, [])

  const text = "Founded in 1940, Akij Group is one of Bangladesh's leading industrial conglomerates. Starting from a small jute business, it has expanded into textiles, cement, ceramics, food, beverages, electronics, and more. With over 70,000 employees, Akij is known for its commitment to quality, innovation, and ethical values. Beyond business, the group actively supports education, healthcare, and community development—driving progress for both industry and society."

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-screen   bg-[#E0D8B0] p-14 rounded-tl-3xl rounded-tr-3xl">
      <div className={`${grodita.className}   relative w-full mt-8 pt-3`}>
        <div ref={triggerRef} className='  '>

          {text.split("").map((letter, index) => (<span className='reveal-text text-[#120b026a] tracking-tight leading-[4vw] text-[3.6vw] font-semibold ' ref={setlettersRef} key={index}>{letter}</span>))}
        </div>
      </div>

      <div className="line border-1 border-zinc-100 w-full mt-16"></div>

     
    </div>
  );
};

export default About;
