"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';
import gsap from 'gsap';

const grodita = localFont({
  src: '../app/fonts/Gordita-Regular.otf',
  display: 'swap',
});
const groditaBold = localFont({
  src: '../app/fonts/Gordita-Bold.otf',
  display: 'swap',
});

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  menuLinksRef.current = [];

  const [clicked, setClicked] = useState(false);

  const setMenuLinkRef = (el, index) => {
    menuLinksRef.current[index] = el;
  };

  useEffect(() => {
    if (navRef.current && logoRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0,  delay:3, duration: 0.6 }
      );

      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1,  duration: 0.7 },
        "-=0.3"
      );
    }
  }, []);

  useEffect(() => {
    if (clicked && menuRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(menuRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5,ease: 'power3.out' }
      );

      tl.fromTo(menuLinksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power3.out',
        },
        "-=0.2"
      );
    }
  }, [clicked]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.offsetTop - 100;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Team', id: 'team' },
    { name: 'More', id: 'more' },
    { name: 'Brands', id: 'brand' }
  ];

  return (
    <>
      <header
        ref={navRef}
        className="w-full sm:pr-16 py-6 flex items-center justify-between absolute z-50 transition-all duration-500 "
      >
  <div className={`${groditaBold.className} text-[#000] relative flex xl:h-[5vw] xl:w-[5vw] h-[15vw] w-[15vw]  xl:left-7 uppercase  lgo text-[4vw]`}>
        <Image alt='fs' fill src={'/logo.png'}/>
      </div>        

        <div
          onClick={() => setClicked(prev => !prev)}
          className="menu z-[1000] right-5 relative h-16 w-16 md:h-20 p-5 md:w-20 bg-[#E0D8B0] rounded-full cursor-pointer"
        >
          <div className='relative w-full h-full'>
            <Image
              alt={clicked ? 'Close Menu' : 'Open Menu'}
              fill
              className='object-contain'
              src={clicked ? '/close.svg' : '/menu.svg'}
            />
          </div>
        </div>
      </header>

      {clicked && (
        <div
          ref={menuRef}
          className="absolute z-[99] top-0 left-0 w-full h-[60vh] md:h-[30vh] bg-[#E0D8B0] flex flex-col sm:flex-row items-center justify-center gap-[5vw]"
        >
          <div
            onClick={() => setClicked(false)}
            className="absolute top-4 right-4 h-12 w-12 p-2 bg-[#C0B080] rounded-full cursor-pointer"
          >
            <Image
              alt="Close Menu"
              fill
              className="object-contain"
              src="/close.svg"
            />
          </div>

          {navItems.map((itm, index) => (
            <div
              key={index}
              ref={(el) => setMenuLinkRef(el, index)}
              onClick={() => {
                scrollToSection(itm.id);
                setClicked(false);
              }}
              className={`cursor-pointer ${grodita.className} text-[5vw] md:text-[2.5vw] uppercase`}
            >
              {itm.name}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Nav;
