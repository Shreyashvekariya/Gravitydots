import './Hero.css'
import Marquee from './Marquee'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="sticky-hero-top">
        <div className="hero-content">
          <h1 className="hero-title">
            LAUNCH YOUR BRAND INTO<br />
            THE DIGITAL ORBIT WITH<br />
            GRAVITY DOTS
          </h1>
        </div>
        <Marquee />
      </div>
    </section>
  )
}

export default Hero
