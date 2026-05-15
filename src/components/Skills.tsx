import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  Monitor, Server, PenTool, Database, Gamepad2,
  Plug, LayoutDashboard, Zap
} from 'lucide-react'
import { skills } from '../data/skills'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, JSX.Element> = {
  'monitor': <Monitor size={20} />,
  'server': <Server size={20} />,
  'pen-tool': <PenTool size={20} />,
  'database': <Database size={20} />,
  'gamepad-2': <Gamepad2 size={20} />,
  'plug': <Plug size={20} />,
  'layout-dashboard': <LayoutDashboard size={20} />,
  'zap': <Zap size={20} />,
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-60, 60], [4, -4])
  const rotateY = useTransform(x, [-60, 60], [-4, 4])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, perspective: 800, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card rounded-2xl p-5 cursor-default transition-all duration-300 group"
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:border-white/20"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
        }}
      >
        {iconMap[skill.icon]}
      </div>
      <h3
        className="font-display font-semibold text-sm mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {skill.title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)', fontSize: 12 }}>
        {skill.description}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Skills"
          title="What I Do"
          subtitle="A broad range of skills focused on building complete, well-designed digital products."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
