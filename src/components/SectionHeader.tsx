import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ badge, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {badge && (
        <div className={`flex mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--text-secondary)] px-3 py-1.5 rounded-full border"
            style={{ borderColor: 'var(--border)' }}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className="font-display font-bold text-[var(--text-primary)] leading-tight"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[var(--text-secondary)] leading-relaxed font-light ${isCenter ? 'max-w-xl mx-auto' : 'max-w-lg'}`}
          style={{ fontSize: 'clamp(14px, 1.6vw, 16px)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
