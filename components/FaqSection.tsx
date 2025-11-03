
import React, { useState } from 'react';
import { faqData } from '../constants';

const FaqItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-slate-200">
    <button
      onClick={onClick}
      className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
    >
      <h3 className="text-lg font-semibold text-brand-primary">{faq.question}</h3>
      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </div>
    </button>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="px-6 pb-5">
        <p className="text-brand-dark">{faq.answer}</p>
      </div>
    </div>
  </div>
);

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-brand-dark">
            Answering some common questions to help you get started on your therapy journey.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openFaq === faq.question}
              onClick={() => handleToggle(faq.question)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
