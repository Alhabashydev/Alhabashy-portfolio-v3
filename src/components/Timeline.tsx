import { motion } from 'framer-motion'
import { timeline } from '../data/timeline'
import SectionHeader from './SectionHeader'

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Journey"
          title="My Developer Journey"
          subtitle="How I got here — one milestone at a time."
        />

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 origin-top"
            style={{
              width: 1,
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="space-y-6">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                  } pl-12 md:pl-0`}
                >
                  {/* Content card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}
                  >
                    <div
                      className="glass-card rounded-2xl p-5"
                      style={{ cursor: 'default' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border)',
                            background: 'rgba(255,255,255,0.03)',
                          }}
                        >
                          {entry.period}
                        </span>
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: 'var(--text-dim)' }}
                        >
                          {entry.id}
                        </span>
                      </div>
                      <h3
                        className="font-display font-semibold text-sm mb-1.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {entry.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: 'var(--text-dim)', fontSize: 12 }}
                      >
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 top-5 glow-dot z-10"
                    style={{
                      background: i === timeline.length - 1 ? '#F0EDE8' : 'rgba(255,255,255,0.4)',
                      border: `2px solid ${i === timeline.length - 1 ? '#fff' : 'rgba(255,255,255,0.3)'}`,
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
