import { useEffect, useMemo } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

type Star = {
  id: number
  left: string
  top: string
  size: number
  opacity: number
  delay: number
  duration: number
}

function createStars(count: number, sizeMin: number, sizeMax: number, opacityMin: number, opacityMax: number) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: sizeMin + Math.random() * (sizeMax - sizeMin),
    opacity: opacityMin + Math.random() * (opacityMax - opacityMin),
    delay: Math.random() * 4,
    duration: 3.2 + Math.random() * 3,
  }))
}

function StarLayer({
  stars,
  x,
  y,
  glow = false,
}: {
  stars: Star[]
  x: any
  y: any
  glow?: boolean
}) {
  return (
    <motion.div
      className="absolute inset-[-60px]"
      style={{ x, y }}
    >
      {stars.map(star => (
        <motion.span
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: '#F0EDE8',
            opacity: star.opacity,
            boxShadow: glow
              ? '0 0 10px rgba(255,255,255,0.42)'
              : '0 0 5px rgba(255,255,255,0.16)',
          }}
          animate={{
            opacity: [
              star.opacity,
              Math.min(star.opacity + 0.22, 0.78),
              star.opacity,
            ],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </motion.div>
  )
}

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 30,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 30,
    mass: 0.5,
  })

  // Different movement strength = depth/parallax
  const farX = useTransform(smoothX, [-0.5, 0.5], [-5, 5])
  const farY = useTransform(smoothY, [-0.5, 0.5], [-3, 3])

  const midX = useTransform(smoothX, [-0.5, 0.5], [-14, 14])
  const midY = useTransform(smoothY, [-0.5, 0.5], [-10, 10])

  const nearX = useTransform(smoothX, [-0.5, 0.5], [-28, 28])
  const nearY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])

  const glowX = useTransform(smoothX, [-0.5, 0.5], [-24, 24])
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-18, 18])

  const { farStars, midStars, nearStars } = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return {
      farStars: createStars(isMobile ? 70 : 140, 0.6, 1.1, 0.12, 0.32),
      midStars: createStars(isMobile ? 45 : 85, 0.9, 1.7, 0.18, 0.48),
      nearStars: createStars(isMobile ? 16 : 25, 1.4, 2.6, 0.28, 0.62),
    }
  }, [])

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => ({
      id: index,
      top: `${12 + Math.random() * 48}%`,
      left: `${10 + Math.random() * 55}%`,
      delay: index * 4.5 + Math.random() * 2,
      duration: 1.25 + Math.random() * 0.35,
    }))
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5

      mouseX.set(x)
      mouseY.set(y)
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return

      const x = touch.clientX / window.innerWidth - 0.5
      const y = touch.clientY / window.innerHeight - 0.5

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Solid readable black base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, #0b0b0b 0%, #080808 48%, #030303 100%)',
        }}
      />

      {/* Subtle mouse-following glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 38%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Depth star layers */}
      <StarLayer stars={farStars} x={farX} y={farY} />
      <StarLayer stars={midStars} x={midX} y={midY} />
      <StarLayer stars={nearStars} x={nearX} y={nearY} glow />

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {shootingStars.map(star => (
          <motion.span
            key={star.id}
            className="absolute block h-px w-28 rounded-full"
            style={{
              top: star.top,
              left: star.left,
              rotate: '-28deg',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
              boxShadow: '0 0 18px rgba(255,255,255,0.35)',
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scaleX: 0.35,
            }}
            animate={{
              x: [0, 460],
              y: [0, 230],
              opacity: [0, 0.9, 0],
              scaleX: [0.35, 1, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatDelay: 10,
              ease: 'easeOut',
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px',
        }}
      />

      {/* Readability layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,8,8,0.58) 0%, rgba(8,8,8,0.26) 42%, rgba(8,8,8,0.64) 100%)',
        }}
      />
    </div>
  )
}
