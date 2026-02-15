import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Preloader({ onFinish }) {
  const [phase, setPhase] = useState(0) // 0: escribiendo, 1: completo, 2: saliendo

  // el texto se va mostrando por fases
  const phases = [
    '<',
    '<Dev',
    '<DevJuan',
    '<DevJuanCR',
    '<DevJuanCR/>',
  ]

  useEffect(() => {
    let current = 0

    const interval = setInterval(() => {
      current++
      if (current >= phases.length) {
        clearInterval(interval)
        setPhase(phases.length - 1)
        // esperamos un momento con el texto completo antes de salir
        setTimeout(() => onFinish(), 600)
      } else {
        setPhase(current)
      }
    }, 200) // velocidad de cada fase

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-slate-50 dark:bg-slate-900 flex items-center justify-center"
    >
      <div className="text-center">
        {/* logo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-blue-600 dark:text-blue-500"
        >
          {phases[phase]}
          {/* cursor parpadeante */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className="inline-block ml-0.5 w-0.5 h-[1em] bg-blue-600 dark:bg-blue-500 align-middle -mb-1"
          />
        </motion.div>

        {/* barra de carga debajo */}
        <div className="mt-8 w-48 mx-auto h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Preloader