"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
import Cta from "./Cta";
import Footer from "./Footer";

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

    // Split logos into groups for different rows
    const group1 = brandLogos.slice(0, 10);
    const group2 = brandLogos.slice(10, 20);
    const group3 = brandLogos.slice(20, 30);
    const group4 = brandLogos.slice(30);

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
            <style jsx global>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                
                .scroll-left {
                    animation: scroll-left 25s linear infinite;
                }
                
                .scroll-right {
                    animation: scroll-right 25s linear infinite;
                }
                
                .marquee-container {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                
                .marquee-content {
                    display: flex;
                    width: fit-content;
                }
            `}</style>

            <section
                ref={sectionRef}
                className="relative h-screen w-full overflow-hidden bg-black"
            >
                {/* TOP HALF */}
                <div
                    ref={topRef}
                    className="absolute bg-[#E0D8B0] top-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-end justify-center"
                >
                    <h1
                        className={`${founderGrotesk.className} text-[24vw] text-black uppercase leading-none translate-y-[60%]`}
                    >
                        Brands
                    </h1>
                </div>

                {/* BOTTOM HALF */}
                <div
                    ref={bottomRef}
                    className="absolute bg-[#E0D8B0] bottom-0 left-0 w-full h-1/2 overflow-hidden z-20 flex items-start justify-center"
                >
                    <h1
                        className={`${founderGrotesk.className} text-[24vw] text-black uppercase leading-none translate-y-[-40%]`}
                    >
                        Brands
                    </h1>
                </div>

                {/* CONTENT */}
                <div
                    ref={contentRef}
                    className="relative inset-0 flex flex-col justify-center bg-[#FCFFE7] scale-95 transition-all duration-1000 z-0 overflow-hidden h-full py-8"
                >
                    <div className="flex flex-col gap-8">
                        {/* First Row - Left to Right */}
                        <MarqueeRow logos={group1} speed={25} direction="left" />
                        
                        {/* Second Row - Right to Left */}
                        <MarqueeRow logos={group2} speed={20} direction="right" />
                        
                        {/* Third Row - Left to Right */}
                        <MarqueeRow logos={group3} speed={30} direction="left" />
                        
                        {/* Fourth Row - Right to Left */}
                        <MarqueeRow logos={[...group4, ...group1.slice(0, 5)]} speed={15} direction="right" />
                    </div>
                </div>
            </section>
            <div className="w-full h-screen ">
                <Cta/>
                <div className="line bg-zinc-200 w-full h-[2px] "></div>
                <Footer/>
            </div>
        </>
    );
};

const MarqueeRow = ({ logos, speed = 25, direction = "left" }) => {
    // Duplicate the logos array to ensure smooth looping
    const duplicatedLogos = [...logos, ...logos];
    
    // Adjust animation class based on direction
    const animationClass = direction === "left" ? "scroll-left" : "scroll-right";
    
    // Adjust animation duration based on speed (lower number = faster)
    const animationStyle = { animationDuration: `${speed}s` };
    
    return (
        <div className="marquee-container">
            <div 
                className={`marquee-content ${animationClass}`}
                style={animationStyle}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 p-3 mx-4 hover:scale-105 transition-transform"
                    >
                        <div className="relative w-20 h-20">
                            <Image
                                fill
                                alt={`Brand logo ${index + 1}`}
                                className="object-contain"
                                src={`/${logo}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;