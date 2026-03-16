import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroGif from '../assets/hero.gif'
import './HeroImage.css'

function HeroImage() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [200, 800], [0.85, 1])

  return (
    <motion.div className="hero-image-container" style={{ scale }}>
      <img src={heroGif} alt="Digital Marketing" />
    </motion.div>
  )
}

export default HeroImage
