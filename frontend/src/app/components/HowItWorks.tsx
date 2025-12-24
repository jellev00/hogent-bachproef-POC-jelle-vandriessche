import React from 'react'
import PersonPlus from "../../../public/person-plus";
import FolderPlus from "../../../public/folder-plus";
import Link from "../../../public/link";
import Scan from "../../../public/scan";
import Bel from "../../../public/bel";

const Works = () => {

  const steps = [
    {
      number: "01",
      icon: PersonPlus,
      title: "Create Your Account",
      description: "Sign up and create your company organization in seconds.",
    },
    {
      number: "02",
      icon: FolderPlus,
      title: "Add Team Members",
      description: "Invite developers, testers, and managers to your workspace.",
    },
    {
      number: "03",
      icon: Link,
      title: "Connect Your Projects",
      description: "Link GitHub repositories or upload dependency files directly.",
    },
    {
      number: "04",
      icon: Scan,
      title: "AI Scans Dependencies",
      description: "Our AI agent analyzes official sources and changelogs automatically.",
    },
    {
      number: "05",
      icon: Bel,
      title: "Receive Insights",
      description: "Get AI-generated summaries, update advice, and security alerts.",
    },
  ];

  return (
    <section id="how-it-works">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get Started in Five Simple Steps
        </h2>
        <p className="text-lg text-muted-foreground">
          From sign-up to actionable insights in minutes, not hours.
        </p>
      </div>

      <div>
        <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5" />
          
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
              
            return (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="text-white w-6 h-6" />
                </div>
                  
                <div>
                  <span className="text-xs font-bold text-primary mb-2 block">STEP {step.number}</span>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="text-sm text-base-400">{step.description}</p>
                </div>
                  
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Works