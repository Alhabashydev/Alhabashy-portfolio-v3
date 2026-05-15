import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{ background: '#050505' }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 36%, transparent 70%)',
          filter: 'blur(58px)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 22, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Logo mark */}
        <motion.div
  className="mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl"
  style={{
    background: 'rgba(255,255,255,0.035)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 0 80px rgba(255,255,255,0.12)',
  }}
  animate={{
    y: [0, -6, 0],
    rotate: [0, 1.5, 0],
  }}
  transition={{
    duration: 2.2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <img
    src="/brand/logo-mark.png"
    alt="Alhabashy Logo"
    className="h-12 w-12 object-contain"
    draggable={false}
  />
</motion.div>

        <motion.p
          className="font-mono text-[10px] uppercase tracking-[0.35em]"
          style={{ color: 'var(--text-dim)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.16 }}
        >
          Loading Portfolio
        </motion.p>

        <motion.h1
          className="mt-3 font-display text-3xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.55 }}
        >
          Alhabashy
        </motion.h1>

        <motion.p
          className="mt-2 max-w-xs text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.55 }}
        >
          Preparing a smooth digital experience.
        </motion.p>

        {/* Loading bar */}
        <div
          className="relative mt-7 h-px w-64 overflow-hidden rounded-full"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent, #F0EDE8, transparent)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '220%' }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Status dots */}
        <div className="mt-5 flex items-center gap-2">
          {[0, 1, 2].map(index => (
            <motion.span
              key={index}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: '#F0EDE8' }}
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.85, 1.15, 0.85],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
