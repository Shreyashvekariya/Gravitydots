import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './CustomCursor.css'

function CustomCursor() {
  const largeRef = useRef(null)
  const smallRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const smallPos = useRef({ x: 0, y: 0 })
  const [isWhite, setIsWhite] = useState(false)
  const location = useLocation()

  // Detect if we're on the work-details page — disable cursor entirely
  const isWorkPage = location.pathname === '/work-details'

  useEffect(() => {
    // Skip all cursor logic on work-details page for better performance
    if (isWorkPage) return;

    let animationFrameId
    let pendingTarget = null
    let idleCallbackId = null
    let hasMoved = false

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      // Show cursor dots on first move (they start hidden via CSS opacity:0)
      if (!hasMoved) {
        hasMoved = true
        if (largeRef.current) largeRef.current.style.opacity = '1'
        if (smallRef.current) smallRef.current.style.opacity = '1'
      }
    }

    // The expensive color check — runs only during idle time or after a short delay,
    // so it never blocks the cursor position RAF loop.
    const checkBackground = (target) => {
      let el = target
      let foundBlack = false
      while (el && el !== document.body && el !== document.documentElement) {
        const bgColor = window.getComputedStyle(el).backgroundColor
        if (bgColor === 'rgb(0, 0, 0)' || bgColor === 'rgba(0, 0, 0, 1)' || bgColor === 'black') {
          foundBlack = true
          break
        }
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent' && bgColor !== '') {
          break
        }
        el = el.parentElement
      }
      setIsWhite(foundBlack)
    }

    // Schedule the color check outside the critical path
    const scheduleColorCheck = (target) => {
      // Cancel any previously scheduled check
      if (idleCallbackId != null) {
        if (typeof cancelIdleCallback === 'function') {
          cancelIdleCallback(idleCallbackId)
        } else {
          clearTimeout(idleCallbackId)
        }
      }

      if (typeof requestIdleCallback === 'function') {
        idleCallbackId = requestIdleCallback(() => {
          checkBackground(target)
          idleCallbackId = null
        }, { timeout: 80 })
      } else {
        // Fallback for browsers without requestIdleCallback
        idleCallbackId = setTimeout(() => {
          checkBackground(target)
          idleCallbackId = null
        }, 60)
      }
    }

    // mouseover — only schedule a deferred check when target changes
    const handleMouseOver = (e) => {
      if (e.target === pendingTarget) return
      pendingTarget = e.target
      scheduleColorCheck(e.target)
    }

    // Single RAF loop — updates DOM directly, no React re-renders
    const lerp = 0.15
    const animate = () => {
      const mx = mousePos.current.x
      const my = mousePos.current.y

      // Update large cursor directly
      if (largeRef.current) {
        largeRef.current.style.left = mx + 'px'
        largeRef.current.style.top = my + 'px'
      }

      // Smooth trailing for small dot
      smallPos.current.x += (mx - smallPos.current.x) * lerp
      smallPos.current.y += (my - smallPos.current.y) * lerp

      if (smallRef.current) {
        smallRef.current.style.left = smallPos.current.x + 'px'
        smallRef.current.style.top = smallPos.current.y + 'px'
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
      if (idleCallbackId != null) {
        if (typeof cancelIdleCallback === 'function') {
          cancelIdleCallback(idleCallbackId)
        } else {
          clearTimeout(idleCallbackId)
        }
      }
    }
  }, [isWorkPage])

  // Don't render cursor elements on work-details page
  if (isWorkPage) return null;

  return (
    <>
      <div
        ref={largeRef}
        className={`custom-cursor-large ${isWhite ? 'white-cursor' : ''}`}
      />
      <div
        ref={smallRef}
        className={`custom-cursor-small ${isWhite ? 'white-cursor' : ''}`}
      />
    </>
  )
}

export default CustomCursor
