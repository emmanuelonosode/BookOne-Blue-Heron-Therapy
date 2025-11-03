
import React from 'react';

const FeesInsuranceSection: React.FC = () => {
  return (
    <section id="fees" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Investment & Insurance</h2>
          <p className="text-lg text-brand-dark">
            Transparent pricing to help you make an informed decision about your mental health journey.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">Session Rates</h3>
            <p className="text-4xl font-bold text-brand-dark mb-2">$175</p>
            <p className="text-brand-dark/80 mb-4">per 50-minute individual session</p>
            <p className="text-brand-dark">Payment is due at the time of your session. I accept all major credit cards, HSA, and FSA cards.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">Insurance Information</h3>
            <p className="text-brand-dark mb-4">
              I am an <strong className="font-semibold">out-of-network provider</strong> for all insurance plans. This means that while I don't bill insurance companies directly, I can provide you with a monthly "superbill" (a detailed receipt) that you can submit to your insurance company for potential reimbursement.
            </p>
            <p className="text-brand-dark">
              I recommend contacting your insurance provider directly to inquire about your out-of-network benefits for mental health services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesInsuranceSection;
