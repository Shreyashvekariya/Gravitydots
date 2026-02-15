import './Hero.css'
import Marquee from './Marquee'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title bebas">
          LAUNCH YOUR BRAND INTO<br />
          THE DIGITAL ORBIT WITH<br />
          GRAVITY DOTS
        </h1>
        <div className="scroll-indicator">
          <svg width="50" height="50" viewBox="0 0 24 18" fill="none">
            <defs>
              <linearGradient id="chevronGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C41E3A" />
                <stop offset="100%" stopColor="#ff6b6b" />
              </linearGradient>
            </defs>
            <path d="M2 10l10 8 10-8" stroke="url(#chevronGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 2l10 8 10-8" stroke="url(#chevronGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <Marquee />
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Digital Marketing" />
      </div>
    </section>
  )
}

export default Hero
