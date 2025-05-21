"use client"

import Hero from "@/components/Hero";
import Since from "@/components/Since";
import About from "@/components/About";
import Workers from "@/components/Team";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
import Brands from "@/components/Brands";
import Employes from "@/components/Employes";





export default function Home() {
    useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  })
 
  return (
    <>
    
    <div className="main">
      
      <div className="content flex flex-col ga">
        <div className="hero">
          <Hero/>
        </div>
        <div className="since">
          <Since/>
        </div>
        <div className="about mb-20">
          <About/>
        </div>
        <Workers/>
        <div className="fet">
          <Employes/>

        </div>
        <div className="brands">
          <Brands/>
        </div>
        <div className="insideakij">

        </div>
      </div>
      <div className="footer">

      </div>
    </div>
    </>
  );
}
