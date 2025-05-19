    'use client'
    import React, { useRef, useEffect } from 'react';
    import gsap from 'gsap';// Create a CSS file for styling

    const Cursor = () => {
      const cursorRef = useRef(null);

      useEffect(() => {
        const moveCursor = (e) => {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 1, // Adjust for smoothness
            delay:1.4
            // ease: 'power3.out',
          });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
          window.removeEventListener('mousemove', moveCursor); // Cleanup
        };
      }, []);

      return <div className="cursor" ref={cursorRef}></div>;
    };

    export default Cursor;