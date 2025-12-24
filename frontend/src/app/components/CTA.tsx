import React from 'react';
import ArrowRight from "../../../public/arrow_right";

const CTA = () => {
  return (
    <section>
        <div className="max-w-4xl mx-auto bg-base-100 shadow-sm rounded-xl">
          <div className="absolute inset-0 rounded-3xl" />
          
          <div className="p-8 md:p-12 lg:p-16 rounded-2xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get Started Today
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Start Monitoring Your Dependencies{" "}
              <span className="gradient-text">the Smart Way</span>
            </h2>
            
            <p className="text-lg text-base-400 max-w-2xl mx-auto mb-10">
              Join development teams who trust DepGuard AI to keep their projects secure and up-to-date. 
              No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="btn bg-primary text-primary-content border-none w-48 py-6">Request Access <ArrowRight className="text-primary-content" /></div>
                <div className="btn bg-base-100 text-secondary border-base-400 w-48 py-6">Schedule a Demo</div>
            </div>

            <p className="text-sm text-base-400 mt-8">
              Free tier includes up to 3 projects • No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </div>
    </section>
  )
}

export default CTA