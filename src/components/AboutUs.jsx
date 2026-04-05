import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      {/* Section 1: Hero with Mission Statement */}
      <section className="about-hero">
        <h2 className="about-mission">
          To help businesses grow online with innovative, data-driven,
          <br />
          and affordable digital marketing solutions.
        </h2>
        
        <div className="about-cards-grid">
          <div className="about-card">
            <div className="card-content">
              <span className="card-badge">Approach</span>
              <h3>Business Ka Kya<br />Future Hai Re Baba?</h3>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              <span className="card-badge designer">Le Designer</span>
              <h3>When Design Approves<br />on First Attempt!</h3>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              <h3>Client Dreams vs. Client Wallets</h3>
              <p>Arey bhai itne me itna hi hoga</p>
            </div>
          </div>
          <div className="about-card">
            <div className="card-content">
              <h3>Ey hoshiyaar...</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="who-we-are">
        <h2 className="section-title bold-title">Who We Are</h2>
        <p className="section-description">
          GravityDots is a digital-first agency focused on creating meaningful, high-impact digital
          experiences. We work at the intersection of strategy, creativity, and technology to help brands
          stand out, perform better, and scale with confidence in an ever-evolving digital landscape.
        </p>

        <h2 className="section-title">About GravityDots</h2>
        <p className="section-description">
          Welcome to GravityDots! Founded by <strong>Keyur Mehta</strong> and <strong>Jatin H. Kateliya</strong> in 2022, GravityDots is a
          results driven digital marketing agency focused on building and scaling brands through
          strategic and performance oriented solutions. We have successfully worked with <strong>103+ clients</strong> across national and international markets, helping businesses establish a strong digital
          presence and achieve measurable growth.
        </p>
        <p className="section-description">
          Our services include branding, website development, social media marketing, performance
          advertising, SEO and influencer marketing, offering end to end solutions tailored to each client's
          goals. We combine creativity with data driven strategies to deliver impactful campaigns and
          long-term results.
        </p>
      </section>

      {/* Section 3: Founders */}
      <section className="founders-section">
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image-placeholder"></div>
            <h3 className="founder-name">Keyur Mehta</h3>
            <p className="founder-role">Managing Director</p>
          </div>
          <div className="founder-card">
            <div className="founder-image-placeholder"></div>
            <h3 className="founder-name">Jatin H Kateliya</h3>
            <p className="founder-role">Managing Director</p>
          </div>
        </div>

        <div className="mission-vision-grid">
          <div className="mv-card mission">
            <h3 className="mv-title">MISSION</h3>
            <p className="mv-text">
              To help brands unlock their true digital potential through
              smart strategy, creative execution, and performance
              driven solutions that deliver real, measurable results.
            </p>
          </div>
          <div className="mv-card vision">
            <h3 className="mv-title">VISION</h3>
            <p className="mv-text">
              To become a trusted digital growth partner for brands
              worldwide known for clarity, transparency, and consistent
              performance rather than empty promises.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Meet Our Core Team */}
      <section className="team-section">
        <h2 className="team-title">MEET OUR CORE TEAM</h2>
        <p className="team-subtitle">
          Behind GravityDots is a team of strategists, designers, developers, and performance marketers who share one goal.
        </p>

        <div className="team-grid">
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Aayush Parikh</h4>
            <p className="team-role">Sr. Designer</p>
          </div>
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Aashish Kateliya</h4>
            <p className="team-role">Brand Manager</p>
          </div>
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Niyati Sojitra</h4>
            <p className="team-role">Sales Executive</p>
          </div>
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Dileep Vala</h4>
            <p className="team-role">Graphic Designer</p>
          </div>
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Pooja</h4>
            <p className="team-role">SEO Expert</p>
          </div>
          <div className="team-member">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Niyati Sojitra</h4>
            <p className="team-role">BDE</p>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="why-choose-section">
        <h2 className="why-title">WHY CHOOSE US ?</h2>

        <div className="why-list">
          <div className="why-item">
            <div className="why-badge">Result-Oriented Approach</div>
            <p className="why-description">
              Every strategy is designed with a clear focus on leads, sales, and measurable ROI.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Data-Driven Decisions</div>
            <p className="why-description">
              We rely on analytics and insights, not assumptions, to optimize performance.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Transparent Reporting</div>
            <p className="why-description">
              Clear, honest, and easy-to-understand reports with real business metrics.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Proven Industry Experience</div>
            <p className="why-description">
              Hands-on experience across FMCG, events, fitness, education, and service-based businesses.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Dedicated Account Support</div>
            <p className="why-description">
              A focused team ensuring timely communication, execution, and support.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">End-to-End Execution</div>
            <p className="why-description">
              From strategy and creatives to ads, tracking, and optimization under one roof.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Scalable Growth Focus</div>
            <p className="why-description">
              Strategies built to grow with your business, not just deliver short-term wins.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
