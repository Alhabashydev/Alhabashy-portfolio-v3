import { motion } from 'framer-motion'
import { MapPin, Code2, Zap, Layers, Cpu } from 'lucide-react'
import SectionHeader from './SectionHeader'

const infoCards = [
  {
    icon: <Code2 size={18} />,
    title: 'Clean Code',
    desc: 'Readable, maintainable, and structured.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Smooth UI',
    desc: 'Every pixel and interaction considered.',
  },
  {
    icon: <Layers size={18} />,
    title: 'Full-Stack Logic',
    desc: 'Frontend meets backend seamlessly.',
  },
  {
    icon: <Cpu size={18} />,
    title: 'Fast Performance',
    desc: 'Optimized for speed and efficiency.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="About"
          title="Who I Am"
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm <span style={{ color: 'var(--text-primary)' }}>Moustafa Alhabashy</span>, a 16-year-old full-stack developer from
              {' '}<span style={{ color: 'var(--text-primary)' }}>Egypt</span>. I build modern websites, dashboards, FiveM server tools, Discord systems, and smooth UI/UX experiences.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)', fontSize: 13 }}>
              I started with HTML and CSS, and over time built my way through JavaScript, React, Node.js, and game scripting. Each project taught me how to balance clean design with solid logic — and I've been obsessed with both ever since.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)', fontSize: 13 }}>
              Whether it's a polished portfolio, a complex dashboard, or a complete FiveM system — I approach every project with the same focus: build it clean, animate it smoothly, and make it perform well.
            </p>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: <MapPin size={12} />, text: 'Egypt' },
                { icon: <Code2 size={12} />, text: 'Full-Stack Developer' },
                { icon: <Zap size={12} />, text: 'Available for Work' },
              ].map(item => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {item.icon}
                  {item.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-3">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {card.icon}
                </div>
                <div
                  className="font-display font-semibold text-sm mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {card.title}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)', fontSize: 12 }}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
