import { motion } from 'framer-motion'
import { Mail, Eye } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="relative z-10 px-6 lg:px-12 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)',
            }}
          />

          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-32 h-32"
            style={{
              background: 'radial-gradient(circle at top left, rgba(255,255,255,0.04) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-32 h-32"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(255,255,255,0.03) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <div className="mb-2 flex justify-center">
              <span
                className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              >
                Open to Work
              </span>
            </div>

            <h2
              className="font-display font-bold mt-5 mb-4 leading-tight"
              style={{
                fontSize: 'clamp(24px, 4vw, 44px)',
                color: 'var(--text-primary)',
              }}
            >
              Have an idea? Let's turn it
              <br />
              <span className="text-gradient">into a real product.</span>
            </h2>

            <p
              className="mx-auto mb-8 leading-relaxed text-sm"
              style={{
                color: 'var(--text-secondary)',
                maxWidth: 520,
                fontSize: 14,
              }}
            >
              Whether it's a portfolio, FiveM website, admin dashboard, Discord bot, or full-stack app — I can help build it with clean design and smooth performance.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <Mail size={14} />
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <Eye size={14} />
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
