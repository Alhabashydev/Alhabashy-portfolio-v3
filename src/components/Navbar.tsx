import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tech', href: '#tech' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(8,8,8,0.9)' : 'rgba(8,8,8,0.6)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          {/* Logo */}
          <button
  onClick={() => scrollTo('#home')}
  className="mr-2 flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-all duration-200 hover:scale-105"
  style={{
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid var(--border)',
    boxShadow: '0 0 24px rgba(255,255,255,0.04)',
  }}
>
  <img
    src="/brand/logo-mark.png"
    alt="Alhabashy Logo"
    className="h-6 w-6 object-contain"
    draggable={false}
  />
</button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-3 py-1.5 rounded-xl text-[12px] font-medium transition-all duration-200"
                style={{
                  color: activeSection === link.href.replace('#', '')
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                  background: activeSection === link.href.replace('#', '')
                    ? 'rgba(255,255,255,0.06)'
                    : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact pill */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex items-center ml-2 px-4 py-1.5 rounded-xl text-[12px] font-medium transition-all duration-200 hover:opacity-80"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg)',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 md:hidden"
            style={{
              background: 'rgba(10,10,10,0.96)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm transition-colors"
                  style={{
                    color: 'var(--text-primary)',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-3 rounded-xl text-sm font-medium"
                  style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
