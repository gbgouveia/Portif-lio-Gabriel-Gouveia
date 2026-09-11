export const es = {
  nav: {
    archive: 'ARCHIVO VIVO',
    observation: 'PERCEPCIÓN',
    desk: 'INVESTIGACIÓN',
    works: 'RESOLUCIONES',
    problems: 'PROBLEMAS',
    thinking: 'CÓMO PIENSO',
    learning: 'CERTIFICADOS',
    contact: 'CONTACTO',
    lang: 'ES'
  },
  opening: {
    quote: 'Hay cosas que solo notas cuando aprendes a mirar.',
    name: 'GABRIEL GOUVEIA',
    subtitle: 'Desarrollador. Creador. Fotógrafo.'
  },
  perceptual: {
    question: '¿QUÉ ESTÁS MIRANDO?',
    tags: {
      light: 'LUZ',
      context: 'CONTEXTO',
      gesture: 'GESTO',
      time: 'TIEMPO',
      distance: 'DISTANCIA',
      intention: 'INTENCIÓN'
    },
    explanations: {
      light: 'Donde el contraste atrae la mirada y define el enfoque principal.',
      context: 'El entorno real donde ocurre la solución o la fotografía.',
      gesture: 'La sutil intención detrás de una acción humana.',
      time: 'El momento exacto de captura o respuesta de la interfaz.',
      distance: 'La profundidad necesaria para entender la composición.',
      intention: 'La razón principal por la que algo existe o fue construido.'
    }
  },
  imageToCode: {
    narrative: 'IMAGEN → INFORMACIÓN → ESTRUCTURA → INTERFAZ',
    statement: 'Así es como empecé a ver el código.'
  },
  desk: {
    title: 'MESA DIGITAL DE INVESTIGACIÓN',
    question: '¿Qué es lo que realmente falla?',
    hint: 'Explora y selecciona fragmentos para reorganizar las conexiones funcionales.',
    elements: [
      { id: 'usr', label: 'usuario', category: 'humano', desc: 'Frustración con colas largas y tiempo perdido en interacciones innecesarias.' },
      { id: 'tm', label: 'tiempo', category: 'métrica', desc: 'Cuello de botella de 15 minutos en horas pico.' },
      { id: 'err', label: 'error', category: 'sistema', desc: 'Falta de sincronización entre peticiones del cliente y base de datos.' },
      { id: 'cst', label: 'costo', category: 'negocio', desc: 'Desperdicio de recursos operativos y registro manual de cupones.' },
      { id: 'rst', label: 'restricción', category: 'arquitectura', desc: 'Límites de latencia en dispositivos móviles.' },
      { id: 'cod', label: 'código', category: 'solución', desc: 'Mecanismo asíncrono desacoplado con validación local.' }
    ]
  },
  works: {
    title: 'ALGUNAS COSAS QUE TUVE QUE RESOLVER.',
    projects: [
      {
        slug: 'paprica',
        name: 'PÁPRICA',
        problem: '¿Cómo transformar una operación de e-commerce en una experiencia que no parezca una hoja de cálculo con botones?',
        neededExist: 'Un escaparate editorial elegante.',
        neededWork: 'Checkout transaccional atómico y seguro con Stripe API.',
        neededSimple: 'Gestión de productos y pedidos sin complejidad innecesaria.',
        techIntro: 'Para resolver esto, utilicé:',
        techs: ['Flask', 'PostgreSQL', 'Flask-Login', 'Stripe API', 'Render']
      },
      {
        slug: 'safeaccess',
        name: 'SAFEACCESS',
        problem: '¿Cómo garantizar un control estricto de privilegios y auditoría sin comprometer el rendimiento de la API?',
        neededExist: 'Verificación en tiempo real de permisos por rol (RBAC).',
        neededWork: 'Registros de seguridad auditarables criptográficamente.',
        neededSimple: 'Emisión de informes en PDF en un solo clic.',
        techIntro: 'Para resolver esto, utilicé:',
        techs: ['Python', 'Flask', 'RBAC Middleware', 'Audit Trail', 'PDF Engine']
      },
      {
        slug: 'notifyflow',
        name: 'NOTIFYFLOW',
        problem: '¿Cómo evitar que el envío síncrono de notificaciones bloquee la API en picos de tráfico?',
        neededExist: 'Arquitectura de mensajería asíncrona orientada a eventos.',
        neededWork: 'Procesamiento en segundo plano desacoplado mediante colas AMQP.',
        neededSimple: 'Escalado automático con fallbacks y reintentos exponenciales.',
        techIntro: 'Para resolver esto, utilicé:',
        techs: ['Django REST Framework', 'RabbitMQ', 'Celery', 'Docker', 'Redis']
      }
    ]
  },
  giveProblem: {
    title: 'DAME UN PROBLEMA.',
    categories: {
      system: 'SISTEMA',
      interface: 'INTERFAZ',
      automation: 'AUTOMATIZACIÓN',
      api: 'API',
      product: 'PRODUCTO',
      experience: 'EXPERIENCIA'
    },
    capabilities: {
      system: 'Arquitectura de microservicios, esquemas relacionales PostgreSQL y resiliencia de datos.',
      interface: 'Interfaces responsivas en React, diseño de interacción y movimiento GSAP fluido.',
      automation: 'Orquestación Celery/RabbitMQ, contenedores Docker y flujos de IA.',
      api: 'Contratos RESTful desacoplados, validación de payload, JWT auth y límites de tasa.',
      product: 'Transformar requisitos ambiguos en especificaciones técnicas y productos útiles.',
      experience: 'Dirección visual, fotografía editorial y ritmo de navegación fluido.'
    }
  },
  thinkingMode: {
    trigger: '¿Quieres ver cómo pienso?',
    title: 'MODO DE INVESTIGACIÓN INTERACTIVA',
    subtitle: 'Navega por el mapa mental de decisiones, fotografía y código.',
    close: 'CERRAR INVESTIGACIÓN ✕'
  },
  learning: {
    title: 'LO QUE APRENDÍ EN EL CAMINO.',
    subtitle: 'Documentos archivados de formación técnica y especialización.',
    view: 'ABRIR DOCUMENTO'
  },
  conclusion: {
    statement: 'AÚN HAY MUCHO POR CONSTRUIR.',
    subtext: 'Si has traído una idea hasta aquí, tal vez sea el momento de darle forma.',
    cta: 'HABLAR CON GABRIEL →',
    signature: 'GABRIEL GOUVEIA'
  },
  personalityFragments: [
    'Me gusta desmontar las cosas para entender por qué funcionan.',
    'A veces el problema está en el código.',
    'A veces está en la pregunta.',
    'Y a veces la mejor solución es no construir nada en absoluto.'
  ],
  photography: {
    label: 'FOTOGRAFÍA & PERCEPCIÓN',
    title: 'ARCHIVO VISUAL',
    text: 'La fotografía enseña a ver el detalle que el código organiza.'
  }
};
