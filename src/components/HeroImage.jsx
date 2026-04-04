import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroGif from '../assets/images/hero.gif'
import './HeroImage.css'

function HeroImage() {
  const { scrollY } = useScroll()

  // Scale up the image as the user scrolls
  const scaleImage = useTransform(scrollY, [0, 600], [0.8, 1])

  return (
    <section className="hero-image-section">
      <motion.div
        className="hero-image"
        style={{ scale: scaleImage }}
      >
        <img src={heroGif} alt="Digital Marketing" />
      </motion.div>
    </section>
  )
}

export default HeroImage
