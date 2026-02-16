import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const navLinks = [
  { key: 'nav.about', href: '#about', section: 'about' },
  { key: 'nav.stack', href: '#stack', section: 'stack' },
  { key: 'nav.projects', href: '#projects', section: 'projects' },
  { key: 'nav.experience', href: '#experience', section: 'experience' },
  { key: 'nav.education', href: '#education', section: 'education' },
  { key: 'nav.contact', href: '#contact', section: 'contact' },
]

// flag-icons usa codigos ISO, Cataluna es es-ct
const languages = [
  { code: 'es', label: 'ES', flagClass: 'fi fi-es' },
  { code: 'en', label: 'EN', flagClass: 'fi fi-us' },
  { code: 'ca', label: 'CA', flagClass: 'fi fi-es-ct' },
  { code: 'ro', label: 'RO', flagClass: 'fi fi-ro' },
]

function Navbar({ darkMode, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  // detectamos cuando el usuario hace scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // cerramos el menu movil si la pantalla se hace grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // bloqueamos el scroll del body cuando el menu movil esta abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // cambiamos idioma y lo guardamos en localStorage
  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setLangOpen(false)
  }

  // sacamos el idioma actual para mostrarlo en el boton
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0]

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* logo con efecto de brillo al hacer hover */}
          <motion.a
            href="#hero"
            className="text-xl font-bold text-blue-600 dark:text-blue-500 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">&lt;DevJuanCR/&gt;</span>
            {/* linea de brillo que pasa por encima al hacer hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
          </motion.a>

          {/* links en desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === link.section
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {t(link.key)}
              </a>
            ))}

            {/* selector de idioma */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium px-2 py-1 border border-slate-300 dark:border-slate-600 rounded"
              >
                <span className={`${currentLang.flagClass} text-base`} />
                <span>{currentLang.label}</span>
              </button>
              {langOpen && (
                <>
                  {/* overlay invisible para cerrar al hacer click fuera */}
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                          lang.code === i18n.language
                            ? 'text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <span className={`${lang.flagClass} text-base`} />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* sol en dark porque quieres ir a light y viceversa */}
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg p-1"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* controles en movil: idioma + tema + hamburguesa */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-sm font-medium px-2 py-1 border border-slate-300 dark:border-slate-600 rounded"
              >
                <span className={`${currentLang.flagClass} text-base`} />
                <span>{currentLang.label}</span>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                          lang.code === i18n.language
                            ? 'text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        <span className={`${lang.flagClass} text-base`} />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
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
                  className={`block py-2 transition-colors ${
                    activeSection === link.section
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={() => setMenuOpen(false)} // cerramos el menu al hacer click
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* overlay con blur detras del menu movil */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)} // cerramos al tocar fuera
        />
      )}
    </>
  )
}

export default Navbar