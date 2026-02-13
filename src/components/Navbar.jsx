import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // backdrop-blur para el efecto cristal al hacer scroll
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-500">
          &lt;DevJuanCR /&gt;
        </a>

        {/* links en desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {/* sol en dark para ir a light y luna en light para ir a dark */}
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg p-1"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* toggle tema + hamburguesa en movil */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-slate-600 dark:text-slate-300 text-lg"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-slate-600 dark:text-slate-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* menu desplegable en movil */}
      {menuOpen && (
        <ul className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-700/50 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)} // cerramos el menu al hacer click
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar