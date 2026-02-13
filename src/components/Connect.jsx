import './Connect.css'

function Connect() {
  return (
    <section className="connect" id="contact">
      <div className="connect-bg">
        <div className="watermark">
          <span>SIMPLE.</span>
          <span>EFFECTIVE.</span>
          <span>RESULT-ORIENTED.</span>
        </div>
        <div className="laptop-mockup">
          <div className="laptop-screen">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Project Preview" />
          </div>
          <div className="laptop-base">
            <div className="laptop-notch"></div>
          </div>
        </div>
      </div>

      <div className="connect-info">
        <h2 className="connect-title">CONNECT WITH US</h2>
        <div className="contact-grid">
          <a href="tel:+918401589892" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="contact-text">
              <p>+91 84015 89892</p>
              <p>+91 84013 89892</p>
            </div>
          </a>
          <a href="mailto:Info@gravitydots.in" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <div className="contact-text">
              <p>Info@gravitydots.in</p>
              <p>Gravitydots98@gmail.com</p>
            </div>
          </a>
          <a href="https://maps.google.com/?q=B-346,Money+plant+high+street,Jagatpur,S+G+Hwy,Ahmedabad,Gujarat+382481" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
              </svg>
            </div>
            <div className="contact-text">
              <p>B-346, Money plant high street, Jagatpur,</p>
              <p>S G Hwy, Ahmedabad, Gujarat 382481</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Connect
