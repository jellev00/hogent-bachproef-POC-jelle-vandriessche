import React from 'react';
import Clock from "../../../public/clock";
import Shield from "../../../public/shield";
import File from "../../../public/file";
import Layers from "../../../public/layers";
import Persons from "../../../public/persons";

const WhyDepGuard = () => {

    const reasons = [
        {
        icon: Clock,
        text: "Save developer time on changelog research",
        },
        {
        icon: Shield,
        text: "Reduce security risks proactively",
        },
        {
        icon: File,
        text: "No need to read endless changelogs",
        },
        {
        icon: Layers,
        text: "One source of truth for all dependencies",
        },
        {
        icon: Persons,
        text: "Designed for teams, not just individuals",
        },
    ];

  return (
    <section>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why DepGuard AI
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Built for Teams Who{" "}
                <span className="gradient-text">Ship Fast</span>
              </h2>
              <p className="text-lg text-base-400 mb-8">
                Stop wasting hours on dependency research. Let AI handle the heavy lifting 
                while your team focuses on building great software.
              </p>

              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <reason.icon className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-secondary font-medium">{reason.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-base-100 shadow-sm rounded-xl">
              <h3 className="text-lg font-semibold text-secondary mb-8 text-center">
                Average time saved per team
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-base-400">Hours per week</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">90%</p>
                  <p className="text-sm text-base-400">Faster CVE response</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-base-400">Dep visibility</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">1</p>
                  <p className="text-sm text-base-400">Source of truth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default WhyDepGuard