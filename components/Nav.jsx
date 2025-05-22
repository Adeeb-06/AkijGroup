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
  const menuRef = useRef(null);
  const backdropRef = useRef(null);
  const menuLinksRef = useRef([]);
  const hasMountedOnce = useRef(false);

  const [clicked, setClicked] = useState(false);

  const setMenuLinkRef = (el, index) => {
    menuLinksRef.current[index] = el;
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 });
    tl.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.3");
  }, []);

  useEffect(() => {
    if (!hasMountedOnce.current) {
      hasMountedOnce.current = true;
      return;
    }

    const tl = gsap.timeline();

    if (clicked) {
      tl.set(backdropRef.current, { display: 'block' });
      tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      tl.set(menuRef.current, { display: 'flex' });
      tl.fromTo(menuRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

      tl.fromTo(menuLinksRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.3"
      );
    } else {
      tl.to(menuLinksRef.current, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
      });

      tl.to(menuRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.4,
        onComplete: () => gsap.set(menuRef.current, { display: 'none' })
      }, "-=0.2");

      tl.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set(backdropRef.current, { display: 'none' })
      }, "-=0.4");
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
      <header ref={navRef} className="w-full sm:pr-16 py-6 flex items-center justify-between absolute z-50">
        <div ref={logoRef} className="relative w-[10vw] h-[10vh]">
          <Image fill alt='Logo' className='object-contain' src={'/logo.png'} />
        </div>

        <div onClick={() => setClicked(prev => !prev)} className="menu z-[1000] relative h-20 p-5 w-20 bg-[#E0D8B0] rounded-full cursor-pointer">
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

      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setClicked(false)}
        className="fixed top-0 left-0 w-full h-full bg-black/60 z-[90]"
        style={{ display: 'none' }}
      />

      {/* Menu */}
      <div
        ref={menuRef}
        className="absolute z-[99] top-0 left-0 w-full h-[30vh] bg-[#E0D8B0] flex flex-col sm:flex-row items-center justify-center gap-[5vw]"
        style={{ display: 'none' }}
      >
        <div
          onClick={() => setClicked(false)}
          className="absolute top-4 right-4 h-12 w-12 bg-[#C0B080] rounded-full cursor-pointer"
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
            className={`cursor-pointer ${grodita.className} text-[2.5vw] uppercase`}
          >
            {itm.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
