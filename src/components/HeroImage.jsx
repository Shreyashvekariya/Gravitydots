import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import hero from '../assets/images/hero.mp4'
import './HeroImage.css'

function HeroImage() {
  const { scrollY } = useScroll()
  const videoRef = useRef(null)
  const isInView = useInView(videoRef, { margin: "-100px" })

  // Scale up the image as the user scrolls
  const scaleImage = useTransform(scrollY, [0, 600], [0.8, 1])

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
