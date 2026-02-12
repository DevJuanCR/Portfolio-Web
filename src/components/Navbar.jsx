import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <a href="#" className="text-xl font-bold text-blue-500">
          &lt;DevJuanCR /&gt;
        </a>

        {/* links en desktop */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* boton hamburguesa en movil */}
        <button
          className="md:hidden text-slate-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* menu movil desplegable */}
      {menuOpen && (
        <ul className="md:hidden bg-slate-900/95 border-t border-slate-700/50 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)} // cierra el menu al hacer click
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