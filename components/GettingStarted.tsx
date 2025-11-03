
import React from 'react';

const steps = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    title: "1. Free Consultation",
    description: "Reach out to schedule a complimentary 15-minute phone consultation. This is a chance for us to connect, discuss your needs, and see if we're a good fit."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "2. Initial Assessment",
    description: "Your first session is a comprehensive intake where we'll delve deeper into your history and goals for therapy. This helps create a personalized treatment plan."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.136a1.76 1.76 0 011.164-2.288l5.143-1.714a1.76 1.76 0 012.288 1.164z" /></svg>,
    title: "3. Your Therapy Journey",
    description: "We'll meet regularly (typically weekly) for 50-minute sessions. Each session is a collaborative effort, focused on helping you achieve your goals and improve your well-being."
  }
];

const GettingStarted: React.FC = () => {
  return (
    <section id="getting-started" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Your Journey Starts Here</h2>
          <p className="text-lg text-brand-dark">
            Taking the first step can be the hardest part. Here’s a simple guide to what you can expect when starting therapy with us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4 bg-brand-secondary/10 rounded-full w-16 h-16 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-primary mb-2">{step.title}</h3>
              <p className="text-brand-dark">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;