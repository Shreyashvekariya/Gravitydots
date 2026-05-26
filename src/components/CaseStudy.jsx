import './CaseStudy.css'

function CaseStudy() {
  return (
    <section className="casestudy" id="casestudy">
      <div className="bento-grid">
        {/* Main Casestudy Card */}
        <div className="bento-item main-card">
          <div className="card-header">
            <div className="dots-menu">⋮</div>
            <div className="card-content">
              <h3>Casestudy</h3>
              <span className="subtitle">Memorable Place</span>
            </div>
          </div>
          <div className="card-image">
            <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop" alt="Japan Street" />
          </div>
        </div>

        {/* Video GIF Card */}
        <div className="bento-item video-card">
          <div className="video-header">
            <span className="video-label">Video (GIF)</span>
          </div>
          <div className="video-content">
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop" alt="Tokyo Cityscape" />
          </div>
        </div>

        {/* Website Vertical Card */}
        <div className="bento-item website-card">
          <div className="vertical-text">
            <span>Website</span>
          </div>
        </div>

        {/* Globe Icon Card */}
        <div className="bento-item icon-card globe-card">
          <div className="icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        </div>

        {/* Small City Image */}
        <div className="bento-item small-image-card">
          <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=150&fit=crop" alt="City View" />
        </div>

        {/* Search Icon Card */}
        <div className="bento-item search-card">
          <div className="search-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Social Media Management Card */}
        <div className="bento-item social-card">
          <div className="social-content">
            <div className="social-header">
              <h4>Social Media Management</h4>
              <div className="profile-pic">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Profile" />
              </div>
            </div>
            <div className="hashtag">#Japantrip</div>
            <div className="blog-section">
              <span>Blogs</span>
              <div className="arrow-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Graphics Red Card */}
        <div className="bento-item graphics-card">
          <div className="graphics-content">
            <div className="vertical-text-red">
              <span>Graphics</span>
            </div>
            <div className="graphics-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
