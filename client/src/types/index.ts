export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  year: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface TechStack {
  icon: React.ReactNode;
  name: string;
  color: string;
}

export interface Stats {
  value: string;
  label: string;
}

export interface ContactInfo {
  type: 'location' | 'email' | 'phone';
  title: string;
  value: string;
  icon: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
