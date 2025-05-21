'use client'
import React, { useEffect, useState, useRef } from 'react'
import localFont from 'next/font/local'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const foundersGrotesk = localFont({
    src: '../app/fonts/FoundersGroteskXCond-Bold.otf',
    display: 'swap',
})

const Cta = () => {
    const [rotate, setRotate] = useState(0)
    const textRefs = useRef([])
    const containerRef = useRef(null)
    
    // Reset references array for the text elements
    textRefs.current = []
    
    // Add to refs array function
    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el)
        }
    }
    
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)
        
      
        
        // Initial setup for text elements - hide them below
        gsap.set(textRefs.current, { 
            y: 200,
            opacity: 0
        })
        
        // Create staggered animation for text reveal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 0",
                end: "bottom 100%",
            }
        })
        
        tl.to(textRefs.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.2
        })
        
        return () => {
            // Clean up event listeners
            window.removeEventListener("mousemove", () => {})
            
            // Kill all animations
            if (tl) tl.kill()
            
            // Kill all ScrollTriggers
            ScrollTrigger.getAll().forEach(st => st.kill())
        }
    }, [])

    return (
        <div 
            ref={containerRef}
            data-scroll data-scroll-section
            className="w-full h-screen relative bg-[#E0D8B0] flex justify-center items-center px-14 flex-col"
        >
            <div className="textstructure px-14 text-center flex justify-center items-center flex-col">
                {["Innovation", "Across", "Every Industries"].map((item, index) => (
                    <div className="masker overflow-hidden" key={index}>
                        <div className='w-fit flex items-end overflow-hidden'>
                            <h1 
                                ref={addToRefs}
                                className={`${foundersGrotesk.className} pt-[2vw] -mb-[.9vw] text-[20vw] xl:text-[10vw] text-black uppercase leading-[.75] font-[500] tracking`}
                            >
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cta