import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import WorkDetails from './components/WorkDetails'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // If lenis is available globally, we can reset its scroll too
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    }
  }, [location.pathname])

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Disable keyboard shortcuts for screenshots and dev tools
    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
        (e.metaKey && e.shiftKey && e.keyCode === 73) || // Cmd+Shift+I (Mac)
        (e.metaKey && e.shiftKey && e.keyCode === 74) || // Cmd+Shift+J (Mac)
        (e.metaKey && e.keyCode === 85) || // Cmd+U (Mac)
        (e.metaKey && e.keyCode === 83) // Cmd+S (Mac)
      ) {
        e.preventDefault()
        return false
      }

      // Disable Print Screen
      if (e.keyCode === 44) {
        e.preventDefault()
        return false
      }
    }

    // Disable drag on images
    const handleDragStart = (e) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    window.lenis = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <Preloader />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/work" element={<Navigate to="/work-details" replace />} /> */}
          <Route path="/work-details" element={<WorkDetails />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
