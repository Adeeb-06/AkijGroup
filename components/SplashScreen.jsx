'use client';

import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gorditaBold = localFont({
  src: '../app/fonts/Gordita-Bold.otf',
  display: 'swap',
});

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-[1000000] top-0 left-0 w-full h-full bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`${gorditaBold.className} text-[#FCFFE7] uppercase text-[12vw]`}
          >
            Akij Group.
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
