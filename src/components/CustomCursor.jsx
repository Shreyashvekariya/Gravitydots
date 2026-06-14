import { useEffect, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [smallPosition, setSmallPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Smooth trailing effect for small dot
    const animateSmallDot = () => {
      setSmallPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }))
      animationFrameId = requestAnimationFrame(animateSmallDot)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(animateSmallDot)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [position.x, position.y])

  return (
    <>
      <div
        className="custom-cursor-large"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-small"
        style={{
          left: `${smallPosition.x}px`,
          top: `${smallPosition.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
