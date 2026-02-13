import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
    </div>
  )
}

export default App