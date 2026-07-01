import { useNavigate } from 'react-router-dom'
import './Services.css'

function Services() {
  const navigate = useNavigate()

  const services = [
    { title: 'Customised', subtitle: 'Branding', bgColor: '#D53F52', description: 'Logo design, brand identity, packaging & creatives', category: 'Branding' },
    { title: 'Graphic Designing', subtitle: 'Video Editing', bgColor: '#F5974E', description: 'Social media creatives, reels, ads & promotional videos', category: 'Graphic Design' },
    { title: 'Social Media', subtitle: 'Management', bgColor: '#5F94C9', description: 'Content creation, posting, engagement & growth strategy', category: 'Social Media Management' },
    { title: 'Performance Marketing', subtitle: 'Meta & Google', bgColor: '#1800AD', description: 'High-converting ads with ROI-focused targeting', category: 'Performance Marketing' },
    { title: 'SEO', subtitle: 'Search Engine Optimization', bgColor: '#7ED957', description: 'Improve rankings, traffic & visibility organically', category: 'Search Engine Optimization (SEO)' },
    { title: 'Influencer', subtitle: 'Marketing', bgColor: '#5170FF', description: 'Right creators, right audience, real impact', category: 'Influencer Marketing' },
    { title: 'Website', subtitle: 'Development', bgColor: '#00B8BF', description: 'Fast, responsive & conversion-friendly websites', category: 'Website Development' },
    { title: 'Whatsapp', subtitle: 'Marketing', bgColor: '#FF751F', description: 'Captions, visuals, reels & brand storytelling', category: 'Whatsapp Marketing' },
  ]

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="bebas text-red">RESULTS THAT SPEAK LOUDER THAN WORDS</h2>
        <p>We measure success through numbers, not promises. Every number represents real business growth achieved through strategy, creativity and performance marketing.</p>
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-title">ROAS<br/>AVG. AD RETURN</span>
            <span className="stat-value">4.9X</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">AD SPEND<br/>MANAGED</span>
            <span className="stat-value">₹70L+</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">ORGANIC<br/>GROWTH</span>
            <span className="stat-value">320%</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">QUALIFIED LEADS<br/>GENERATED</span>
            <span className="stat-value">1500+</span>
          </div>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate('/work-details', { state: { category: service.category } })}
            style={{ cursor: 'pointer' }}
          >
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


