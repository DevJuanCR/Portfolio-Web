import { useState, useEffect } from 'react'

// detectamos que seccion esta visible en pantalla
function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px', // se activa cuando la seccion esta en el centro de la pantalla
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect() // limpiamos al desmontar
  }, [])

  return activeSection
}

export default useActiveSection