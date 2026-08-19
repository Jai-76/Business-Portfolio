export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  outcome: string;
  visual: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6';
  category: string;
  link?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  rating: number;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}
