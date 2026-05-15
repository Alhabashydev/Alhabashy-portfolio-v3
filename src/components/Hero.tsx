import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Eye, Download } from 'lucide-react'

const ThreeScene = lazy(() => import('./ThreeScene'))

const terminalLines = [
  '> initializing portfolio...',
  '> loading skills...',
  '> developer: Moustafa Alhabashy',
  '> status: ready to build ✓',
]

function Terminal() {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (currentLine >= terminalLines.length) {
      setDone(true)
      return
    }

    const line = terminalLines[currentLine]
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(c => c + 1)
      }, 28)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, line])
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar, done])

  const currentDisplayLine = !done && currentLine < terminalLines.length
    ? terminalLines[currentLine].slice(0, currentChar)
    : null

  return (
    <div
      className="rounded-xl p-4 font-mono text-[12px] leading-relaxed"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        maxWidth: 360,
      }}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <span className="ml-2 text-[10px]" style={{ color: 'var(--text-dim)' }}>terminal</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{ color: i === lines.length - 1 && done ? '#a8d8a8' : 'var(--text-secondary)' }}>
          {line}
        </div>
      ))}
      {currentDisplayLine !== null && (
        <div style={{ color: 'var(--text-primary)' }}>
          {currentDisplayLine}
          <span className="cursor-blink" style={{ color: 'var(--text-primary)' }}>|</span>
        </div>
      )}
    </div>
  )
}

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
<motion.div
  variants={stagger}
  initial="initial"
  animate="animate"
  className="relative flex flex-col gap-6"
>
  {/* Dark readability glow behind hero text */}
  <div
    className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 rounded-[44px]"
    style={{
      background:
        'radial-gradient(circle at 28% 32%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.46) 38%, rgba(0,0,0,0.18) 62%, transparent 78%)',
      filter: 'blur(28px)',
    }}
  />

  {/* Badges */}
  <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <span
                className="font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
                style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
              >
                Full-Stack Developer • Egypt
              </span>
              <span
                className="font-mono text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5"
                style={{ color: '#a8d8a8', border: '1px solid rgba(168,216,168,0.2)', background: 'rgba(168,216,168,0.04)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#a8d8a8' }}
                />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp}>
              <h1
                className="font-display font-bold leading-[0.95] tracking-tight"
                style={{
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  color: 'var(--text-primary)',
                }}
              >
                Moustafa
                <br />
                <span className="text-gradient">Alhabashy</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed font-light"
              style={{ color: 'var(--text-secondary)', maxWidth: 420 }}
            >
              16-year-old full-stack developer building smooth, modern, and powerful digital experiences.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-dim)', maxWidth: 420, fontSize: 13 }}
            >
              I design and build clean websites, dashboards, server tools, Discord systems, FiveM interfaces, and full-stack web apps with a focus on performance, UI/UX, and smooth animations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              <a href="#projects" className="btn-primary">
                <Eye size={14} />
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={14} />
                Contact Me
              </a>
              <a href="#" className="btn-secondary" download>
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Terminal */}
            <motion.div variants={fadeUp}>
              <Terminal />
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
            style={{ height: 480 }}
          >
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
            />
            <Suspense fallback={
              <div
                className="w-48 h-48 rounded-full animate-pulse"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
              />
            }>
              <ThreeScene />
            </Suspense>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-dim)' }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} style={{ color: 'var(--text-dim)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
