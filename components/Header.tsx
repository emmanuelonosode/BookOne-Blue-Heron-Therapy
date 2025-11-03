
import React, { useState } from 'react';

const BlueHeronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 2C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2z" fill="#F8FAFC"/>
    <path d="M63.5 54.5c-1.1 0-2 .9-2 2v10.4c0 1.1-.9 2-2 2H40.4c-1.1 0-2-.9-2-2V48.1c0-1.1.9-2 2-2h12.1c.8 0 1.6.5 1.9 1.3l2.8 6.6c.3.7.1 1.5-.5 2-.6.5-1.5.3-2-.4l-2.4-5.6H42.4v16.8h15.1V56.5c0-1.1.9-2 2-2s2 .9 2 2v10.4c0 2.2-1.8 4-4 4H40.4c-2.2 0-4-1.8-4-4V48.1c0-2.2 1.8-4 4-4h12.1c1.5 0 2.9 1 3.5 2.4l3.1 7.2c.8 1.9.1 4.1-1.6 5.2-1.8 1.1-4 .4-5-1.4l-2.8-6.5z" fill="#4F46E5"/>
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Services', 'Specialties', 'Fees', 'FAQ', 'Gallery', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        const headerOffset = 80; // height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };
  
  return (
    <header className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <BlueHeronIcon className="w-10 h-10" />
          <span className="text-xl font-bold font-serif text-brand-primary">Blue Heron Therapy</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} onClick={(e) => handleNavClick(e, link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))} className="text-brand-dark hover:text-brand-secondary transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hidden md:inline-block bg-brand-accent text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105">
          Request Consultation
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 flex flex-col items-center space-y-3">
          {navLinks.map(link => (
             <a key={link} href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} onClick={(e) => handleNavClick(e, link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))} className="block text-brand-dark hover:text-brand-secondary transition-colors duration-300">
              {link}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full text-center bg-brand-accent text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 mt-2">
            Request Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
