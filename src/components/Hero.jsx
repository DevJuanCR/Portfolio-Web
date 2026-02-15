import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import TypingText from './TypingText'

// los links de redes que aparecen debajo del nombre
const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/DevJuanCR', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/devjuancr', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:devjuancr@gmail.com', label: 'Email' },
]

function Hero() {
  const { t } = useTranslation()
  const ref = useRef(null)

  // trackeamos el scroll dentro del hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // el contenido sube lentamente y se desvanece al hacer scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">

      {/* particulas decorativas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* el contenido se mueve con parallax */}
      <motion.div style={{ y, opacity }} className="text-center max-w-2xl relative z-10">

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
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-slate-100 dark:via-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
        >
          Juan Carlos
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8"
        >
          <TypingText text={t('hero.subtitle')} delay={0.8} speed={45} />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex justify-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors hover:scale-110 duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

      </motion.div>

      {/* flecha bounce abajo del hero */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
        >
          <FaChevronDown />
        </motion.div>
      </motion.a>

    </section>
  )
}

export default Hero