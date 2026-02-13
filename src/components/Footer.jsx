import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-500">
        <span>
          © {new Date().getFullYear()} Juan Carlos. {t('footer.rights')} {/* el ano se actualiza solo */}
        </span>
        <span>
          {t('footer.built')}
        </span>
      </div>
    </footer>
  )
}

export default Footer