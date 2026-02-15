import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiSelenium,
  SiGithubactions,
  SiIntellijidea,
} from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import Tooltip from './Tooltip'

// separamos las tecnologias por categoria con tooltip de contexto
const categories = [
  {
    titleKey: 'stack.languages',
    techs: [
      { name: 'Java', icon: <FaJava />, tip: 'SysAdmin Monitor' },
      { name: 'Python', icon: <FaPython />, tip: 'SysAdmin Monitor · InfoJobs Scraper' },
      { name: 'JavaScript', icon: <FaJsSquare />, tip: 'SysAdmin Monitor · Portfolio' },
      { name: 'PHP', icon: <FaPhp />, tip: 'Infomesidess FCT' },
      { name: 'HTML', icon: <FaHtml5 />, tip: 'SysAdmin Monitor · Portfolio' },
      { name: 'CSS', icon: <FaCss3Alt />, tip: 'SysAdmin Monitor · Portfolio' },
    ],
  },
  {
    titleKey: 'stack.frameworks',
    techs: [
      { name: 'Spring Boot', icon: <SiSpringboot />, tip: 'SysAdmin Monitor' },
      { name: 'React', icon: <SiReact />, tip: 'Portfolio' },
      { name: 'Tailwind', icon: <SiTailwindcss />, tip: 'Portfolio' },
      { name: 'Selenium', icon: <SiSelenium />, tip: 'InfoJobs Scraper' },
    ],
  },
  {
    titleKey: 'stack.devops',
    techs: [
      { name: 'Docker', icon: <FaDocker />, tip: 'SysAdmin Monitor' },
      { name: 'Git', icon: <FaGitAlt />, tip: 'All projects' },
      { name: 'GitHub', icon: <FaGithub />, tip: 'All projects' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, tip: 'SysAdmin Monitor' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, tip: 'SysAdmin Monitor' },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, tip: 'SysAdmin Monitor' },
      { name: 'Linux', icon: <FaLinux />, tip: 'OneSystem FCT' },
    ],
  },
]

function TechStack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
            {t('stack.title')}
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {categories.map((cat, catIndex) => (
            <ScrollReveal key={cat.titleKey} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                  {t(cat.titleKey)}
                </h3>
                {/* grid responsive: 3 columnas en movil, 6 en desktop */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {cat.techs.map((tech) => (
                    <Tooltip key={tech.name} text={tech.tip}>
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-200 cursor-default">
                        <span className="text-2xl text-slate-700 dark:text-slate-300">{tech.icon}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{tech.name}</span>
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack