
import React, { useState } from 'react';
import { services } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; isOpen: boolean; onClick: () => void }> = ({ service, isOpen, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500">
    <button onClick={onClick} className="w-full text-left p-6 flex items-center justify-between focus:outline-none">
      <div className="flex items-center">
        <div className="bg-brand-secondary/10 p-3 rounded-full mr-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-brand-primary font-serif">{service.name}</h3>
      </div>
      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </button>
    <div
      className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      style={{ transitionProperty: 'max-height, opacity, padding' }}
    >
      <div className="px-6 pb-6">
        <p className="text-brand-dark">{service.description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  const [openService, setOpenService] = useState<string | null>(services[0].name);

  const handleToggle = (serviceName: string) => {
    setOpenService(openService === serviceName ? null : serviceName);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">How We Can Help</h2>
          <p className="text-lg text-brand-dark">
            We offer specialized therapy services tailored to your unique needs, providing a safe space for growth and healing.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service) => (
            <ServiceCard 
              key={service.name} 
              service={service} 
              isOpen={openService === service.name} 
              onClick={() => handleToggle(service.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;