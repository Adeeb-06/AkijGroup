"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Nav from './Nav'
import localFont from 'next/font/local'
import { Lexend } from 'next/font/google'
 
const lexend = Lexend({
  subsets: ['latin'],
  weight: '700'
})


const Hero = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"   className="relative h-screen w-full overflow-hidden bg-[#f7f3ee] text-[#1a120b] font-sans">
      <Nav />

      <div data-scroll className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={` ${lexend.className} text-center overflow-hidden text-[7vw] leading-[1.1] font font-titleFont tracking-tight`}
        >
          A Legacy <span className="text-[#B85C38]">Engineered</span><br />for Impact
        </motion.div>
      </div>

      {/* Optional: Subheadline or CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-16 w-full flex justify-center"
      >
        <p className="text-lg text-gray-700">Discover the journey behind one of Bangladesh's largest industrial empires.</p>
      </motion.div>
    </div>
  )
}

export default Hero
