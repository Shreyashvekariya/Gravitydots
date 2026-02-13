import './Services.css'

function Services() {
  const services = [
    { title: 'Customised', subtitle: 'Branding', bgColor: '#D53F52', description: 'Logo design, brand identity, packaging & creatives' },
    { title: 'Graphic Designing', subtitle: 'Video Editing', bgColor: '#F5974E', description: 'Social media creatives, reels, ads & promotional videos' },
    { title: 'Social Media', subtitle: 'Management', bgColor: '#5F94C9', description: 'Content creation, posting, engagement & growth strategy' },
    { title: 'Paid Ads', subtitle: '(Meta & Google)', bgColor: '#1800AD', description: 'High-converting ads with ROI-focused targeting' },
    { title: 'SEO', subtitle: 'Search Engine Optimization', bgColor: '#7ED957', description: 'Improve rankings, traffic & visibility organically' },
    { title: 'Influencer', subtitle: 'Marketing', bgColor: '#5170FF', description: 'Right creators, right audience, real impact' },
    { title: 'Content', subtitle: 'Creation', bgColor: '#FF751F', description: 'Captions, visuals, reels & brand storytelling' },
    { title: 'Website', subtitle: 'Development', bgColor: '#00B8BF', description: 'Fast, responsive & conversion-friendly websites' },
  ]

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="bebas">GROW YOUR BRAND DIGITALLY</h2>
        <p>We help businesses build strong digital identities, attract the right audience, and convert clicks into customers through result-driven digital marketing solutions.</p>
        <h3 className="bebas tagline">CREATIVE. STRATEGIC. SCALABLE.</h3>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <span className="service-title">{service.title}</span>
              <span className="service-subtitle">{service.subtitle}</span>
            </div>
            <div className="service-overlay" style={{ background: service.bgColor }}>
              <span className="service-title">{service.title}</span>
              <span className="service-subtitle">{service.subtitle}</span>
              <p className="service-description">{service.description}</p>
              <div className="service-arrow">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="28" stroke="#ffffff" strokeWidth="2.5" />
                  <line x1="16" y1="30" x2="40" y2="30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <polygon points="38,23 48,30 38,37" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services


