import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        {/* 404 grande con gradiente */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl sm:text-9xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-slate-100 dark:via-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* logo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-mono text-blue-600 dark:text-blue-500 mb-6"
        >
          &lt;DevJuanCR/&gt;
        </motion.p>

        {/* mensaje de error */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-500 dark:text-slate-400 mb-8 text-lg"
        >
          {t('notFound.message')}
        </motion.p>

        {/* boton para volver */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          {t('notFound.button')}
        </motion.a>

      </div>
    </div>
  )
}

export default NotFound