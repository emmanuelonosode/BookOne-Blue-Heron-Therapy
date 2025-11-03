
import React from 'react';
import { specialties } from '../constants';

const SpecialtiesSection: React.FC = () => {
  return (
    <section id="specialties" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Areas of Specialization</h2>
          <p className="text-lg text-brand-dark">
            I specialize in helping adults navigate a variety of life's challenges. Here are some of my key focus areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((specialty) => (
            <div key={specialty.title} className="relative rounded-lg overflow-hidden shadow-lg group">
              <img src={specialty.image} alt={specialty.title} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="bg-brand-secondary/80 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{specialty.title}</h3>
                <p className="text-brand-light/90">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
