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

const categories = [
  {
    title: 'Languages',
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
    title: 'Frameworks & Libraries',
    techs: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Selenium', icon: <SiSelenium /> },
    ],
  },
  {
    title: 'DevOps & Tools',
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
  return (
    <section id="stack" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-slate-100 mb-12 text-center">
          Tech Stack
        </h2>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-blue-400 font-semibold text-lg mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors"
                  >
                    <span className="text-2xl text-slate-300">{tech.icon}</span>
                    <span className="text-xs text-slate-400">{tech.name}</span>
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