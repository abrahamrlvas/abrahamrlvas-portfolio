'use client'

import { MouseEvent, useEffect, useState, useCallback } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState('#about');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.hash || '#about')
  }, [])

  const handleScroll = useCallback(() => {
    if (isScrolling) return; // Prevent conflicts during programmatic scrolling
    
    const sections = ['about', 'experience', 'projects'];
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Better detection point
    
    let currentSection = 'about'; // Default to first section
    
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if we're within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = sectionId;
          break;
        }
        // If we're past this section, update current section
        else if (scrollPosition >= sectionTop) {
          currentSection = sectionId;
        }
      }
    }
    
    const newActiveLink = `#${currentSection}`;
    if (newActiveLink !== activeLink) {
      setActiveLink(newActiveLink);
      // Update URL without triggering navigation
      window.history.replaceState(null, '', newActiveLink);
    }
  }, [activeLink, isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, link: string) => {
    event.preventDefault();
    setIsScrolling(true);
    setActiveLink(link);
    
    const targetElement = document.getElementById(link.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const navItems = [
    { href: '#about', label: 'Acerca de' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' }
  ];

  return (
    <ul className="mt-16 w-max">
      {navItems.map((item) => (
        <li key={item.href} className="group">
          <a 
            onClick={(event) => handleClick(event, item.href)} 
            className={`group flex items-center py-3 transition-all duration-200 hover:scale-105 ${
              activeLink === item.href ? 'active' : ''
            }`} 
            href={item.href}
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-all duration-200 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks