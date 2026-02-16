import { FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} Juan Carlos. {t('footer.rights')} {/* el ano se actualiza solo */}
        </span>
        <div className="flex items-center gap-4">
          <span>{t('footer.built')}</span>
          {/* link al GitHub del portfolio */}
          <a
            href="https://github.com/DevJuanCR/Portfolio-Web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer