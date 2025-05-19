"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

const founderGrotesk = localFont({
  src: "../app/fonts/FoundersGroteskXCond-Bold.otf",
  display: "swap",
});

const Brands = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(topRef.current, { y: "-100%", ease: "power2.inOut" }, 0);
    tl.to(bottomRef.current, { y: "100%", ease: "power2.inOut" }, 0);
    tl.to(contentRef.current, { scale: 1 }, 0.2);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        {/* TOP HALF */}
        <div
          ref={topRef}
          className="absolute bg-red-400 top-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-end justify-center"
        >
          <h1
            className={`${founderGrotesk.className} text-[24vw] text-white uppercase leading-none translate-y-[50%]`}
          >
            Brands
          </h1>
        </div>

        {/* BOTTOM HALF */}
        <div
          ref={bottomRef}
          className="absolute bg-blue-500 bottom-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-start justify-center"
        >
          <h1
            className={`${founderGrotesk.className} text-[24vw] text-white uppercase leading-none translate-y-[-50%]`}
          >
            Brands
          </h1>
        </div>

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white  scale-95 transition-all duration-1000 z-0"
        >
          <h2 className="text-6xl">Our Brands</h2>
        </div>
      </section>

      <div className="h-screen flex items-center justify-center bg-black text-white text-4xl">
        More Content Below
      </div>
    </>
  );
};

export default Brands;
