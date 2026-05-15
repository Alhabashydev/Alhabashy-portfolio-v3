import { motion } from 'framer-motion'
import {
  Zap, Eye, Sparkles, Layers, BadgeCheck, MessageSquare
} from 'lucide-react'
import { whyCards } from '../data/whyWorkWithMe'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, JSX.Element> = {
  zap: <Zap size={18} />,
  eye: <Eye size={18} />,
  sparkles: <Sparkles size={18} />,
  layers: <Layers size={18} />,
  'badge-check': <BadgeCheck size={18} />,
  'message-square': <MessageSquare size={18} />,
}

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Why Me"
          title="Why Work With Me"
          subtitle="What makes working with me different — from mindset to execution."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 cursor-default group relative overflow-hidden"
            >
              {/* Number */}
              <div
                className="absolute top-5 right-5 font-mono text-[11px]"
                style={{ color: 'var(--text-dim)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {iconMap[card.icon]}
              </div>

              <h3
                className="font-display font-semibold text-sm mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {card.title}
              </h3>

              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-dim)', fontSize: 12 }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
