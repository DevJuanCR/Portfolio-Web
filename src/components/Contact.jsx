import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

// links de contacto que aparecen como cards
const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'devjuancr@gmail.com',
    href: 'mailto:devjuancr@gmail.com',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/devjuancr',
    href: 'https://www.linkedin.com/in/devjuancr',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/DevJuanCR',
    href: 'https://github.com/DevJuanCR',
  },
]

function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          {t('contact.title')}
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mb-10">
          {t('contact.subtitle')}
        </p>

        <div className="flex flex-col gap-4">
          {contactLinks.map((link) => (
            // group para que el hover del padre afecte a los hijos
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-colors group"
            >
              <span className="text-2xl text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.icon}
              </span>
              <div className="text-left">
                <span className="block text-sm text-slate-400 dark:text-slate-500">{link.label}</span>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact