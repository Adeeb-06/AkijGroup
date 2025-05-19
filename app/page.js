"use client"
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Since from "@/components/Since";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from 'gsap';
import About from "@/components/About";
import Workers from "@/components/Workers";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
import Brands from "@/components/Brands";





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
        <div className="about">
          <About/>
        </div>
        <Workers/>
        <div className="fet">
          <Features/>
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
