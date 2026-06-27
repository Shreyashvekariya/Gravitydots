import './Hero.css'
import Marquee from './Marquee'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="sticky-hero-top">
        <div className="hero-content">
          <h1 className="hero-title">
            HELPING BUSINESSES GENERATES <br />
            MORE LEADS SALES & BRAND GROWTH<br />
            THROUGH DATA DRIVEN DIGITAL MARKETING
          </h1>
          <Link to="/contact" className="hero-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                </svg>
              </div>
            </div>
            <span>Get Free Consultation</span>
          </Link>
        </div>
        <Marquee />
      </div>
    </section>
  )
}

export default Hero
