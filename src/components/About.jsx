import { Trans, useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import avatar from '../assets/avatar.png'

// componente reutilizable para el texto resaltado en azul
const Highlight = ({ children }) => (
  <span className="text-blue-600 dark:text-blue-400">{children}</span>
)

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
              // mover el enfoque a la izquierda y ajustar vertical
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
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

export default About