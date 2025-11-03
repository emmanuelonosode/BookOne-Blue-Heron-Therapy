
import React from 'react';

const GoodFaithEstimateSection: React.FC = () => {
  return (
    <section id="good-faith-estimate" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-primary mb-4">Good Faith Estimate Notice</h2>
          <div className="text-left text-brand-dark space-y-4 text-sm bg-white p-8 rounded-lg shadow-md">
            <p>
              Under Section 2799B-6 of the Public Health Service Act, health care providers and health care facilities are required to inform individuals who are not enrolled in a plan or coverage or a Federal health care program, or not seeking to file a claim with their plan or coverage <strong className="font-semibold">both orally and in writing</strong> of their ability, upon request or at the time of scheduling health care items and services, to receive a “Good Faith Estimate” of expected charges.
            </p>
            <p>
              <strong className="font-semibold">You have the right to receive a “Good Faith Estimate”</strong> explaining how much your medical care will cost. Under the law, health care providers need to give patients who don’t have insurance or who are not using insurance an estimate of the bill for medical items and services.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.</li>
              <li>Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.</li>
              <li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
              <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
            </ul>
            <p>
              For questions or more information about your right to a Good Faith Estimate, visit <a href="http://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline">www.cms.gov/nosurprises</a> or call 1-800-985-3059.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoodFaithEstimateSection;
