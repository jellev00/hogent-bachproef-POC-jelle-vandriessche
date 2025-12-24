import React from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import DASHBOARD from "../../public/Dashboard.svg";
import WhatIs from "./components/WhatIs";
import HowItWorks from "./components/HowItWorks";
import AIAnalysis from "./components/AIAnalysis";
import KeyFeatures from "./components/KeyFeatures";
import Roadmap from "./components/Roadmap";
import WhyDepGuard from "./components/WhyDepGuard";
import CTA from "./components/CTA";

const page = () => {
  return (
    <div className="py-8 w-[80%] mx-auto">
      <Navbar />
      <main>
        <Hero />
        <div className="divider mb-32"></div>
        <WhatIs />
        <div className="divider my-32"></div>
        <HowItWorks />
        <div className="divider my-32"></div>
        <AIAnalysis />
        <div className="divider my-32"></div>
        <KeyFeatures />
        <div className="divider my-32"></div>
        <Roadmap />
        <div className="divider my-32"></div>
        <WhyDepGuard />
        <div className="divider my-32"></div>
        <CTA />
      </main>
    </div>
  )
}

export default page