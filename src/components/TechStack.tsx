import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiLua, SiPython, SiMysql,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiFramer, SiThreedotjs,
  SiNodedotjs, SiExpress, SiPostman, SiJsonwebtokens, SiSocketdotio,
  SiMongodb, SiPostgresql, SiRedis,
  SiFigma, SiGit, SiGithub, SiVscodium, SiVercel, SiNpm,
  SiDiscord,
} from 'react-icons/si'
import { technologies } from '../data/technologies'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, JSX.Element> = {
  SiJavascript: <SiJavascript />,
  SiTypescript: <SiTypescript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss />,
  SiLua: <SiLua />,
  SiPython: <SiPython />,
  SiMysql: <SiMysql />,
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiVite: <SiVite />,
  SiTailwindcss: <SiTailwindcss />,
  SiFramer: <SiFramer />,
  SiThreedotjs: <SiThreedotjs />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiPostman: <SiPostman />,
  SiJsonwebtokens: <SiJsonwebtokens />,
  SiSocketdotio: <SiSocketdotio />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiRedis: <SiRedis />,
  SiFigma: <SiFigma />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  SiVisualstudiocode: <SiVscodium />,
  SiVercel: <SiVercel />,
  SiNpm: <SiNpm />,
  SiDiscord: <SiDiscord />,
}

export default function TechStack() {
  return (
    <section id="tech" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Technologies"
          title="Technologies I Use"
          subtitle="Tools, languages, and frameworks I work with across the full stack."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: catIdx * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-5"
            >
              {/* Category header */}
              <div className="mb-4">
                <h3
                  className="font-display font-semibold text-sm mb-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-dim)', fontSize: 11 }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-4" style={{ height: 1, background: 'var(--border)' }} />

              {/* Tech items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                    whileHover={{ scale: 1.06, y: -1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-default transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1 }}
                    >
                      {iconMap[item.icon] ?? '◆'}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'var(--text-secondary)', fontSize: 11 }}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
