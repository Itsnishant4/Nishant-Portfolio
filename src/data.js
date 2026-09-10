/* Central content for the portfolio. Edit values here. */

export const LINKS = {
  email: 'patelnishant2006@email.com',
  phone: '+919773005701',
  github: 'https://github.com/Itsnishant4',
  linkedin: 'https://www.linkedin.com/in/nishant-patel-295203283/',
  youtube: 'https://www.youtube.com/@codewithnishant4',
};

/* All projects — used on Home (subset) and full Projects page  */
export const FULL_STACK_PROJECTS = [
  {
    index: '01',
    name: 'AiTodoCRM',
    type: 'Full-Stack',
    year: '2025',
    desc: 'AI-powered CRM for freelancers with task management, project management, and AI-driven insights to streamline workflow and productivity.',
    points: [
      'AI-driven insights and automation layered over core CRM workflows for tasks and projects.',
      'Built for real freelance usage with a focus on speed, clarity, and day-to-day productivity.',
    ],
    stack: ['React.js', 'Next.js', 'OpenAI API', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    live: 'https://aitodocrm.in',
    liveLabel: 'Live',
  },
  {
    index: '02',
    name: 'LeadSpotter',
    type: 'Full-Stack',
    year: '2025',
    desc: 'Lead generation and tracking platform serving 200+ live users with real-time insights.',
    points: [
      'Serving 200+ live users in production with stable, real-time performance.',
      'Lead tracking workflows with API-driven insights and dashboards.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://leadspotter.in',
    liveLabel: 'Live',
  },
  {
    index: '03',
    name: 'Team11AI',
    type: 'Full-Stack',
    year: '2025',
    desc: 'AI-powered fantasy sports platform with 2000+ active users.',
    points: [
      'Scaled to 2000+ active users with performance-tuned APIs and database queries.',
      'AI-driven team insights delivered through a fast, mobile-friendly UI.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://team11ai.in',
    liveLabel: 'Live',
  },
];export const BACKEND_PROJECTS = [
  {
    index: '04',
    name: 'NSM Roadways CRM',
    type: 'Full-Stack',
    year: '2025',
    desc: 'ERP-style transporter CRM built with the MERN stack — comprehensive management for transportation operations.',
    points: [
      'Role-based dashboards with API-driven insights for logistics operations.',
      'Performance-tuned APIs and database queries for high-traffic modules.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript'],
    live: 'https://nsmadmin.nsmroadways.com',
    liveLabel: 'Live',
  },
  {
    index: '05',
    name: 'Kasba Natural',
    type: 'Backend',
    year: '2025',
    desc: 'E-commerce app built on Laravel with a full storefront, catalog, and order flow.',
    points: [
      'Server-rendered Laravel storefront with MySQL-backed catalog and orders.',
      'Styled end to end with Tailwind for a clean shopping experience.',
    ],
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    live: 'https://kasbanatural.com',
    liveLabel: 'Live',
  },
  {
    index: '06',
    name: 'Onboarding Screen React',
    type: 'Library',
    year: '2025',
    desc: 'NPM package for building customizable onboarding screens in React — walkthroughs and tutorials with a simple, flexible API.',
    points: [
      'Published to NPM with docs site and live examples.',
      'Customizable steps, styling, and flow for any React app.',
    ],
    stack: ['React', 'NPM', 'TypeScript', 'Tailwind CSS'],
    live: 'https://www.npmjs.com/package/onbording-screen-react',
    liveLabel: 'NPM',
  },
];

/* Projects shown on the home page (no type distinction) */
export const HOME_PROJECTS = [
  FULL_STACK_PROJECTS[1], // LeadSpotter
  FULL_STACK_PROJECTS[2], // Team11AI
];

export const SKILLS = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'React Native', 'Electron', 'Redux', 'Tailwind CSS', 'Motion'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Laravel', 'REST APIs'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Prisma'] },
  { title: 'DevOps & Tools', items: ['Docker', 'Git', 'GCP', 'Linux'] },
  { title: 'Commerce', items: ['Shopify', 'Liquid', 'Payment APIs', 'SEO'] },
];

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    org: 'DigiSoftwar',
    meta: '2024 – Present',
    loc: 'Remote',
    points: [
      'Full-time full-stack development across MERN applications with dynamic dashboards, role-based UI, and API-driven insights.',
      'Built complex systems for logistics and e-commerce platforms.',
      'Improved API and database performance across high-traffic modules.',
    ],
  },
];

export const STATS = [
  { tag: 'Projects', num: '12+', label: 'Full-stack, e-commerce & mobile apps shipped' },
  { tag: 'NPM', num: '1', label: 'Published package · onboarding-screen-react' },
  { tag: 'Commerce', num: '3+', label: 'Shopify / Laravel stores live in production' },
  { tag: 'Mobile', num: '3', label: 'Cross-platform apps with React Native & Expo' },
];

export const FACTS = [
  ['Based in', 'Rajkot, Gujarat, India'],
  ['Currently', 'Full Stack Developer · Freelance'],
  ['Degree', 'BCA · Atmiya University'],
  ['Graduating', '2026'],
  ['GitHub', 'Itsnishant4'],
  ['Open to', 'Full-time roles · Freelance projects'],
];

export const COURSEWORK = [
  'MERN Stack', 'Laravel', 'Shopify & Liquid', 'React Native',
  'REST APIs', 'Docker', 'Firebase', 'UI/UX',
];

/* OSS contributions */
export const OSS = [
  {
    title: 'Shadcn UI theme gallery for React apps',
    repo: 'Itsnishant4/brand-cn',
    repoUrl: 'https://github.com/Itsnishant4',
    desc: 'Open-source Shadcn UI themes (ChatGPT, Gemini, etc.) with a live demo site.',
    status: 'maintainer',
  },
  {
    title: 'Customizable onboarding screens for React',
    repo: 'onbording-screen-react (NPM)',
    repoUrl: 'https://www.npmjs.com/package/onbording-screen-react',
    desc: 'Published NPM package for walkthroughs and tutorials in React apps.',
    status: 'maintainer',
  },
];
