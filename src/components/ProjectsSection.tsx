
'use client'

import { useState } from 'react'
import ClickIcon from './icons/ClickIcon'
import GithubIcon from './icons/GithubIcon'
import { projectsData } from '../data/projects'
import Image from 'next/image'

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Proyectos
        </h2>
      </div>

      {/* Featured Projects */}
      <div className="mb-12">
        <h3 className="mb-8 text-lg font-semibold text-slate-200">Proyectos Destacados</h3>
        <div className="group/list">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (project.liveUrl) {
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                } else if (project.githubUrl) {
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <div className="z-10 sm:col-span-3">
                <div className="relative overflow-hidden rounded border-2 border-slate-200/10 bg-slate-800/50 transition-all duration-300 group-hover:border-slate-200/20">
                  {project.imageUrl ? (
                    <div className="aspect-video relative">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded flex items-center justify-center">
                      <span className="text-slate-400 text-sm font-medium">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="z-10 sm:col-span-5">
                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                  <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span className="group-hover:text-teal-300 transition-colors duration-200">
                      {project.title}
                    </span>
                    {project.liveUrl && (
                      <ClickIcon className="inline-block h-4 w-4 shrink-0 ml-1 translate-y-px transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-0" />
                    )}
                  </div>
                </h3>
                
                <p className="mt-2 text-sm leading-normal text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ClickIcon className="h-4 w-4 mr-1" />
                      Ver proyecto
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="h-4 w-4 mr-1 fill-current" />
                      Código
                    </a>
                  )}
                </div>

                <ul className="mt-4 flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 transition-all duration-200 hover:bg-teal-400/20">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="mb-8 text-lg font-semibold text-slate-200">Otros Proyectos</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg border border-slate-200/10 bg-slate-800/50 p-6 transition-all duration-300 hover:border-slate-200/20 hover:bg-slate-800/80 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => {
                if (project.liveUrl) {
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                } else if (project.githubUrl) {
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-slate-200 group-hover:text-teal-300 transition-colors duration-200">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ClickIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon className="h-5 w-5 fill-current" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-200">
                {project.description}
              </p>

              <ul className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 transition-all duration-200 hover:bg-teal-400/20">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <a 
          className="group inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors duration-200" 
          target="_blank" 
          href="https://github.com/abrahamrlvas"
        >
          <span>Ver todos los proyectos en GitHub</span>
          <ClickIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection