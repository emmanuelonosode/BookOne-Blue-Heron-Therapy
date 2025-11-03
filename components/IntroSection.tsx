
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-2/5">
            <img 
              src="https://static.wixstatic.com/media/cdf4b4_87533f4c2db84e0fa8b1c260d459726d~mv2.png/v1/fill/w_435,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/26c8ae06-a249-4e3c-af12-199241b704d6_edited.png"
              alt="Sarah McKinley, a friendly and professional therapist" 
              className="rounded-lg shadow-2xl object-cover w-full h-auto aspect-[4/5]"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Your Guide on the Path to Healing</h2>
            <p className="text-lg text-brand-dark mb-4">
              Welcome! I'm Sarah McKinley, a Licensed Clinical Social Worker (LCSW). My goal is to create a warm, non-judgmental, and collaborative space where you feel safe to explore your thoughts, feelings, and experiences. I believe that you are the expert of your own life, and my role is to help you connect with your inner wisdom and strength.
            </p>
            <p className="text-brand-dark mb-4">
              My therapeutic approach is integrative and tailored to your unique needs. I draw from evidence-based practices such as Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques. I specialize in working with adults struggling with anxiety, trauma, relationship issues, and perinatal mental health challenges.
            </p>
            <p className="text-brand-dark mb-6">
              Together, we can work to identify patterns that may be holding you back, heal from past wounds, and develop coping skills to navigate life's challenges with greater ease and confidence. Taking the first step to begin therapy can feel intimidating, and I commend you for being here.
            </p>
            <a href="#contact" className="inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-primary transition-colors duration-300 transform hover:scale-105">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
