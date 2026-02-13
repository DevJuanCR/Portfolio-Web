import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

// los links de redes que aparecen debajo del nombre
const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/DevJuanCR', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/devjuancr', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:devjuancr@gmail.com', label: 'Email' },
]

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">

        <p className="text-blue-600 dark:text-blue-400 text-lg mb-2 font-medium">
          {t('hero.greeting')}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Juan Carlos
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8">
          {t('hero.subtitle')}
        </h2>

        <div className="flex justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              aria-label={link.label} // accesibilidad para lectores de pantalla
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero