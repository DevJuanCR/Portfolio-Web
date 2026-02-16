import { Trans, useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import avatar from '../assets/avatar.png'

// componente reutilizable para el texto resaltado en azul
const Highlight = ({ children }) => (
  <span className="text-blue-600 dark:text-blue-400">{children}</span>
)

// idiomas que hablo con sus banderas de flag-icons
const spokenLanguages = [
  { name: 'Español', levelKey: 'about.native', flagClass: 'fi fi-es' },
  { name: 'Català', levelKey: 'about.native', flagClass: 'fi fi-es-ct' },
  { name: 'English', levelKey: 'about.levelB1', flagClass: 'fi fi-us' },
  { name: 'Română', levelKey: 'about.native', flagClass: 'fi fi-ro' },
]

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            {t('about.title')}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* avatar */}
          <ScrollReveal delay={0.1} direction="left">
            <img
              src={avatar}
              alt="Juan Carlos"
              className="w-65 h-65 rounded-full border-3 border-blue-500/30 object-cover object-[65%_30%] shrink-0"
            />
          </ScrollReveal>

          {/* en movil centramos el texto y en desktop lo alineamos a la izquierda */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-center md:text-left">
              <p>
                <Trans
                  i18nKey="about.p1"
                  components={{ highlight: <Highlight /> }}
                />
              </p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>

              {/* idiomas que hablo */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {t('about.languagesTitle')}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {spokenLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-full px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className={`${lang.flagClass} text-base`} />
                      <span>{lang.name}</span>
                      {/* el nivel se traduce segun el idioma seleccionado */}
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {t(lang.levelKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

export default About