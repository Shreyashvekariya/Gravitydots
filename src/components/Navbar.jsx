import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import navLogo from '../assets/images/GD LOGO (BLACK & WHITE).png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
          <Link to="/">
            <img src={navLogo} alt="Gravity Dots" className="logo-image" />
          </Link>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            {/* If on home, anchor link. If on other page, Link to /#id */}
            {location.pathname === '/' ? (
              <a href="#hero" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</a>
            ) : (
              <Link to="/#hero" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
            )}
          </li>
          <li>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About us</Link>
          </li>
          <li>
            <Link to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Work</Link>
          </li>
          <li>
            <Link to="/casestudies" className={`nav-link ${location.pathname === '/casestudies' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Casestudy</Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
