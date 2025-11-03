
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663050739359-a4261779f6ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlcmFwaXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500')" }}
    >
      <div className="absolute inset-0 bg-brand-dark/60"></div>
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Find Your Strength, Rediscover Your Balance.
          </h1>
          <p className="text-lg md:text-xl text-brand-light mb-8 max-w-2xl mx-auto">
            Compassionate, client-centered therapy to help you navigate life's challenges and build a more fulfilling future.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;