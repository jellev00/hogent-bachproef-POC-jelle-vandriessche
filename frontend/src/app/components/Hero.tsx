import React from 'react'
import ArrowRight from "../../../public/arrow_right";
import Play from "../../../public/play";
import Check from "../../../public/circle-check-fill";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 mt-20">
        <div className="badge flex items-center gap-2 bg-primary/20 text-primary rounded-full p-4">
            <div className="bg-accent h-2 w-2 rounded-full"></div>
            AI-Powered Depedency Intelligence
        </div>

        <h1 className="text-5xl font-bold text-secondary text-center w-3xl">
            Stay Ahead of Dependency Risks with
            <span className="text-primary"> AI-Powered Insights</span>
        </h1>

        <p className="text-base-400 text-center w-xl">DepGuard AI monitors your project dependencies, summarizes updates with AI, and highlights security risks before they become problems.</p>

        <div className="flex gap-4">
            <a className="btn bg-primary text-primary-content border-none w-48 py-6">Get Started <ArrowRight className="text-primary-content" /></a>
            <a className="btn bg-base-100 text-secondary border-base-400 w-48 py-6"><Play className="text-secondary w-3" /> View Roadmap</a>
        </div>

        <div className="flex gap-6">
            <div className="flex items-center gap-2">
                <Check className="text-accent"/>
                <p>No credit card required</p>
            </div>

            <div className="flex items-center gap-2">
                <Check className="text-accent"/>
                <p>Free tier available</p>
            </div>

            <div className="flex items-center gap-2">
                <Check className="text-accent"/>
                <p>Set up in minutes</p>
            </div>
        </div>
    </div>
  )
}

export default Hero