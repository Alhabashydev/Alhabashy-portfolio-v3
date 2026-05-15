import { motion } from 'framer-motion'
import {
  User, Gamepad2, LayoutDashboard, Bot,
  ShoppingBag, Layers, Sparkles, Check
} from 'lucide-react'
import { services } from '../data/services'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, JSX.Element> = {
  user: <User size={20} />,
  'gamepad-2': <Gamepad2 size={20} />,
  'layout-dashboard': <LayoutDashboard size={20} />,
  bot: <Bot size={20} />,
  'shopping-bag': <ShoppingBag size={20} />,
  layers: <Layers size={20} />,
  sparkles: <Sparkles size={20} />,
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Services"
          title="What I Can Build"
          subtitle="Complete solutions from concept to deployment — clean design, solid logic, and smooth performance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 group cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.04) 0%, transparent 60%)',
                }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {iconMap[service.icon]}
              </div>

              <h3
                className="font-display font-semibold text-sm mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>

              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: 'var(--text-dim)', fontSize: 12 }}
              >
                {service.description}
              </p>

              <div
                className="pt-4"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="space-y-1.5">
                  {service.features.map(feat => (
                    <div
                      key={feat}
                      className="flex items-center gap-2"
                    >
                      <Check
                        size={11}
                        style={{ color: 'var(--text-secondary)', flexShrink: 0 }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: 'var(--text-dim)', fontSize: 11 }}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
