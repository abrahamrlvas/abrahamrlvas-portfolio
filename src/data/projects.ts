import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Planet Fraternity App",
    description: "Plaforma enfocada en el aprendizaje en promover la fraternidad, la solidaridad y la sostenibilidad a través de acciones concretas de jóvenes, para jóvenes.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    liveUrl: "https://planetfraternity.org/es/home-espanol/",
    githubUrl: "https://planetfraternity.org/es/home-espanol/",
    featured: true,
    imageUrl: "/images/planter-fraternity.png"
  },
  {
    id: 2,
    title: "Velzia Group",
    description: "Aplicación que lidera la inmobiliaria en Madrid, España, lidere al equipo de desarrollo de aplicaciones administrativas por un 1 año, creando soluciones personalizadas.",
    technologies: ["React", "Node.js", "MongoDB", "Micro-Servicios", "Socket.io"],
    liveUrl: "https://velzia.com/",
    githubUrl: "https://velzia.com/",
    featured: true,
    imageUrl: "/images/task-manager.svg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico interactivo que muestra pronósticos detallados, mapas climáticos, alertas meteorológicas y análisis históricos. Integración con múltiples APIs meteorológicas.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "https://github.com/abrahamrlvas/weather-dashboard",
    imageUrl: "/images/ecommerce-platform.svg"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web personal con diseño moderno y responsivo, efectos visuales interactivos, optimización SEO y sistema de contacto. Construido con las últimas tecnologías web.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://abrahamrivas.dev",
    githubUrl: "https://github.com/abrahamrlvas/portfolio-v2",
    imageUrl: "/images/task-manager.svg"
  },
  {
    id: 5,
    title: "API REST Microservices",
    description: "Arquitectura de microservicios escalable con API REST, autenticación JWT, documentación automática con Swagger, rate limiting y monitoreo de performance.",
    technologies: ["Node.js", "Express", "Docker", "Redis", "JWT"],
    githubUrl: "https://github.com/abrahamrlvas/microservices-api",
    imageUrl: "/images/ecommerce-platform.svg"
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description: "Aplicación de chat en tiempo real con salas privadas y públicas, compartir archivos, emojis personalizados y notificaciones push. Interfaz moderna y responsiva.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
    liveUrl: "https://chat-app-demo.com",
    githubUrl: "https://github.com/abrahamrlvas/realtime-chat",
    imageUrl: "/images/task-manager.svg"
  }
];