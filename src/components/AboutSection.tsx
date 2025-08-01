'use client'

import { useEffect, useState } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      id='about' 
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Acerca de
        </h2>
      </div>

      <div className="space-y-4">
        <p className={`mb-4 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Soy <span className="font-medium text-slate-200">Desarrollador FullStack</span> desde 2018, con una sólida experiencia en el diseño y construcción de aplicaciones web modernas. Desde mis primeros proyectos, descubrí una verdadera pasión por transformar algoritmos y funcionalidades en <span className="font-medium text-slate-200">soluciones reales que generan impacto</span>.
        </p>

        <p className={`mb-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          A lo largo de mi trayectoria, he complementado mi formación con carreras y cursos especializados en desarrollo web, fortaleciendo tanto mi <span className="font-medium text-slate-200">perfil técnico como creativo</span>. Me especializo en tecnologías como React, Node.js, TypeScript y bases de datos tanto SQL como NoSQL.
        </p>

        <p className={`mb-4 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Creo firmemente que el desarrollo es un <span className="font-medium text-slate-200">proceso colaborativo</span> y que la inspiración puede surgir de cualquier lugar, impulsando la innovación y el crecimiento continuo. Mi enfoque se centra en crear experiencias digitales accesibles, escalables y que realmente resuelvan problemas del mundo real.
        </p>

        <p className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas, contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores.
        </p>
      </div>
    </section>
  )
}

export default AboutSection