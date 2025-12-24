import React from 'react';
import CircleCheck from "../../../public/circle-check";
import Clock from "../../../public/clock";
import Circle from "../../../public/circle";

const Roadmap = () => {

    const quarters = [
        {
        quarter: "Q1 2026",
        status: "in-progress",
        items: [
            "User accounts & organizations",
            "Project creation",
            "Dependency scanning",
            "Basic AI summaries",
        ],
        },
        {
        quarter: "Q1 & Q2 2026",
        status: "planned",
        items: [
            "Advanced AI risk scoring",
            "GitHub auto-sync",
            "Email notifications",
            "Improved security detection",
        ],
        },
        {
        quarter: "Q2 2026",
        status: "planned",
        items: [
            "CI/CD integration",
            // "Slack / Teams notifications",
            // "Custom update policies",
            "Multi-language support",
        ],
        },
    ];

    const statusConfig = {
        released: {
        label: "Released",
        icon: CircleCheck,
        badgeClass: "bg-success/10 text-success border-success/20",
        dotClass: "bg-success",
        },
        "in-progress": {
        label: "In Progress",
        icon: Clock,
        badgeClass: "bg-warning/10 text-warning border-warning/20",
        dotClass: "bg-warning",
        },
        planned: {
        label: "Planned",
        icon: Circle,
        badgeClass: "bg-muted text-muted-foreground border-border",
        dotClass: "bg-muted-foreground",
        },
    };

  return (
    <section id="roadmap">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Product Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Building the Future of{" "}
            <span className="gradient-text">Dependency Management</span>
          </h2>
          <p className="text-lg text-base-400">
            See what we've shipped, what we're working on, and what's coming next.
          </p>
        </div>

        <div className="block">
          <div className="grid lg:grid-cols-3 gap-8">
            {quarters.map((quarter, index) => {
              const config = statusConfig[quarter.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;

              return (
                <div key={quarter.quarter}>
                  <div className="p-6 h-full bg-base-100 shadow-sm rounded-xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-secondary">{quarter.quarter}</h3>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config.badgeClass}`}>
                        <StatusIcon className="w-3 h-3" />
                        {config.label}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {quarter.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CircleCheck className={`w-5 h-5 mt-0.5 ${
                            quarter.status === "released" ? "text-success" : "text-base-400/40"
                          }`} />
                          <span className={`text-sm ${
                            quarter.status === "released" ? "text-secondary" : "text-base-400"
                          }`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-sm text-base-400">
            Have a feature request?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Let us know →
            </a>
          </p>
        </div> */}
    </section>
  )
}

export default Roadmap