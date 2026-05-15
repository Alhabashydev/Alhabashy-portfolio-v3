import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects, projectFilters } from '../data/projects'
import SectionHeader from './SectionHeader'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-default"
    >
      {/* Preview area */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: 160,
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Code-style preview */}
        <div className="absolute inset-0 p-4 flex flex-col gap-1.5 overflow-hidden">
          {[70, 45, 85, 55, 65, 40, 75].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{
                width: `${w}%`,
                background: i === 0
                  ? 'rgba(255,255,255,0.1)'
                  : i % 3 === 0
                    ? 'rgba(255,255,255,0.04)'
                    : 'rgba(255,255,255,0.06)',
                marginLeft: i % 2 === 0 ? 0 : 16,
              }}
            />
          ))}
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(8,8,8,0.7)' }}
        >
          <ArrowUpRight size={24} style={{ color: 'var(--text-primary)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-display font-semibold text-sm mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-xs leading-relaxed mb-4"
          style={{ color: 'var(--text-dim)', fontSize: 12 }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex gap-2 pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <a
            href={project.demoUrl}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
            style={{
              color: 'var(--text-primary)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <ExternalLink size={12} />
            Demo
          </a>
          <a
            href={project.sourceUrl}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
            style={{
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <Github size={12} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Projects"
          title="Selected Work"
          subtitle="A selection of projects I've built across web, FiveM, Discord, and more."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10 justify-center"
        >
          {projectFilters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                color: activeFilter === filter ? 'var(--bg)' : 'var(--text-secondary)',
                background: activeFilter === filter ? 'var(--text-primary)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeFilter === filter ? 'transparent' : 'var(--border)'}`,
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
