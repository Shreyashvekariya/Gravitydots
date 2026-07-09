import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import './FloatingContactBtn.css'

const FloatingContactBtn = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show if scrolled down on home, or if on any other page
  const shouldShow = isScrolled || location.pathname !== '/'

  return (
    <Link 
      to="/contact" 
      className={`floating-contact-btn ${shouldShow ? 'visible' : ''}`}
    >
      <div className="floating-icon-wrapper">
        <FaPhoneAlt size={22} />
      </div>
      <span className="floating-text">Get Free Consultation</span>
    </Link>
  )
}

export default FloatingContactBtn
