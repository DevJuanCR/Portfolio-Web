import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

function Experience() {
  const { t } = useTranslation()

  // sacamos los datos de experiencia de las traducciones
  const experiences = [
    {
      role: t('experience.job1.role'),
      company: t('experience.job1.company'),
      date: t('experience.job1.date'),
      badge: t('experience.job1.badge'),
      tasks: [
        t('experience.job1.task1'),
        t('experience.job1.task2'),
        t('experience.job1.task3'),
      ],
    },
    {
      role: t('experience.job2.role'),
      company: t('experience.job2.company'),
      date: t('experience.job2.date'),
      badge: t('experience.job2.badge'),
      tasks: [
        t('experience.job2.task1'),
        t('experience.job2.task2'),
        t('experience.job2.task3'),
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            {t('experience.title')}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* linea vertical del timeline: centrada en desktop, a la izquierda en movil */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : '' // alterna izquierda y derecha
                }`}
              >
                {/* punto en el timeline: visible en movil y desktop */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2" />

                <div className="hidden md:block md:w-1/2" /> {/* spacer para el lado vacio en desktop */}

                {/* card con margen izquierdo en movil para dejar espacio al timeline */}
                <div className="ml-10 md:ml-0 md:w-1/2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-5 sm:p-6 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-medium w-fit">
                      {exp.badge}
                    </span>
                  </div>

                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">{exp.company}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">{exp.date}</p>

                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                        <span className="text-blue-500 mt-1 shrink-0">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience