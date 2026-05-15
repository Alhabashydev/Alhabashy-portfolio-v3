import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building pixel-perfect, responsive UIs with React, TypeScript, and modern CSS frameworks.',
    icon: 'monitor',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Designing robust APIs, server logic, and scalable systems using Node.js and Express.',
    icon: 'server',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Crafting smooth, intuitive, and visually refined interfaces that feel natural to use.',
    icon: 'pen-tool',
  },
  {
    id: 'database',
    title: 'Database Systems',
    description: 'Structuring and querying data efficiently with MySQL, MongoDB, and SQL databases.',
    icon: 'database',
  },
  {
    id: 'fivem',
    title: 'FiveM / Lua Development',
    description: 'Creating polished in-game UIs, scripts, and server systems using QBCore, ESX, and ox_lib.',
    icon: 'gamepad-2',
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Connecting frontends with third-party services, REST APIs, and custom backend endpoints.',
    icon: 'plug',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Development',
    description: 'Building clean admin panels with real-time data, role permissions, and smooth UX.',
    icon: 'layout-dashboard',
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Tuning load times, reducing bundle sizes, and improving rendering efficiency.',
    icon: 'zap',
  },
];
