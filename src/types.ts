export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}

export interface FaqItem {
  question: string;
  answer: string;
}