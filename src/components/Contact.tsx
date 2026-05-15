import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Github, ExternalLink, Send } from 'lucide-react'
import { SiDiscord } from 'react-icons/si'
import SectionHeader from './SectionHeader'

const contactLinks = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'moustafa@example.com',
    href: 'mailto:moustafa@example.com',
  },
  {
    icon: <SiDiscord size={16} />,
    label: 'Discord',
    value: 'moustafa#0000',
    href: '#',
  },
  {
    icon: <Github size={16} />,
    label: 'GitHub',
    value: 'github.com/moustafa',
    href: '#',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend-ready: replace this with API call
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          badge="Contact"
          title="Let's Build Something"
          subtitle="Have a project in mind? Let's talk about it — I'm open to work."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)', maxWidth: 380 }}
            >
              Whether it's a new project, a redesign, a Discord bot, or a FiveM system — I'm ready to help. Reach out through any of these channels.
            </p>

            <div className="space-y-3 pt-2">
              {contactLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-xs mb-0.5"
                      style={{ color: 'var(--text-dim)', fontSize: 11 }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium truncate"
                      style={{ color: 'var(--text-primary)', fontSize: 13 }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    style={{ color: 'var(--text-dim)', flexShrink: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.key}>
                  <label
                    className="block text-xs mb-1.5 font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs mb-1.5 font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: sent ? 'rgba(168,216,168,0.15)' : 'var(--text-primary)',
                  color: sent ? '#a8d8a8' : 'var(--bg)',
                  border: sent ? '1px solid rgba(168,216,168,0.3)' : 'none',
                }}
              >
                {sent ? (
                  <>✓ Message Sent</>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
