import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const steps = 60 // numero de pasos de la animacion
    const increment = target / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default CountUp