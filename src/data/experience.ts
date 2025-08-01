import { Experience } from '../types/project';

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 — Presente",
    description: "Lidero el desarrollo de aplicaciones web escalables utilizando tecnologías modernas. Responsable de la arquitectura de sistemas, mentoreo de desarrolladores junior y optimización de performance.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    achievements: [
      "Reduje el tiempo de carga de la aplicación principal en un 40%",
      "Implementé arquitectura de microservicios que mejoró la escalabilidad",
      "Lideré un equipo de 5 desarrolladores en proyectos críticos"
    ]
  },
  {
    id: 2,
    company: "Digital Innovations Inc.",
    position: "Full Stack Developer",
    period: "2020 — 2022",
    description: "Desarrollé y mantuve múltiples aplicaciones web para clientes enterprise. Colaboré estrechamente con equipos de diseño y producto para crear experiencias de usuario excepcionales.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"],
    achievements: [
      "Desarrollé 8 aplicaciones web completas para clientes enterprise",
      "Implementé sistema de autenticación SSO que redujo tickets de soporte en 60%",
      "Optimicé consultas de base de datos mejorando performance en 50%"
    ]
  },
  {
    id: 3,
    company: "StartupLab",
    position: "Frontend Developer",
    period: "2018 — 2020",
    description: "Especializado en desarrollo frontend con React y Vue.js. Trabajé en el desarrollo de interfaces de usuario modernas y responsivas para aplicaciones SaaS.",
    technologies: ["React", "Vue.js", "JavaScript", "Sass", "Webpack"],
    achievements: [
      "Creé biblioteca de componentes reutilizables adoptada por todo el equipo",
      "Implementé diseño responsivo que aumentó engagement móvil en 35%",
      "Reduje el bundle size de la aplicación en 30% mediante optimizaciones"
    ]
  }
];