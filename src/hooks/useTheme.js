import { useState, useEffect } from 'react'

function useTheme() {
  // si no hay nada guardado arrancamos en dark
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  // cada vez que cambia darkMode actualizamos la clase del html y guardamos
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  return { darkMode, toggleTheme }
}

export default useTheme