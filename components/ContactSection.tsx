
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., send to an API)
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="contact" className="py-16 sm:py-24 bg-brand-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold font-serif mb-4">Thank You!</h2>
                    <p className="text-lg">Your message has been sent. We will get back to you within 24-48 hours.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Ready to Take the First Step?</h2>
                    <p className="text-lg text-brand-dark">
                        Contact us today for a free 15-minute consultation. We're here to answer your questions and help you begin your journey.
                    </p>
                </div>
                <div className="max-w-xl mx-auto bg-brand-light p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-brand-dark mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                            <textarea name="message" id="message" rows={5} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-brand-accent focus:border-brand-accent" placeholder="Briefly describe what you're looking for help with." onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;