import type { TechCategory } from '../types';

export const technologies: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core languages I use to build interfaces, logic, scripts, and backend systems.',
    items: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'Lua', icon: 'SiLua' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'SQL', icon: 'SiMysql' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Frameworks',
    description: 'Modern libraries and frameworks for building fast, reactive, and animated user interfaces.',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Vite', icon: 'SiVite' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Framer Motion', icon: 'SiFramer' },
      { name: 'Three.js', icon: 'SiThreedotjs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Runtime',
    description: 'Server-side tools and runtimes for handling APIs, authentication, and system logic.',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'REST APIs', icon: 'SiPostman' },
      { name: 'JWT Auth', icon: 'SiJsonwebtokens' },
      { name: 'Socket.io', icon: 'SiSocketdotio' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Data storage solutions for structured and unstructured data across different scales.',
    items: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'Redis', icon: 'SiRedis' },
    ],
  },
  {
    id: 'design',
    title: 'UI / UX & Design',
    description: 'Design tools and practices for building visually refined and user-friendly products.',
    items: [
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Responsive Design', icon: 'SiCss3' },
      { name: 'Glassmorphism', icon: 'SiReact' },
      { name: 'FiveM NUI', icon: 'SiLua' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Development workflow tools, deployment platforms, and productivity utilities.',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'npm', icon: 'SiNpm' },
    ],
  },
  {
    id: 'bots',
    title: 'Bots & Game Dev',
    description: 'Specialized in Discord bot systems and FiveM roleplay server development.',
    items: [
      { name: 'Discord.js', icon: 'SiDiscord' },
      { name: 'FiveM', icon: 'SiLua' },
      { name: 'QBCore', icon: 'SiLua' },
      { name: 'ESX', icon: 'SiLua' },
      { name: 'ox_lib', icon: 'SiLua' },
    ],
  },
];
