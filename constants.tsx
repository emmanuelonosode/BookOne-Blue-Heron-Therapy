
import React from 'react';
import type { Service, Testimonial, Specialty, FaqItem } from './types';

export const services: Service[] = [
  {
    name: "Individual Therapy",
    description: "One-on-one sessions tailored to your specific needs. We'll work together to address challenges like anxiety, depression, life transitions, and self-esteem in a confidential and supportive setting.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  },
  {
    name: "Couples Counseling",
    description: "Strengthen your relationship, improve communication, and navigate conflicts effectively. We provide a neutral space for you and your partner to reconnect and build a healthier, more fulfilling partnership.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
   {
    name: "EMDR Therapy",
    description: "Eye Movement Desensitization and Reprocessing (EMDR) is a structured therapy that encourages the patient to briefly focus on the trauma memory while simultaneously experiencing bilateral stimulation (typically eye movements), which is associated with a reduction in the vividness and emotion of the trauma memories.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
];

export const specialties: Specialty[] = [
    {
        title: "Anxiety",
        description: "Anxiety can feel like a constant companion, but it doesn't have to be. We will work together to understand the root of your anxiety and develop practical coping skills to help you find calm and regain control.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        image: "https://images.unsplash.com/photo-1528569937392-b7b5d1155392?q=80&w=1974&auto=format&fit=crop"
    },
    {
        title: "Trauma & PTSD",
        description: "Healing from trauma is a journey of courage and resilience. Using evidence-based approaches like EMDR, I can help you process traumatic experiences in a safe and supportive environment, empowering you to move forward.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v5M12 9v10M16 11v8M3 21h18M5 4l1.83 2.196a1 1 0 00.77.374h8.798a1 1 0 00.77-.374L19 4" /></svg>,
        image: "https://images.unsplash.com/photo-1587474479295-6b2425456385?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Perinatal Mental Health",
        description: "The journey to parenthood is unique and can bring unexpected challenges. I provide compassionate support for individuals and couples navigating fertility, pregnancy, postpartum, and loss.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        image: "https://images.unsplash.com/photo-1604881991720-f91add269612?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Relationship Issues",
        description: "Whether you're struggling with communication, intimacy, or navigating conflict, I can help you and your partner develop the skills to build a stronger, more connected, and fulfilling relationship.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
    }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Sarah was truly life-changing. I felt heard, understood, and supported for the first time. I now have the tools to manage my anxiety and feel more confident than ever.",
    author: "A.G., Individual Client",
  },
  {
    quote: "Couples counseling helped us find our way back to each other. We learned how to communicate our needs and listen with empathy. Our relationship is stronger and healthier because of this experience.",
    author: "M. & T. K., Couples Clients",
  },
  {
    quote: "I was struggling after a major career change and felt completely lost. Therapy provided the guidance and clarity I needed to navigate this transition and build a new path forward.",
    author: "J.R., Individual Client",
  },
];

export const faqData: FaqItem[] = [
    {
        question: "What can I expect during our first therapy session?",
        answer: "Our first session, often called an intake session, is a time for us to get to know each other. We will discuss what brought you to therapy, your history, and your goals. It's also an opportunity for you to ask me any questions you may have. The goal is to create a collaborative plan for our work together."
    },
    {
        question: "How long are therapy sessions and how often will we meet?",
        answer: "Standard therapy sessions are 50 minutes long. Typically, we will meet once a week, especially in the beginning, to build momentum. However, the frequency of sessions can be adjusted based on your specific needs, goals, and progress."
    },
    {
        question: "How long will I be in therapy?",
        answer: "The duration of therapy varies greatly from person to person. Some clients come to therapy with a specific issue and may only need short-term support, while others with more complex challenges may benefit from longer-term therapy. We will regularly check in on your progress to ensure our work together is effective."
    },
    {
        question: "Do you offer a free consultation?",
        answer: "Yes, I offer a free 15-minute phone consultation for potential new clients. This is a great opportunity for you to share what you're looking for, ask questions about my approach, and see if we feel like a good fit before committing to a full session."
    },
    {
        question: "What is your cancellation policy?",
        answer: "I have a 24-hour cancellation policy. If you need to cancel or reschedule your appointment, please provide at least 24 hours' notice. Sessions cancelled with less than 24 hours' notice will be charged the full session fee."
    }
];
