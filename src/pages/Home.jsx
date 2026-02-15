import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Stats from '../components/Stats'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Preloader from '../components/Preloader'
import DotGrid from '../components/DotGrid'
import useTheme from '../hooks/useTheme'
import useActiveSection from '../hooks/useActiveSection'

function Home() {
  const { darkMode, toggleTheme } = useTheme()
  const activeSection = useActiveSection()
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
          <DotGrid /> {/* grid de puntos detras de todo el contenido */}
          <div className="relative z-10"> {/* el contenido por encima del grid */}
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} activeSection={activeSection} />
            <Hero />
            <About />
            <Stats />
            <TechStack />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
            <BackToTop />
          </div>
        </div>
      )}
    </>
  )
}

export default Home