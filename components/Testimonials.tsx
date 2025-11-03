
import React from 'react';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Words From Our Clients</h2>
          <p className="text-lg text-brand-dark">
            Discover how therapy has made a positive impact on the lives of others.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <div className="flex-grow">
                <svg className="w-10 h-10 text-brand-secondary/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.33 8.21C7.87 9.87 7 11.85 7 14.12c0 3.73 2.13 6.67 5.33 8.25-.93 1.2-2.13 2.13-3.6 2.73-1.47.6-2.93.9-4.4.9-3.33 0-6.13-1.2-8.4-3.6C-1.33 20-2 16.8-2 13.07c0-4.4 1.4-8.13 4.2-11.2S8.53-2 13.07-2c1.47 0 2.87.33 4.2.93-.6 1.4-.9 2.87-.9 4.4 0 1.93.53 3.73 1.6 5.4-1.2.6-2.47 1.07-3.8 1.47zM25.33 8.21c-1.46 1.66-2.33 3.64-2.33 5.91 0 3.73 2.13 6.67 5.33 8.25-.93 1.2-2.13 2.13-3.6 2.73-1.47.6-2.93.9-4.4.9-3.33 0-6.13-1.2-8.4-3.6-2.27-2.4-3.4-5.6-3.4-9.33 0-4.4 1.4-8.13 4.2-11.2S14.53-2 19.07-2c1.47 0 2.87.33 4.2.93-.6 1.4-.9 2.87-.9 4.4 0 1.93.53 3.73 1.6 5.4-1.2.6-2.47 1.07-3.8 1.47z"></path>
                </svg>
                <p className="text-brand-dark italic">"{testimonial.quote}"</p>
              </div>
              <footer className="mt-6">
                <p className="font-bold text-brand-primary">{testimonial.author}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;