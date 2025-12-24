import React from 'react';
import Box from "../../../public/box";
import Sparkles from "../../../public/sparkles";
import Shield from "../../../public/shield";
import Persons from "../../../public/persons";
import Folder from "../../../public/folder";
import Pulse from "../../../public/pulse";
import Grid from "../../../public/grid";
import Bel from "../../../public/bel";

const KeyFeatures = () => {

    const features = [
        {
        icon: Box,
        title: "Dependency Monitoring",
        description: "Track dependencies across all your projects in real-time with automatic scanning.",
        },
        {
        icon: Sparkles,
        title: "AI Changelog Summaries",
        description: "Get human-readable summaries of complex changelogs, translated by AI.",
        },
        {
        icon: Shield,
        title: "Security Risk Detection",
        description: "Automatic alerts for known vulnerabilities and CVEs across your dependencies.",
        },
        {
        icon: Persons,
        title: "Team Collaboration",
        description: "Invite your entire team and manage permissions across projects.",
        },
        {
        icon: Folder,
        title: "Project-Based Overview",
        description: "Organize dependencies by project with clear status indicators.",
        },
        {
        icon: Pulse,
        title: "Clear Status Indicators",
        description: "Safe, Minor Update, Security Alert — know the state at a glance.",
        },
        {
        icon: Grid,
        title: "Central Dashboard",
        description: "One unified view for all your organization's dependency health.",
        },
        {
        icon: Bel,
        title: "Smart Notifications",
        description: "Get notified only when action is needed, not for every minor update.",
        },
    ];

  return (
    <section id="features">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Manage Dependencies</span>
          </h2>
          <p className="text-lg text-base-400">
            Powerful features designed for development teams who want to stay ahead of dependency risks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
                <div
                key={feature.title}
                className="p-6 bg-base-100 shadow-sm rounded-xl"
                >
                <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-5">
                    <IconComponent className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">{feature.title}</h3>
                <p className="text-base-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
            )
          })}
        </div>
    </section>
  )
}

export default KeyFeatures