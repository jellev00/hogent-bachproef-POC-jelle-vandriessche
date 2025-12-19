import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    className = '',
    iconClassName = '',
}) => {
  return (
    <div className="card flex justify-center items-center bg-base-100 w-64 shadow-sm rounded-xl">
        <div className="flex justify-center items-center bg-primary/20 text-primary w-14 h-14 rounded-lg p-4 mt-6">
          {icon}
        </div>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary">{title}</h2>
            <p className="text-base-400">{description}</p>
        </div>
    </div>
  )
}
