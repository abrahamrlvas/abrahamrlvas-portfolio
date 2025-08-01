'use client'

import { useEffect, useRef, useState } from 'react'

const LanternEffect = () => {
  const lanternRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateLanternPosition = () => {
      if (lanternRef.current) {
        const { x, y } = mousePositionRef.current
        lanternRef.current.style.left = `${x - 200}px`
        lanternRef.current.style.top = `${y - 200}px`
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
      
      // Show lantern on first mouse move
      if (!isVisible) {
        setIsVisible(true)
      }
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      animationFrameRef.current = requestAnimationFrame(updateLanternPosition)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Add event listeners to window instead of document
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible])

  return (
    <div
      ref={lanternRef}
      className={`pointer-events-none fixed z-50 h-96 w-96 rounded-full transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, rgba(20, 184, 166, 0.15) 30%, rgba(20, 184, 166, 0.05) 60%, transparent 80%)',
        filter: 'blur(30px)',
        willChange: 'transform, opacity',
        transform: 'translate(-5%, -5%)'
      }}
    />
  )
}

export default LanternEffect