import { motion } from 'framer-motion'
import { Github, ArrowUp, MapPin } from 'lucide-react'
import { SiDiscord } from 'react-icons/si'

const socialLinks = [
  { icon: <Github size={16} />, href: '#', label: 'GitHub' },
  { icon: <SiDiscord size={16} />, href: '#', label: 'Discord' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 py-8 px-6 lg:px-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
<div
  className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl"
  style={{
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid var(--border)',
    boxShadow: '0 0 24px rgba(255,255,255,0.04)',
  }}
>
  <img
    src="/brand/logo-mark.png"
    alt="Alhabashy Logo"
    className="h-7 w-7 object-contain"
    draggable={false}
  />
</div>
            <div>
              <div
                className="font-display font-semibold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                Moustafa Alhabashy
              </div>
              <div
                className="flex items-center gap-1.5 text-xs mt-0.5"
                style={{ color: 'var(--text-dim)' }}
              >
                <MapPin size={10} />
                Full-Stack Developer • Egypt
              </div>
            </div>
          </div>

          {/* Center: copyright */}
          <div
            className="font-mono text-[11px] text-center"
            style={{ color: 'var(--text-dim)' }}
          >
            © {year} Moustafa Alhabashy. Built with React + Three.js
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {link.icon}
              </a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                color: 'var(--bg)',
                background: 'var(--text-primary)',
              }}
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
