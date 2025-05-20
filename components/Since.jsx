"use client"
import React from 'react'

import {motion} from 'framer-motion'
import localFont from 'next/font/local';

const groditaBold = localFont({
  src: '../app/fonts/Gordita-Bold.otf',
  display: 'swap',
});




const Since = () => {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed=".000999" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1a120b] '>
        <div className="text border-b-1 border-t-1 border-zinc-500 flex   whitespace-nowrap overflow-hidden">
           <motion.h1  
           initial={{x:0}} 
           animate={{x:"-100%"}} 
           transition={{ease:"linear" , repeat:Infinity , duration:10}} 
           className={` ${groditaBold.className} font-semibold uppercase pt-10 -mt-[2vw] mb-[2vw] text-[#f7f3ee]   text-[24vw] leading-none pr-10 `}> Since 1950.</motion.h1>
           <motion.h1 
           initial={{x:0}} 
           animate={{x:"-100%"}} 
           transition={{ease:"linear" , repeat:Infinity , duration:10}} 
           className={` ${groditaBold.className}  font-semibold uppercase pt-10 text-[#f7f3ee]   -mt-[2vw] mb-[2vw] text-[24vw] leading-none pr-10 `}> since 1950.</motion.h1>
        </div>
    </div>
    </>
  )
}

export default Since