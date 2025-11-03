
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IntroSection from './components/IntroSection';
import GettingStarted from './components/GettingStarted';
import ResourceHub from './components/ResourceHub';
import Testimonials from './components/Testimonials';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SpecialtiesSection from './components/SpecialtiesSection';
import FeesInsuranceSection from './components/FeesInsuranceSection';
import FaqSection from './components/FaqSection';
import GoodFaithEstimateSection from './components/GoodFaithEstimateSection';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <SpecialtiesSection />
        <GettingStarted />
        <FeesInsuranceSection />
        <FaqSection />
        <Testimonials />
        <GallerySection />
        <ResourceHub />
        <ContactSection />
        <GoodFaithEstimateSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
