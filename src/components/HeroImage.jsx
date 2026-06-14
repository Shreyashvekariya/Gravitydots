import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import hero from '../assets/images/hero.mp4'
import './HeroImage.css'

function HeroImage() {
  const { scrollY } = useScroll()
  const videoRef = useRef(null)
  const isInView = useInView(videoRef, { margin: "-100px" })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Disable zoom effect on mobile, keep it on desktop
  const scaleImage = useTransform(scrollY, [0, 600], isMobile ? [1, 1] : [0.8, 1])

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log("Play prevented by browser:", e))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <section className="hero-image-section">
      <motion.div
        className="hero-image"
        style={{ scale: scaleImage }}
      >
        <video
          ref={videoRef}
          src={hero}
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </section>
  )
}

export default HeroImage
