import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    description: 'Clean, animated, and professional personal websites that make a strong first impression.',
    icon: 'user',
    features: ['3D animations', 'Smooth scrolling', 'Responsive design', 'Framer Motion'],
  },
  {
    id: 'fivem',
    title: 'FiveM Server Websites',
    description: 'Roleplay server sites with live status, team pages, changelogs, jobs, and public info.',
    icon: 'gamepad-2',
    features: ['Server status widget', 'Team showcase', 'Changelog system', 'Mobile responsive'],
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboards',
    description: 'Powerful control panels for managing users, logs, analytics, and server actions.',
    icon: 'layout-dashboard',
    features: ['Role-based access', 'Real-time data', 'Activity logs', 'Clean UI'],
  },
  {
    id: 'discord',
    title: 'Discord Bots',
    description: 'Custom bots for moderation, ticketing, suggestions, roles, and server automation.',
    icon: 'bot',
    features: ['Slash commands', 'Role permissions', 'SQL persistence', 'Embed UI'],
  },
  {
    id: 'scriptstore',
    title: 'Script Store Websites',
    description: 'Product showcase sites for scripts with categories, docs links, and cart-ready layout.',
    icon: 'shopping-bag',
    features: ['Product cards', 'Category filters', 'Feature lists', 'Requirements display'],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Web Apps',
    description: 'End-to-end applications with auth, database, REST API, and polished frontend.',
    icon: 'layers',
    features: ['Authentication', 'REST API', 'Database integration', 'Responsive UI'],
  },
  {
    id: 'redesign',
    title: 'UI/UX Redesigns',
    description: 'Transforming outdated or ugly interfaces into clean, modern, and usable products.',
    icon: 'sparkles',
    features: ['Visual audit', 'Component rebuild', 'Improved UX flow', 'Modern styling'],
  },
];
