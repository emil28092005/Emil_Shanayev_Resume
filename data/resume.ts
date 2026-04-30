export const resume = {
  name: 'Emil Shanayev',
  handle: 'emil28092005',
  role: ['DevOps Engineer', 'Backend Developer', 'Infrastructure Nerd'],
  bio: 'Building reliable systems from first principles. Specializing in Python/FastAPI, container orchestration, and Linux infrastructure. Student at Innopolis University (DSAI program).',
  location: 'Russia',

  contacts: [
    {
      label: 'GitHub',
      handle: 'emil28092005',
      href: 'https://github.com/emil28092005',
      prefix: 'github.com/',
    },
    {
      label: 'Email',
      handle: 'emil28092005@gmail.com',
      href: 'mailto:emil28092005@gmail.com',
      prefix: '',
    },
    {
      label: 'Telegram',
      handle: '@emilshanaty',
      href: 'https://t.me/emilshanaty',
      prefix: 't.me/',
    },
  ],

  skills: [
    {
      category: 'SYSTEM',
      items: ['Linux', 'Bash', 'SSH', 'Nginx', 'systemd', 'Vim'],
    },
    {
      category: 'LANGUAGES',
      items: ['Python', 'Go', 'TypeScript', 'JavaScript', 'Java', 'C#'],
    },
    {
      category: 'BACKEND',
      items: ['FastAPI', 'asyncio', 'PostgreSQL', 'Redis', 'SQLite'],
    },
    {
      category: 'CONTAINERS',
      items: ['Docker', 'Compose', 'Kubernetes', 'Helm', 'Harbor'],
    },
    {
      category: 'CI / CD',
      items: ['GitHub Actions', 'Jenkins', 'GitLab CI'],
    },
    {
      category: 'CLOUD',
      items: ['Yandex Cloud', 'VPS', 'Server Admin'],
    },
    {
      category: 'AI / LLM',
      items: ['OpenAI API', 'Claude API', 'LangChain', 'Perplexity'],
    },
    {
      category: 'TOOLING',
      items: ['Git', 'Agile', 'Scrum', 'Jira'],
    },
  ],

  projects: [
    {
      id: '01',
      title: 'FastAPI Async Platform',
      description:
        'High-performance async REST API built with FastAPI and PostgreSQL. Features Redis caching, Docker containerization, and Nginx reverse proxy on a Linux VPS.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
      href: 'https://github.com/emil28092005',
      status: 'deployed' as const,
    },
    {
      id: '02',
      title: 'K8s Infrastructure',
      description:
        'Production-grade Kubernetes cluster with Helm chart management, Harbor private container registry, and full CI/CD automation via GitHub Actions.',
      tech: ['Kubernetes', 'Helm', 'Harbor', 'GitHub Actions', 'Docker'],
      href: 'https://github.com/emil28092005',
      status: 'deployed' as const,
    },
    {
      id: '03',
      title: 'Jenkins CI/CD Pipeline',
      description:
        'End-to-end automated pipeline — testing, Docker image builds, registry push, and zero-downtime rolling deployments on Linux servers.',
      tech: ['Jenkins', 'Docker', 'Bash', 'Linux'],
      href: 'https://github.com/emil28092005',
      status: 'shipped' as const,
    },
    {
      id: '04',
      title: 'LLM API Microservice',
      description:
        'Microservice integrating OpenAI and Claude APIs with async task queuing, per-user rate limiting, and response caching to minimize costs.',
      tech: ['Python', 'FastAPI', 'Redis', 'OpenAI API', 'Claude API'],
      href: 'https://github.com/emil28092005',
      status: 'wip' as const,
    },
  ],

  education: {
    institution: 'Innopolis University',
    program: 'Data Structures and Artificial Intelligence (DSAI)',
    note: 'Product Management elective — A grade',
  },
} as const

export type Project = (typeof resume.projects)[number]
export type SkillGroup = (typeof resume.skills)[number]
export type Contact = (typeof resume.contacts)[number]
