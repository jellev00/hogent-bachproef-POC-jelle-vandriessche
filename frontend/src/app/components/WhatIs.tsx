import React from 'react';
import { FeatureCard } from "./FeatureCard";
import Factory from "../../../public/factory";
import Persons from "../../../public/persons";
import Branches from "../../../public/branches";
import FileCode from "../../../public/file-code";


const What = () => {
  return (
    <section className="flex flex-col items-center gap-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase mb-4 block">
                What is DepGuard AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Centralized Dependency Management for Your Entire Organization
            </h2>
            <p className="text-lg text-base-400">
                DepGuard AI is a web application where software companies can create an organization, 
                add their team members, and manage dependencies across all projects from a single dashboard.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
                icon={<Factory className="w-6 h-6"/>}
                title="Create Organization"
                description="Set up your company account and manage all your projects in one central location."
            />

            <FeatureCard
                icon={<Persons className="w-6 h-6"/>}
                title="Add Team Members"
                description="Invite developers, testers, and project managers to collaborate on dependency management."
            />

            <FeatureCard
                icon={<Branches className="w-6 h-6"/>}
                title="Connect via GitHub"
                description="Link your repositories directly for automatic dependency detection and monitoring."
            />

            <FeatureCard
                icon={<FileCode className="w-6 h-6"/>}
                title="Upload Dependency Files"
                description="Or simply upload your package.json, requirements.txt, pom.xml and more."
            />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-base-400 mb-6">Supports all major package ecosystems</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["npm", "pip", "Maven", "NuGet"].map((eco) => (
              <span key={eco} className="text-base-400 font-medium text-sm md:text-base">
                {eco}
              </span>
            ))}
          </div>
        </div>

    </section>
  )
}

export default What