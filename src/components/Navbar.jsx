import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.stack', href: '#stack' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
]

// usamos flag-icons para poner las banderas
const languages = [
  { code: 'es', label: 'ES', flagClass: 'fi fi-es' },
  { code: 'en', label: 'EN', flagClass: 'fi fi-us' },
  { code: 'ca', label: 'CA', flagClass: 'fi fi-es-ct' },
  { code: 'ro', label: 'RO', flagClass: 'fi fi-ro' },
]

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { t, i18n } = useTranslation()

  // cambiamos idioma y lo guardamos en localStorage
  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setLangOpen(false)
  }

  // sacamos el idioma actual para mostrarlo en el boton
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0]

  return (
    // backdrop-blur para el efecto cristal al hacer scroll
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-500">
          &lt;DevJuanCR /&gt;
        </a>

        {/* links en desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
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
                className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)} // cerramos el menu al hacer click
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar