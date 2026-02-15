import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'
import useTheme from './hooks/useTheme'
import useActiveSection from './hooks/useActiveSection'

function App() {
  const { darkMode, toggleTheme } = useTheme()
  const activeSection = useActiveSection()
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* preloader con animacion de salida */}
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* contenido principal: oculto mientras carga */}
      {!loading && (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
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
      )}
    </>
  )
}

export default App