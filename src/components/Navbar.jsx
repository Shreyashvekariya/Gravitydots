import { useState } from 'react'
import './Navbar.css'
import navLogo from '../assets/images/GD LOGO (BLACK & WHITE).png'

function Navbar() {
  const [activeLink, setActiveLink] = useState('services')

  const handleClick = (linkName) => {
    setActiveLink(linkName)
  }

  return (
    <header className="navbar-wrapper">
      <div className="top-marquee">
        <div className="marquee-content">
          {/* First group */}
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          {/* Second group (duplicate for seamless loop) */}
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
          <span>We don't just market brands we build them</span>
          <span className="dot">*</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={navLogo} alt="Gravity Dots" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><a href="#services" className={activeLink === 'services' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('services')}>Services</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('about')}>About us</a></li>
          <li><a href="#work" className={activeLink === 'work' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('work')}>Work</a></li>
          <li><a href="#casestudy" className={activeLink === 'casestudy' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('casestudy')}>Casestudy</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => handleClick('contact')}>Contact us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
