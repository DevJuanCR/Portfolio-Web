import { Trans, useTranslation } from 'react-i18next'

// componente reutilizable para el texto resaltado en azul
const Highlight = ({ children }) => (
  <span className="text-blue-600 dark:text-blue-400">{children}</span>
)

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          {t('about.title')}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* placeholder del avatar */}
          <div className="w-48 h-48 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center shrink-0">
            <span className="text-6xl">👨‍💻</span>
          </div>

          {/* en movil centramos el texto y en desktop lo alineamos a la izquierda */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-center md:text-left">
            <p>
              {/* Trans renderiza las etiquetas <highlight> del json como componentes react */}
              <Trans
                i18nKey="about.p1"
                components={{ highlight: <Highlight /> }}
              />
            </p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About