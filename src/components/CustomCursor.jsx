import { useEffect, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [smallPosition, setSmallPosition] = useState({ x: 0, y: 0 })
  const [isWhite, setIsWhite] = useState(false)

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

    const handleMouseOver = (e) => {
      let el = e.target;
      let foundBlack = false;
      while (el && el !== document.body && el !== document.documentElement) {
        const bgColor = window.getComputedStyle(el).backgroundColor;
        if (bgColor === 'rgb(0, 0, 0)' || bgColor === 'rgba(0, 0, 0, 1)' || bgColor === 'black') {
          foundBlack = true;
          break;
        }
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent' && bgColor !== '') {
           break;
        }
        el = el.parentElement;
      }
      setIsWhite(foundBlack);
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    animationFrameId = requestAnimationFrame(animateSmallDot)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [position.x, position.y])

  return (
    <>
      <div
        className={`custom-cursor-large ${isWhite ? 'white-cursor' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-small ${isWhite ? 'white-cursor' : ''}`}
        style={{
          left: `${smallPosition.x}px`,
          top: `${smallPosition.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
