"use client"
import { Lexend } from 'next/font/google';
import localFont from 'next/font/local';
import React, { useRef } from 'react'
import Image from 'next/image';

const huBlackout = localFont({
  src: '../app/fonts/HUBlackout-Regular.ttf',
  display: 'swap',
});
const spaceGrotesk = localFont({
  src: '../app/fonts/SpaceGrotesk-Bold.ttf',
  display: 'swap',
});
const lexend = Lexend({
  subsets: ['latin'],
  weight: '700',
});



const Team = () => {
  const imgRef = useRef(null)
  const imgTextRef = useRef(null)
  const imgTriggerRef = useRef(null)
  return (
    <div id='team' data-scroll data-scroll-section data-scroll-speed="-.06" className='w-full rounded-tl-3xl rounded-tr-3xl  bg-[#FCFFE7] p'>
      <div ref={imgTriggerRef} className='w-full p-14 flex flex-col mb-32 gap-10'>
        <div ref={imgRef} className="akij w-full relative h-[70vh]">
          <div className="img">
            <div className="absolute inset-0 rounded-3xl bg-black/60 z-10" />
            <Image alt='sl' fill className='absolute object-cover rounded-3xl' src={'/akijuddin.jpg'} />
          </div>

          <div className={`container z-[99] absolute h-full   ${spaceGrotesk.className}`}>
            <div className="absolute font- uppercase right-0 m20 text-right pt- text-[#f7f3ee] text-[14vw] leading-none pr-10 z-[99]  ">
              Akij <br /> Uddin
            </div>
            <div className="absolute font- uppercase right-0 m20 text-right pt-10 text-[#f7f3ee] text-[2.2vw] bottom-0 mb-6 leading-none pr-10 z-[99]  ">
              Founder of Akij Group
            </div>
          </div>

        </div>

        <div className="team mt-20 flex flex-col gap-20">


          <div className='container flex gap-10 justify-center'>
            <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div>
            <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div>
            <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] uppercase font-semibold leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div>




          </div>
          <div className='container flex gap-10 justify-center'>
            <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div> <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div> <div className="w-1/4  bg m- relative h-[60vh]">
              <div className="img  relative w-full h-full">
                <div className="absolute   inset-0 bg-black/50 z-10" />
                {/* <Image fill alt='asl' className='object-cover  absolute' src={'/bashir.png'} /> */}
              </div>
              <div className={`  bottom-0 mt-3 z-20 w-full text-[black] text-[1.5vw] font-semibold uppercase leading-none ${huBlackout.className}`}>
                Bashir Uddin
              </div>
              <div className={` font-light  bottom-0 z-20 w-full text-yellow-400 text-[1.2vw] uppercase leading-none ${lexend.className}`}>
                Managing Director
              </div>
            </div>



          </div>
        </div>

      </div>
    </div>
  )
}

export default Team