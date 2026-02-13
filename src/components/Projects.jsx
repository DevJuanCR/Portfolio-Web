import { useState, useEffect } from 'react'
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa'

const GITHUB_USER = 'DevJuanCR'

// colores oficiales de github para la barra de lenguajes
const langColors = {
  Java: '#b07219',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Dockerfile: '#384d54',
  PHP: '#4F5D95',
}

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRepos()
  }, [])

  async function fetchRepos() {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`
      )
      if (!res.ok) throw new Error('GitHub API error')
      const data = await res.json()

      // quitamos forks y el propio repo del portfolio
      const filtered = data.filter(
        (repo) => !repo.fork && repo.name !== 'Portfolio-Web'
      )

      // para cada repo sacamos el desglose de lenguajes
      const reposWithLangs = await Promise.all(
        filtered.map(async (repo) => {
          const langRes = await fetch(repo.languages_url)
          const languages = await langRes.json()
          return { ...repo, languages }
        })
      )

      setRepos(reposWithLangs)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // convertimos los bytes de cada lenguaje a porcentaje
  function getLangPercentages(languages) {
    const total = Object.values(languages).reduce((sum, val) => sum + val, 0)
    if (total === 0) return []
    return Object.entries(languages).map(([name, bytes]) => ({
      name,
      percentage: ((bytes / total) * 100).toFixed(1),
      color: langColors[name] || '#8b8b8b', // gris si no tenemos el color
    }))
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Loading projects from GitHub...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12">Projects</h2>
          <p className="text-red-500 dark:text-red-400">Could not load projects right now</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo) => {
            const langs = getLangPercentages(repo.languages)
            return (
              <div
                key={repo.id}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {repo.description || 'No description'}
                </p>

                {/* estrellas y forks del repo */}
                <div className="flex items-center gap-4 text-sm text-slate-400 dark:text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                </div>

                {/* barra de lenguajes estilo github */}
                {langs.length > 0 && (
                  <div>
                    <div className="flex h-2 rounded-full overflow-hidden mb-2">
                      {langs.map((lang) => (
                        <div
                          key={lang.name}
                          style={{
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color,
                          }}
                          title={`${lang.name} ${lang.percentage}%`}
                        />
                      ))}
                    </div>
                    {/* leyenda con los colores de cada lenguaje */}
                    <div className="flex flex-wrap gap-3">
                      {langs.map((lang) => (
                        <span
                          key={lang.name}
                          className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
                        >
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: lang.color }}
                          />
                          {lang.name} {lang.percentage}%
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects