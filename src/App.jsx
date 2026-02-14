import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import useActiveSection from './hooks/useActiveSection'

function App() {
  const { darkMode, toggleTheme } = useTheme()
  const activeSection = useActiveSection()

  return (
    // transition-colors para que el cambio de tema sea suave
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} activeSection={activeSection} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App