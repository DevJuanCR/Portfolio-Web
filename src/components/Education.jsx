import { FaGraduationCap } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

function Education() {
  const { t } = useTranslation()

  // sacamos las titulaciones de las traducciones
  const degrees = [
    {
      name: t('education.degree1.name'),
      school: t('education.degree1.school'),
      date: t('education.degree1.date'),
      badge: t('education.degree1.badge'),
    },
    {
      name: t('education.degree2.name'),
      school: t('education.degree2.school'),
      date: t('education.degree2.date'),
      badge: t('education.degree2.badge'),
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            {t('education.title')}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((degree, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              {/* mismo efecto hover que las project cards */}
              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">

                <div className="flex items-center justify-between mb-3">
                  {/* el icono crece un poco al hacer hover en la card */}
                  <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-medium">
                    {degree.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {degree.name}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">
                  {degree.school}
                </p>

                <p className="text-slate-400 dark:text-slate-500 text-sm">
                  {degree.date}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education