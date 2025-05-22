'use client'

import React, { use, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';

const huBlackout = localFont({
  src: '../app/fonts/HUBlackout-Regular.ttf',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: '700',
});

gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
  const sectionRef = useRef(null);
  const teamMemeberRef = useRef(null)

 

  const teamMembers = [
    { name: 'Bashir Uddin', role: 'Managing Director' },
    { name: 'Bashir Uddin', role: 'Managing Director' },
    { name: 'Bashir Uddin', role: 'Managing Director' },
    { name: 'Bashir Uddin', role: 'Managing Director' },
    { name: 'Bashir Uddin', role: 'Managing Director' },
    { name: 'Bashir Uddin', role: 'Managing Director' },
  ];

  return (
    <div ref={sectionRef} id='team' className='w-full bg-[#FCFFE7] p-6 md:p-14 flex flex-col mb-20 gap-10'>
      <div className="team mt-20 flex justify-center items-center gap-20">
        <div className='container w-[80vw] flex-wrap flex gap-20 md:gap-[20vw] xl:gap-20 justify-center'>
          {teamMembers.map((itm, index) => (
            <div ref={teamMemeberRef} key={index} className="team-member xl:w-[18vw] w-[90vw] bg relative h-[55vh]">
              <div className="img relative w-full h-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
              </div>
              <div className={`bottom-0 mt-3 z-20 w-full text-[black] text-[6vw] md:text-[4vw] xl:text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                {itm.name}
              </div>
              <div className={`font-light bottom-0 z-20 w-full text-yellow-400 md:text-[4vw] text-[5vw] xl:text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                {itm.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
