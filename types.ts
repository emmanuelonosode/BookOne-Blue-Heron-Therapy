
import type React from 'react';

export interface Service {
  name: string;
  description: string;
  icon: React.ReactElement;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Specialty {
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
