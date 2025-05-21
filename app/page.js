"use client";

import Hero from "@/components/Hero";
import Since from "@/components/Since";
import About from "@/components/About";
import Workers from "@/components/Founder";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Brands from "@/components/Brands";
import Employes from "@/components/Employes";
import Founder from "@/components/Founder";
import Teams from "@/components/Teams";

export default function Home() {
  useEffect(() => {
    const isDesktop = window.innerWidth >= 500; // Adjust the breakpoint if needed

    if (isDesktop) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="main">
        <div className="content flex flex-col ga">
          <div className="hero">
            <Hero />
          </div>
          <div className="since">
            <Since />
          </div>
          <div className="about md:mb-20 ">
            <About />
          </div>
          <Founder />
          <Teams/>
          <div className="fet">
            <Employes />
          </div>
          <div className="brands">
            <Brands />
          </div>
          
        </div>
        
      </div>
    </>
  );
}
