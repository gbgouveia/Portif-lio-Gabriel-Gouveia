export const en = {
  nav: {
    archive: 'LIVING ARCHIVE',
    observation: 'PERCEPTION',
    desk: 'INVESTIGATION',
    works: 'RESOLUTIONS',
    problems: 'PROBLEMS',
    thinking: 'HOW I THINK',
    learning: 'CERTIFICATES',
    contact: 'CONTACT',
    lang: 'EN'
  },
  opening: {
    quote: 'Some things you only notice when you learn how to look.',
    name: 'GABRIEL GOUVEIA',
    subtitle: 'Developer. Creator. Photographer.'
  },
  perceptual: {
    question: 'WHAT ARE YOU LOOKING AT?',
    tags: {
      light: 'LIGHT',
      context: 'CONTEXT',
      gesture: 'GESTURE',
      time: 'TIME',
      distance: 'DISTANCE',
      intention: 'INTENTION'
    },
    explanations: {
      light: 'Where contrast draws the eye and defines primary focus.',
      context: 'The real environment where the solution or photograph occurs.',
      gesture: 'The subtle intention behind human action.',
      time: 'The exact moment of capture or interface response.',
      distance: 'The spatial depth needed to understand the composition.',
      intention: 'The core reason why something exists or was built.'
    }
  },
  imageToCode: {
    narrative: 'IMAGE → INFORMATION → STRUCTURE → INTERFACE',
    statement: 'That is how I began to see code.'
  },
  desk: {
    title: 'DIGITAL INVESTIGATION DESK',
    question: 'What is actually wrong?',
    hint: 'Explore and select fragments to reorganize functional connections.',
    elements: [
      { id: 'usr', label: 'user', category: 'human', desc: 'Frustration with long cafeteria queues and wasted break time.' },
      { id: 'tm', label: 'time', category: 'metric', desc: 'Operational bottleneck of 15 minutes during peak hours.' },
      { id: 'err', label: 'error', category: 'system', desc: 'State mismatch between client requests and database records.' },
      { id: 'cst', label: 'cost', category: 'business', desc: 'Wasted operational resources and manual voucher entry.' },
      { id: 'rst', label: 'constraint', category: 'architecture', desc: 'Network latency limits on mobile devices.' },
      { id: 'cod', label: 'code', category: 'solution', desc: 'Decoupled asynchronous queue worker with local validation.' }
    ]
  },
  works: {
    title: 'SOME THINGS I HAD TO SOLVE.',
    projects: [
      {
        slug: 'paprica',
        name: 'PÁPRICA',
        problem: 'How to transform an e-commerce operation into an experience that doesn\'t feel like a spreadsheet with buttons?',
        neededExist: 'An elegant editorial storefront.',
        neededWork: 'Atomic, secure transactional checkout with Stripe API.',
        neededSimple: 'Product and order management without unnecessary friction.',
        techIntro: 'To solve this, I used:',
        techs: ['Flask', 'PostgreSQL', 'Flask-Login', 'Stripe API', 'Render']
      },
      {
        slug: 'safeaccess',
        name: 'SAFEACCESS',
        problem: 'How to enforce strict privilege controls and auditability without sacrificing API throughput?',
        neededExist: 'Real-time role-based access control (RBAC).',
        neededWork: 'Cryptographically auditable security log assertions.',
        neededSimple: 'One-click automated PDF security reporting.',
        techIntro: 'To solve this, I used:',
        techs: ['Python', 'Flask', 'RBAC Middleware', 'Audit Trail', 'PDF Engine']
      },
      {
        slug: 'notifyflow',
        name: 'NOTIFYFLOW',
        problem: 'How to prevent synchronous notification dispatches from blocking the API under high traffic spikes?',
        neededExist: 'Event-driven asynchronous messaging architecture.',
        neededWork: 'Decoupled background processing using AMQP queues.',
        neededSimple: 'Automated scaling with dead-letter fallback and exponential retries.',
        techIntro: 'To solve this, I used:',
        techs: ['Django REST Framework', 'RabbitMQ', 'Celery', 'Docker', 'Redis']
      }
    ]
  },
  giveProblem: {
    title: 'GIVE ME A PROBLEM.',
    categories: {
      system: 'SYSTEM',
      interface: 'INTERFACE',
      automation: 'AUTOMATION',
      api: 'API',
      product: 'PRODUCT',
      experience: 'EXPERIENCE'
    },
    capabilities: {
      system: 'Microservices architecture, PostgreSQL relational schemas, and data resilience.',
      interface: 'Responsive React interfaces, interaction design, accessibility, and fluid GSAP motion.',
      automation: 'Celery/RabbitMQ task orchestration, Docker containerization, and AI workflows.',
      api: 'Decoupled RESTful contracts, payload validation, JWT auth, and rate limiting.',
      product: 'Transforming ambiguous requirements into technical specifications and usable products.',
      experience: 'Visual art direction, editorial photography, and fluid navigation pacing.'
    }
  },
  thinkingMode: {
    trigger: 'Want to see how I think?',
    title: 'INTERACTIVE INVESTIGATION MODE',
    subtitle: 'Navigate the interconnected mental map of decisions, photography, and code.',
    close: 'CLOSE INVESTIGATION ✕'
  },
  learning: {
    title: 'WHAT I LEARNED ALONG THE WAY.',
    subtitle: 'Archived technical education and specialization documents.',
    view: 'OPEN DOCUMENT'
  },
  conclusion: {
    statement: 'THERE IS STILL SOMETHING TO BUILD.',
    subtext: 'If you brought an idea this far, perhaps it is time to give it shape.',
    cta: 'TALK TO GABRIEL →',
    signature: 'GABRIEL GOUVEIA'
  },
  personalityFragments: [
    'I like to disassemble things to understand why they work.',
    'Sometimes the problem is in the code.',
    'Sometimes it is in the question.',
    'And sometimes the best solution is not building anything at all.'
  ],
  photography: {
    label: 'PHOTOGRAPHY & PERCEPTION',
    title: 'VISUAL ARCHIVE',
    text: 'Photography teaches us to see the details that code structures.'
  }
};
