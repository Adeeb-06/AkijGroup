"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";

const founderGrotesk = localFont({
    src: "../app/fonts/FoundersGroteskXCond-Bold.otf",
    display: "swap",
});

const Brands = () => {
    const sectionRef = useRef(null);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const contentRef = useRef(null);


    const brandLogos = [
  "afbl.svg",
  "akij-central-workshop.svg",
  "akij-ceramics.svg",
  "akij-city-center.svg",
  "akij-flour.svg",
  "akij-jute.svg",
  "akij-match-factory.svg",
  "akij-particle-board.svg",
  "akij-plastic.svg",
  "akij-poly-fiber.svg",
  "akij-printing-and-package.svg",
  "akij-shipping-line.svg",
  "akij-sk-akij.svg",
  "akij-steel-mills.svg",
  "akij-tea-state.svg",
  "akij-textile.svg",
  "brand-1.png",
  "brand-2.png",
  "brand-3.png",
  "brand-4.png",
  "brand-5.png",
  "brand-6.png",
  "brand-7.png",
  "brand-8.png",
  "brand-9.png",
  "brand-10.png",
  "brand-11.png",
  "brand-12.png",
  "brand-13.png",
  "brand-14.png",
  "brand-15.png",
  "brand-16.png",
  "brand-17.png",
  "info.png",
  "brand-18.jpg",
];


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
                    className="absolute bg-[#f4d0a4] top-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-end justify-center"
                >
                    <h1
                        className={`${founderGrotesk.className} text-[24vw] text-black uppercase leading-none translate-y-[50%]`}
                    >
                        Brands
                    </h1>
                </div>

                {/* BOTTOM HALF */}
                <div
                    ref={bottomRef}
                    className="absolute bg-[#f4d0a4] bottom-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-start justify-center"
                >
                    <h1
                        className={`${founderGrotesk.className} text-[24vw] text-black uppercase leading-none translate-y-[-50%]`}
                    >
                        Brands
                    </h1>
                </div>

                {/* CONTENT */}
                {/* CONTENT */}
                {/* CONTENT */}
                <div
                    ref={contentRef}
                    className="relative h-screen inset-0 flex items-center justify-center bg-white scale-95 transition-all duration-1000 z-0 px-4"
                >
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-7 w-full max-w-6xl">
                        {brandLogos.map((item, index) => (
                            <div className="p-3 bg-[#] rounded-md   hover:scale-105 transition-transform">

                            <div
                                key={index}
                                className="relative w-full h-[10vh] "
                            >
                                <Image
                                    fill
                                    alt={`Brand logo ${index + 1}`}
                                    className="object-fill"
                                    src={`/${item}`}
                                />
                            </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>

            <div className="h-screen flex items-center justify-center bg-black text-white text-4xl">
                More Content Below
            </div>
        </>
    );
};

export default Brands;
