import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// componente reutilizable que anima sus hijos cuando entran en pantalla
function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // elegimos de donde viene la animacion
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directions[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal