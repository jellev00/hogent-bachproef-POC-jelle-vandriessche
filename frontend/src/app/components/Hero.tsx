import React from 'react';
import Image from "next/image";
import DASHBOARD from "../../../public/Dashboard.svg";
import ArrowRight from "../../../public/arrow_right";
import Play from "../../../public/play";
import Check from "../../../public/circle-check-fill";

const Hero = () => {
  return (
    <section className="mt-20 pb-20 md:pb-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
                <div className="bg-accent h-2 w-2 rounded-full"></div>
                AI-Powered Dependency Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6 animate-slide-up">
                Stay Ahead of Dependency Risks with{" "}
                <span className="text-primary">AI-Powered Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-base-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                DepGuard AI monitors your project dependencies, summarizes updates with AI, and highlights security risks before they become problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a className="btn bg-primary text-primary-content border-none w-48 py-6">Get Started <ArrowRight className="text-primary-content" /></a>
                <a className="btn bg-base-100 text-secondary border-base-400 w-48 py-6"><Play className="text-secondary w-3" /> View Roadmap</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 text-sm">
                <div className="flex items-center gap-2">
                    <Check className="text-accent"/>
                    No credit card required
                </div>
                <div className="flex items-center gap-2">
                    <Check className="text-accent"/>
                    Free tier available
                </div>
                <div className="flex items-center gap-2">
                    <Check className="text-accent"/>
                    Set up in minutes
                </div>
            </div>
        </div>
        <div className="max-w-[90%] mx-auto">
            <Image src={DASHBOARD} alt={"DepGuard AI Logo"} className="mt-14 shadow-lg lg:shadow-2xl rounded-2xl"/>
        </div>
    </section>
  )
}

export default Hero