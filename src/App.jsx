import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import WhyChooseUs from './components/WhyChooseUs'
import Clients from './components/Clients'
import Connect from './components/Connect'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <div className="main-content">
        <Navbar />
        <Hero />
        <Services />
        <Clients />
        <WhyChooseUs />
        <Reviews />
        <Connect />
      </div>
      <Footer />
    </div>
  )
}

export default App
