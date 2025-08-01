'use client'

import { useEffect, useState } from 'react'
import GithubIcon from "./icons/GithubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import TwitterIcon from "./icons/TwitterIcon"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      href: "https://github.com/abrahamrlvas",
      icon: GithubIcon,
      label: "Github",
      hoverColor: "hover:text-slate-200"
    },
    {
      href: "https://twitter.com/abrahamrlvas",
      icon: TwitterIcon,
      label: "Twitter",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "https://www.linkedin.com/in/abraham-rivas-63100b219/",
      icon: LinkedinIcon,
      label: "Linkedin",
      hoverColor: "hover:text-blue-500"
    }
  ]

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className={`text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          Abraham Rivas
        </h1>
        
        <h2 className={`mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          Ingeniero en Computación | Desarrollador FullStack
        </h2>
        
        <p className={`mt-4 max-w-xs leading-normal transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          Construyo productos y experiencias digitales accesibles e inclusivas para la web.
        </p>
        
        <nav 
          className={`nav hidden lg:block transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} 
          aria-label="In-page jump links"
        >
          <NavLinks />
        </nav>
      </div>

      <ul className={`py-10 flex items-center transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {socialLinks.map((social, index) => (
          <li key={social.label} className="mr-5 text-xs">
            <a 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block transition-all duration-200 transform hover:scale-110 ${social.hoverColor}`}
            >
              <span className="sr-only">{social.label}</span>
              <social.icon className="fill-current" width={24} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Navbar