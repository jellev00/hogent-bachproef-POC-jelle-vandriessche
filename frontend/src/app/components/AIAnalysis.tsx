import React from 'react';
import Image from "next/image";
import AIAnalysisImage from "../../../public/AIAnalysis.svg";
import File from "../../../public/file";
import Chart from "../../../public/chart";
import Security from "../../../public/security";
import Thunderbolt from "../../../public/thunderbolt";

const AIAnalysis = () => {

    const items = [
        {
          icon: File,
          title: "Human-Readable Summaries",
          description: "Complex changelogs translated into clear, actionable insights.",
        },
        {
          icon: Chart,
          title: "Update Importance Scoring",
          description: "Know instantly if an update is optional, recommended, or critical.",
        },
        {
          icon: Security,
          title: "Security Risk Detection",
          description: "Automatic alerts for known vulnerabilities and security patches.",
        },
                {
          icon: Thunderbolt,
          title: "Impact Analysis",
          description: "Understand how updates affect your project before upgrading.",
        },
    ]

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            AI-Powered Analysis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Smart Insights,{" "}
            <span className="gradient-text">Not Noise</span>
          </h2>
          <p className="text-lg text-base-400 mb-8">
            Our AI agent checks official dependency websites and changelogs to generate 
            human-readable summaries. No more wading through endless release notes.
          </p>

          <div className="space-y-4">
            {items.map((item) => {
              const IconComponent = item.icon;

              return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="text-primary w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">{item.title}</h4>
                  <p className="text-sm text-base-400">{item.description}</p>
                </div>
              </div>
            )
            })}
          </div>
        </div>

        <Image src={AIAnalysisImage} alt={"DepGuard AI Logo"} className="shadow-lg lg:shadow-2xl rounded-2xl"/>
      </div>
    </section>
  )
}

export default AIAnalysis