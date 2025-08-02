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
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web personal con diseño moderno y responsivo, efectos visuales interactivos, optimización SEO y sistema de contacto. Construido con las últimas tecnologías web.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://abrahamrlvas-portfolio.vercel.app/",
    githubUrl: "https://github.com/abrahamrlvas/abrahamrlvas-portfolio",
    imageUrl: "/images/task-manager.svg"
  },
];