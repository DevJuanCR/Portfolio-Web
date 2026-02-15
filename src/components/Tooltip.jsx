import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap px-2.5 py-1 rounded bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 text-xs font-medium shadow-lg pointer-events-none"
          >
            {text}
            {/* flechita del tooltip */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip