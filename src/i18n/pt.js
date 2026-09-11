export const pt = {
  audio: {
    soundOn: 'SOM LIGADO',
    soundOff: 'SOM DESLIGADO'
  },
  hero: {
    location: 'BRASIL // 2026',
    headline: 'DESENVOLVIMENTO, TECNOLOGIA E EXPERIÊNCIA',
    subtext: 'Eu transformo ideias em experiências digitais de alto impacto.',
    ctaWork: 'VER PROJETOS',
    ctaAbout: 'INVESTIGAÇÃO'
  },
  nav: {
    archive: 'ARQUIVO VIVO',
    observation: 'PERCEPÇÃO',
    desk: 'INVESTIGAÇÃO',
    works: 'RESOLUÇÕES',
    problems: 'PROBLEMAS',
    thinking: 'COMO PENSO',
    learning: 'CERTIFICADOS',
    contact: 'CONTATO',
    lang: 'PT-BR'
  },
  opening: {
    quote: 'Tem coisa que você só percebe quando aprende a olhar.',
    name: 'GABRIEL GOUVEIA',
    subtitle: 'Desenvolvedor. Criador. Fotógrafo.'
  },
  perceptual: {
    question: 'O QUE VOCÊ ESTÁ VENDO?',
    tags: {
      light: 'LUZ',
      context: 'CONTEXTO',
      gesture: 'GESTO',
      time: 'TEMPO',
      distance: 'DISTÂNCIA',
      intention: 'INTENÇÃO'
    },
    explanations: {
      light: 'Onde o contraste atrai o olhar e define o foco primário.',
      context: 'O ambiente real onde a solução ou a imagem acontece.',
      gesture: 'A intenção sutil por trás de uma ação humana.',
      time: 'O momento exato de captura ou a resposta da interface.',
      distance: 'O espaço necessário para entender a composição inteira.',
      intention: 'A razão pela qual algo existe ou foi construído.'
    }
  },
  imageToCode: {
    narrative: 'IMAGEM → INFORMAÇÃO → ESTRUTURA → INTERFACE',
    statement: 'Foi assim que comecei a enxergar código.'
  },
  desk: {
    title: 'MESA DIGITAL DE INVESTIGAÇÃO',
    question: 'O que realmente está errado?',
    hint: 'Explore e selecione fragmentos para reorganizar as conexões funcionais.',
    elements: [
      { id: 'usr', label: 'usuário', category: 'humano', desc: 'Frustração com filas e tempo perdido em interações desnecessárias.' },
      { id: 'tm', label: 'tempo', category: 'métrica', desc: 'Gargalo operacional de 15 minutos em cada pico de atendimento.' },
      { id: 'err', label: 'erro', category: 'sistema', desc: 'Falha de sincronização de estado entre cliente e servidor.' },
      { id: 'cst', label: 'custo', category: 'negócio', desc: 'Desperdício de recursos operacionais e retrabalho manual.' },
      { id: 'rst', label: 'restrição', category: 'arquitetura', desc: 'Limites de conectividade e tempo de resposta em dispositivos móveis.' },
      { id: 'cod', label: 'código', category: 'solução', desc: 'Mecanismo desacoplado assíncrono com retries e validação local.' }
    ]
  },
  works: {
    title: 'ALGUMAS COISAS QUE EU TIVE QUE RESOLVER.',
    projects: [
      {
        slug: 'paprica',
        name: 'PÁPRICA',
        problem: 'Como transformar uma operação de e-commerce em uma experiência que não pareça uma planilha com botões?',
        neededExist: 'Uma vitrine editorial elegante e fluida.',
        neededWork: 'Checkout transacional atômico e seguro com Stripe API.',
        neededSimple: 'Gestão de produtos e pedidos sem complexidade excessiva.',
        techIntro: 'Para resolver isso, utilizei:',
        techs: ['Flask', 'PostgreSQL', 'Flask-Login', 'Stripe API', 'Render']
      },
      {
        slug: 'safeaccess',
        name: 'SAFEACCESS',
        problem: 'Como garantir controle de privilégios estrito e auditoria sem comprometer a latência da aplicação?',
        neededExist: 'Verificação em tempo real de permissões por papel (RBAC).',
        neededWork: 'Logs de segurança com asserções cryptograficamente auditáveis.',
        neededSimple: 'Emissão de relatórios em PDF com 1 clique.',
        techIntro: 'Para resolver isso, utilizei:',
        techs: ['Python', 'Flask', 'RBAC Middleware', 'Audit Trail', 'PDF Engine']
      },
      {
        slug: 'notifyflow',
        name: 'NOTIFYFLOW',
        problem: 'Como impedir que o disparo síncrono de notificações trave completamente a API sob pico de acessos?',
        neededExist: 'Arquitetura de mensageria assíncrona orientada a eventos.',
        neededWork: 'Processamento desacoplado através de filas e trocas AMQP.',
        neededSimple: 'Escalonamento automático com suporte a falhas e retries exponenciais.',
        techIntro: 'Para resolver isso, utilizei:',
        techs: ['Django REST Framework', 'RabbitMQ', 'Celery', 'Docker', 'Redis']
      }
    ]
  },
  giveProblem: {
    title: 'ME DÊ UM PROBLEMA.',
    categories: {
      system: 'SISTEMA',
      interface: 'INTERFACE',
      automation: 'AUTOMAÇÃO',
      api: 'API',
      product: 'PRODUTO',
      experience: 'EXPERIÊNCIA'
    },
    capabilities: {
      system: 'Arquitetura de microsserviços, modelagem relacional PostgreSQL e resiliência de dados.',
      interface: 'Interfaces responsivas em React, design de interação, acessibilidade e micro-animações em GSAP.',
      automation: 'Orquestração de tarefas assíncronas com Celery/RabbitMQ, containers Docker e workflows com IA.',
      api: 'Contratos RESTful desacoplados, validação de payload, autenticação JWT e limites de taxa.',
      product: 'Transformação de requisitos incertos em especificações técnicas e produtos utilizáveis.',
      experience: 'Direção de arte visual, fotografia editorial e ritmo de navegação fluida.'
    }
  },
  thinkingMode: {
    trigger: 'Quer ver como eu penso?',
    title: 'MODO DE INVESTIGAÇÃO INTERATIVA',
    subtitle: 'Navegue pelo mapa mental desacoplado de decisões, fotografia e código.',
    close: 'FECHAR INVESTIGAÇÃO ✕'
  },
  learning: {
    title: 'O QUE EU APRENDI NO CAMINHO.',
    subtitle: 'Documentos arquivados de formação técnica e especialização.',
    view: 'ABRIR DOCUMENTO'
  },
  conclusion: {
    statement: 'AINDA TEM COISA PARA CONSTRUIR.',
    subtext: 'Se você trouxe uma ideia até aqui, talvez seja hora de dar forma a ela.',
    cta: 'CONVERSAR COM GABRIEL →',
    signature: 'GABRIEL GOUVEIA'
  },
  personalityFragments: [
    'Eu gosto de desmontar coisas para entender por que funcionam.',
    'Às vezes o problema está no código.',
    'Às vezes está na pergunta.',
    'E às vezes a melhor solução é não construir nada.'
  ],
  photography: {
    label: 'FOTOGRAFIA & PERCEPÇÃO',
    title: 'ARQUIVO VISUAL',
    text: 'A fotografia ensina a ver o detalhe que o código organiza.'
  }
};
