import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

// los links de redes que aparecen debajo del nombre
const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/DevJuanCR', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/devjuancr', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:devjuancr@gmail.com', label: 'Email' },
]

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-2xl">

        {/* cada elemento entra con un delay diferente para efecto cascada */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-blue-600 dark:text-blue-400 text-base sm:text-lg mb-2 font-medium"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          Juan Carlos
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors hover:scale-110 duration-200"
              aria-label={link.label} // accesibilidad para lectores de pantalla
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Hero