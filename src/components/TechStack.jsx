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

// separamos las tecnologias por categoria
// titleKey apunta a la clave de traduccion de cada categoria
const categories = [
  {
    titleKey: 'stack.languages',
    techs: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
    ],
  },
  {
    titleKey: 'stack.frameworks',
    techs: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Selenium', icon: <SiSelenium /> },
    ],
  },
  {
    titleKey: 'stack.devops',
    techs: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
      { name: 'Linux', icon: <FaLinux /> },
    ],
  },
]

function TechStack() {
  const { t } = useTranslation()

  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          {t('stack.title')}
        </h2>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.titleKey}>
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                {t(cat.titleKey)}
              </h3>
              {/* grid responsive: 3 columnas en movil, 6 en desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-colors"
                  >
                    <span className="text-2xl text-slate-700 dark:text-slate-300">{tech.icon}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TechStack