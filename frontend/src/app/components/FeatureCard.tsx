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
    <div className="p-6 text-center bg-base-100 shadow-sm rounded-xl">
      <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-5">
        {icon}
      </div>
        <h3 className="text-lg font-semibold text-secondary mb-3">{title}</h3>
        <p className="text-base-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
