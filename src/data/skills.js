export const SKILL_CATEGORIES = [
  {
    category: 'FRONTEND',
    description: 'Crafting responsive, performant, and motion-driven interfaces.',
    skills: [
      { name: 'JavaScript', concepts: ['ES6+', 'Async / Promises', 'DOM Systems', 'Performance'] },
      { name: 'React', concepts: ['COMPONENTS', 'STATE', 'INTERACTION', 'EXPERIENCE'], highlight: true },
      { name: 'HTML5', concepts: ['Semantic Markup', 'Accessibility (ARIA)', 'SEO Optimization'] },
      { name: 'CSS3', concepts: ['Design Tokens', 'Custom Layouts', 'Keyframes & FX'] },
      { name: 'GSAP', concepts: ['MOTION', 'TIMING', 'TRANSITIONS'], highlight: true },
      { name: 'Three.js', concepts: ['SPACE', 'DEPTH', 'INTERACTION'], highlight: true }
    ]
  },
  {
    category: 'BACKEND',
    description: 'Building secure RESTful services, database logic, and API architecture.',
    skills: [
      { name: 'Python', concepts: ['LOGIC', 'BACKEND', 'AUTOMATION', 'SYSTEMS'], highlight: true },
      { name: 'Flask', concepts: ['Microservices', 'Session Security', 'Extension Architecture'] },
      { name: 'Django', concepts: ['ORMs', 'Django REST Framework', 'Auth Systems'] },
      { name: 'REST APIs', concepts: ['Contract Design', 'Idempotency', 'JSON Payloads'] }
    ]
  },
  {
    category: 'MOBILE',
    description: 'Extending user experience into fluid cross-platform native applications.',
    skills: [
      { name: 'React Native', concepts: ['Cross-Platform UI', 'Native Hooks', 'Mobile Layouts'] }
    ]
  },
  {
    category: 'DATA',
    description: 'Structuring relational schemas, document stores, and real-time state.',
    skills: [
      { name: 'PostgreSQL', concepts: ['Relational Schemas', 'Indexes', 'ACID Transactions'] },
      { name: 'Firebase', concepts: ['Realtime DB', 'Authentication', 'Cloud Functions'] },
      { name: 'Supabase', concepts: ['Postgres BaaS', 'Row Level Security', 'Realtime Subscriptions'] }
    ]
  },
  {
    category: 'INFRASTRUCTURE',
    description: 'Containerizing, queuing, and deploying reliable computing pipelines.',
    skills: [
      { name: 'Git & GitHub', concepts: ['Version Control', 'Workflow Automation', 'CI/CD'] },
      { name: 'Docker', concepts: ['Containerization', 'Docker Compose', 'Isolated Environments'] },
      { name: 'RabbitMQ', concepts: ['AMQP Queues', 'Message Brokers', 'Exchange Routing'] },
      { name: 'Celery', concepts: ['Async Tasks', 'Distributed Workers', 'Job Scheduling'] }
    ]
  }
];
