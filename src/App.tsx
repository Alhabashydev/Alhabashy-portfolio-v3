import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
//import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import AnimatedBackground from './components/AnimatedBackground'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative noise-bg">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* <CustomCursor /> */}
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Services />
        <Projects />
        <WhyWorkWithMe />
        <Timeline />
        <Contact />
        <ContactCTA />
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
