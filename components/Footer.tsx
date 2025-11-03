
import React from 'react';

const Footer: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const links = ['About', 'Services', 'Specialties', 'Fees', 'FAQ', 'Contact'];

    return (
        <footer className="bg-brand-dark text-brand-light/70">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-white font-serif mb-4">Blue Heron Therapy NJ</h3>
                        <p className="mb-4">Providing a safe space for healing and growth in New Jersey.</p>
                        <p>&copy; {new Date().getFullYear()} Blue Heron Therapy NJ. All rights reserved.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white font-serif mb-4">Contact</h3>
                        <p>123 Wellness Lane, Suite 100</p>
                        <p>Maplewood, NJ 07040</p>
                        <p className="mt-2">
                            <a href="tel:555-123-4567" className="hover:text-white transition-colors">(555) 123-4567</a>
                        </p>
                        <p>
                            <a href="mailto:contact@blueherontherapynj.com" className="hover:text-white transition-colors">contact@blueherontherapynj.com</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white font-serif mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {links.map(link => (
                                <li key={link}>
                                    <a 
                                        href={`#${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                                        onClick={(e) => handleNavClick(e, link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
