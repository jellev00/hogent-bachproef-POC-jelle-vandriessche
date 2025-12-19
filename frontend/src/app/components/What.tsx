import React from 'react'
import { FeatureCard } from "./FeatureCard"
import Box from "../../../public/box"

const What = () => {
  return (
    <div className="flex flex-col items-center gap-8">
        <p className="text-primary uppercase font-semibold">What is DepGuard AI</p>
        <h2 className="text-3xl font-bold text-secondary text-center w-2xl">
            Centralized Dependency Management for Your Entire Organization
        </h2>
        <p className="text-base-400 text-center w-2xl">DepGuard AI is a web application where software companies can create an organization, add their team members, and manage dependencies across all projects from a single dashboard.</p>

        <div className="w-full flex justify-between">
            <FeatureCard
                icon={<Box className="w-10 h-10"/>}
                title="Create Organization"
                description="Set up your company account and manage all your projects in one central location."
            />

            <FeatureCard
                icon={<Box className="w-10 h-10"/>}
                title="Create Organization"
                description="Set up your company account and manage all your projects in one central location."
            />

            <FeatureCard
                icon={<Box className="w-10 h-10"/>}
                title="Create Organization"
                description="Set up your company account and manage all your projects in one central location."
            />

            <FeatureCard
                icon={<Box className="w-10 h-10"/>}
                title="Create Organization"
                description="Set up your company account and manage all your projects in one central location."
            />
        </div>
    </div>
  )
}

export default What