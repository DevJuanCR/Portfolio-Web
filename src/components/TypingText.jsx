import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function TypingText({ text, delay = 0, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  // esperamos el delay inicial antes de empezar a escribir
  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(timeout)
  }, [delay])

  // vamos anadiendo letras una a una
  useEffect(() => {
    if (!started) return

    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++
      if (index >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed])

  // reseteamos cuando cambia el texto (por cambio de idioma)
  useEffect(() => {
    setDisplayedText('')
    setStarted(false)
    const timeout = setTimeout(() => setStarted(true), 100) // reiniciamos rapido al cambiar idioma
    return () => clearTimeout(timeout)
  }, [text])

  if (!started) return <span className="opacity-0">{text}</span> // reservamos el espacio

  return (
    <span>
      {displayedText}
      {/* cursor parpadeante */}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block ml-0.5 -mb-0.5 w-0.5 h-[1em] bg-current align-middle"
      />
    </span>
  )
}

export default TypingText