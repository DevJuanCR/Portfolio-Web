import { useEffect, useRef } from 'react'

function DotGrid() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    // ajustamos el canvas al tamano de la ventana
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // guardamos la posicion del raton
    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    const spacing = 40 // distancia entre puntos
    const baseRadius = 1 // tamano normal del punto
    const maxRadius = 3 // tamano maximo cuando el raton esta cerca
    const influenceRadius = 150 // area de influencia del raton

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // detectamos si estamos en dark mode
      const isDark = document.documentElement.classList.contains('dark')
      const dotColor = isDark ? 'rgba(148, 163, 184, 0.15)' : 'rgba(100, 116, 139, 0.12)'
      const highlightColor = isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)'

      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2
          const y = j * spacing + spacing / 2

          // distancia del punto al raton
          const dx = x - mouseRef.current.x
          const dy = y - (mouseRef.current.y + window.scrollY) // compensamos el scroll
          const distance = Math.sqrt(dx * dx + dy * dy)

          // el punto crece y cambia de color cuando el raton esta cerca
          let radius = baseRadius
          let color = dotColor

          if (distance < influenceRadius) {
            const factor = 1 - distance / influenceRadius
            radius = baseRadius + (maxRadius - baseRadius) * factor
            color = highlightColor
          }

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default DotGrid