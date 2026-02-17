import { useTranslation } from 'react-i18next'
import CountUp from './CountUp'
import ScrollReveal from './ScrollReveal'
import { FaCode, FaLayerGroup, FaGlobe, FaBriefcase } from 'react-icons/fa'

function Stats() {
  const { t } = useTranslation()

  // los datos de cada stat
  const stats = [
    { icon: <FaCode />, value: 2, suffix: '+', label: t('stats.projects') },
    { icon: <FaLayerGroup />, value: 10, suffix: '+', label: t('stats.technologies') },
    { icon: <FaGlobe />, value: 4, suffix: '', label: t('stats.languages') },
    { icon: <FaBriefcase />, value: 2, suffix: '', label: t('stats.experience') },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              // glow azul al hacer hover como el avatar
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-blue-500/0 group-hover:bg-blue-500/15 rounded-lg blur-xl transition-all duration-500" />
                <div className="relative text-center p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg group-hover:border-blue-500/50 transition-all duration-300">

                  {/* icono */}
                  <div className="text-2xl text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>

                  {/* numero animado */}
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* label */}
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Stats