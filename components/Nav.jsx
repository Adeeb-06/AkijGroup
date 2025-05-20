"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Track scroll position to change navbar appearance on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items 
  const navItems = ['Home', 'About', 'Brands', 'More', 'Workers'];

  // Framer Motion variants
  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const navListVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const navItemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`w-full px-6 py-6 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500 `}
    >
      {/* Logo with animation */}
      <motion.div
        className="relative w-[10vw] h-[10vh]"
        variants={logoVariants}
      >
        <Image fill alt='Logo' className='object-contain' src={'/logo.png'} />
      </motion.div>

      {/* Nav Links */}
      <nav>
        <motion.ul
          className="flex items-center justify-between w-full space-x-10 text-lg font-medium text-[#1a120b] font-mono"
          variants={navListVariants}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              variants={navItemVariants}
              whileHover={{
                scale: 1.05,
                color: "#B85C38",
                transition: { duration: 0.2 }
              }}
              className="cursor-pointer relative"
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#B85C38]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Mobile menu button */}

    </motion.header>
  )
}

export default Nav