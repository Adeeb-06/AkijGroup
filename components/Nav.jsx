"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';
import gsap from 'gsap';

const grodita = localFont({
  src: '../app/fonts/Gordita-Regular.otf',
  display: 'swap',
});

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  // Reset refs array for the nav links
  const setLinksRef = (el, index) => {
    linksRef.current[index] = el;
  };

  // Initialize GSAP animations on component mount
  useEffect(() => {
    // Make sure we have the DOM elements before animating
    if (navRef.current && logoRef.current && linksRef.current.every(item => item)) {
      // Create a GSAP timeline for better control
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // Start with the navbar
      tl.fromTo(navRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      );
      
      // Animate the logo
      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7 },
        "-=0.3" // Start a bit before the navbar animation finishes
      );
      
      // Stagger animate the nav links
      tl.fromTo(linksRef.current,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1 // 0.1 second delay between each link animation
        },
        "-=0.4" // Start a bit before the logo animation finishes
      );
    }
  }, []);

  // Function to handle smooth scrolling when nav items are clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop - 100; // Offset to account for navbar height
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of scroll animation in milliseconds
      let start = null;

      // Easing function for smoother animation (easeInOutQuad)
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      // Animation function
      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Start animation
      requestAnimationFrame(animation);
    }
  };

  // Handle hover animations for nav items
  const handleMouseEnter = (index) => {
    gsap.to(linksRef.current[index], {
      scale: 1.05,
      color: "#B85C38",
      duration: 0.2
    });
    
    // Find the underline element (the div that's the second child)
    const underline = linksRef.current[index].querySelector('div');
    if (underline) {
      gsap.to(underline, {
        width: "100%",
        duration: 0.2
      });
    }
  };

  const handleMouseLeave = (index) => {
    gsap.to(linksRef.current[index], {
      scale: 1,
      color: "#1a120b",
      duration: 0.2
    });
    
    // Find the underline element
    const underline = linksRef.current[index].querySelector('div');
    if (underline) {
      gsap.to(underline, {
        width: 0,
        duration: 0.2
      });
    }
  };

  // Navigation items with their corresponding section IDs
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Team', id: 'team' },
    { name: 'More', id: 'more' },
    { name: 'Brands', id: 'brand' }
  ];

  return (
    <header
      ref={navRef}
      className={`w-full pr-16 py-6 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500`}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        className="relative w-[10vw] h-[10vh]"
      >
        <Image fill alt='Logo' className='object-contain' src={'/logo.png'} />
      </div>

      {/* Nav Links */}
      <nav>
        <ul className={`flex items-center justify-between w-full space-x-12 text-lg font-medium text-[#1a120b] font-mono ${grodita.className}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => setLinksRef(el, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer relative"
            >
              {item.name}
              <div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#B85C38]"
                style={{ width: 0 }} // Initial state controlled by GSAP
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav