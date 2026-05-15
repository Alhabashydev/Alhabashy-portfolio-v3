import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fivem-website',
    title: 'FiveM Server Website',
    description: 'A modern roleplay server website with live server status, team showcase, job listings, changelog, and full support system.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    tags: ['React', 'FiveM', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'A clean, role-based admin panel for managing players, server actions, activity logs, and staff tools with real-time updates.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    tags: ['React', 'Backend', 'Dashboards'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'script-store',
    title: 'Script Store Website',
    description: 'A product showcase site for FiveM scripts with category filtering, requirements, feature lists, documentation links, and cart layout.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    tags: ['React', 'FiveM', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'discord-bot',
    title: 'Discord Control Bot',
    description: 'A powerful Discord bot for server management, moderation, ticket system, embed builder, and role-based permissions.',
    tech: ['Node.js', 'Discord.js', 'MySQL'],
    tags: ['Discord Bots', 'Backend'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'portfolio',
    title: 'Animated Portfolio',
    description: 'A smooth 3D animated developer portfolio focused on performance, clean UI, motion design, and personal branding.',
    tech: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
    tags: ['React', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#',
  },
];

export const projectFilters = ['All', 'React', 'FiveM', 'Backend', 'Discord Bots', 'Dashboards', 'UI/UX'];
