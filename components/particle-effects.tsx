"use client"

import * as React from "react"
import { useAdvancedThemeSafe } from "./advanced-theme-provider"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function ParticleEffect() {
  const { enableParticles, theme } = useAdvancedThemeSafe()
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const particlesRef = React.useRef<Particle[]>([])
  const animationRef = React.useRef<number>()

  const particleConfigs = {
    nature: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#84cc16'],
      count: 50,
      speed: 0.5
    },
    earth: {
      colors: ['#a16207', '#ca8a04', '#eab308', '#92400e'],
      count: 40,
      speed: 0.3
    },
    sky: {
      colors: ['#0ea5e9', '#0284c7', '#0369a1', '#075985'],
      count: 60,
      speed: 0.7
    },
    harvest: {
      colors: ['#f59e0b', '#d97706', '#b45309', '#92400e'],
      count: 45,
      speed: 0.4
    },
    carbon: {
      colors: ['#475569', '#64748b', '#94a3b8', '#22c55e'],
      count: 35,
      speed: 0.6
    }
  }

  React.useEffect(() => {
    if (!enableParticles || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Initialize particles
    const config = particleConfigs[theme as keyof typeof particleConfigs] || particleConfigs.nature
    particlesRef.current = Array.from({ length: config.count }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: config.colors[Math.floor(Math.random() * config.colors.length)]
    }))

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.1
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [enableParticles, theme])

  if (!enableParticles) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ background: 'transparent' }}
    />
  )
}

// Floating elements component for enhanced visual effects
export function FloatingElements() {
  const { enableParticles, theme } = useAdvancedThemeSafe()

  const elementConfigs = {
    nature: ['🌱', '🍃', '🌿', '🌾'],
    earth: ['🌰', '🥜', '🍄', '🌲'],
    sky: ['☁️', '💧', '❄️', '🌈'],
    harvest: ['🌽', '🍎', '🍊', '🥕'],
    carbon: ['⚡', '🔬', '📊', '♻️']
  }

  if (!enableParticles) return null

  const elements = elementConfigs[theme as keyof typeof elementConfigs] || elementConfigs.nature

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={`${theme}-${index}`}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: `${(index * 25) % 100}%`,
            top: `${(index * 30) % 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index}s`
          }}
        >
          {element}
        </div>
      ))}
    </div>
  )
}
