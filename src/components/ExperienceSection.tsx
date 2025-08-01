'use client'

import { useEffect, useState } from 'react'
import ClickIcon from './icons/ClickIcon'

interface Experience {
  id: number
  period: string
  position: string
  company: string
  description: string[]
  technologies: Array<{
    name: string
    color: string
  }>
}

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('experience')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const experiences: Experience[] = [
    {
      id: 1,
      period: "2023 - 2025",
      position: "Ingeniero de Sistemas",
      company: "LaCore Nutraceuticals",
      description: [
        "Desarrollé y mantuve la arquitectura fullstack de los sistemas internos, optimizando procesos críticos y mejorando el rendimiento general del código base en producción. Implementé soluciones escalables para bugs heredados y facilité la integración de nuevas funcionalidades con mínimos tiempos de inactividad.",
        "Mejoré la estabilidad y mantenibilidad del código legado mediante refactorización sistemática. Desarrollé soluciones robustas en frontend y backend para facilitar la evolución del producto digital, integrando nuevas tecnologías sin comprometer la operación actual."
      ],
      technologies: [
        { name: "React", color: "text-cyan-400" },
        { name: "NodeJS", color: "text-teal-300" },
        { name: "MongoDB", color: "text-green-600" },
        { name: "ExpressJS", color: "text-yellow-600" }
      ]
    },
    {
      id: 2,
      period: "2021 - 2023",
      position: "Desarrollador Fullstack",
      company: "DevNavigate",
      description: [
        "Desarrollé y diseñé diferentes aplicaciones webs para los productos de diferentes empresas mediante componentes y herramientas que se adaptan a las necesidades de cada producto.",
        "Lideré la construcción y mejora de rendimientos de las aplicaciones webs, mentorizando con mejores prácticas dentro del desarrollo, diseñando estrategias para conseguir mejores resultados e implementé el intercambio de conocimientos y la conducción del desarrollo de herramientas internas.",
        "Construí algoritmos que permitieron mejores resultados para acelerar la gestión y el flujo de toda la data que se manejaba dentro de las aplicaciones webs.",
        "Implementé mejoras usando código limpio y las últimas actualizaciones para todos los productos en los que trabajé dentro de la empresa, resultando en mejoras de rendimiento.",
        "Implementé nuevos servicios y micro servicios internos de la empresa, como externos creando soluciones para una mejor escalabilidad."
      ],
      technologies: [
        { name: "React", color: "text-cyan-400" },
        { name: "NodeJS", color: "text-teal-300" },
        { name: "MongoDB", color: "text-green-600" },
        { name: "ExpressJS", color: "text-yellow-600" }
      ]
    },
    {
      id: 3,
      period: "2020 - 2021",
      position: "Desarrollador BackEnd",
      company: "CAIsERT Developers",
      description: [
        "Entregué código de producción robusto y de alta calidad para el proyecto en cuestión, realizé tareas de seguimiento y mantenimiento en cualquier área del BackEnd, conecté con las otras áreas de producción manteniendo una estrecha colaboración, intercambio de información y mentoría."
      ],
      technologies: [
        { name: "NodeJS", color: "text-teal-300" },
        { name: "GraphQL", color: "text-pink-600" },
        { name: "VueJS", color: "text-teal-500" },
        { name: "Neo4J", color: "text-blue-500" }
      ]
    }
  ]

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experiencia
        </h2>
      </div>

      <ol className="group/list">
        {experiences.map((experience, index) => (
          <li 
            key={experience.id} 
            className={`mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {experience.period}
              </header>
              
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-200">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{experience.position} ·</span>
                    <span className="inline-block ml-1">{experience.company}</span>
                  </div>
                </h3>
                
                <div className="mt-2 space-y-3">
                  {experience.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-sm leading-normal text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <ul className="mt-4 flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="mr-1.5 mt-2">
                      <div className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 ${tech.color} transition-all duration-200 hover:bg-teal-400/20 hover:scale-105`}>
                        {tech.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className={`transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <a 
          className="group inline-flex items-center font-medium leading-snug text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-200" 
          target="_blank" 
          href="https://www.linkedin.com/in/abraham-rivas-63100b219/"
          rel="noopener noreferrer"
        >
          <span>Ver mi resumen completo</span>
          <ClickIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
        </a>
      </div>
    </section>
  )
}

export default ExperienceSection