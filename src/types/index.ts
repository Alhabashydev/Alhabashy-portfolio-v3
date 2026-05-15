export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  demoUrl: string;
  sourceUrl: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  description: string;
  period: string;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}
