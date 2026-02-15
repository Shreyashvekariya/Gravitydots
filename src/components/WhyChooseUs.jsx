import "./WhyChooseUs.css";

export default function WhyChooseUs() {
    return (
        <>
            <div className="why-choose-us-header">
                <h2 className="why-choose-us-title">WHY CHOOSE US</h2>

                <div className="why-pills-container">
                    <div className="why-pills-row">
                        <div className="why-pill">Experienced & passionate team</div>
                        <div className="why-pill">Creative & strategy-driven approach</div>
                        <div className="why-pill">Focus on real results, not just numbers</div>
                    </div>
                    <div className="why-pills-row">
                        <div className="why-pill">Customized solutions for every business</div>
                        <div className="why-pill">Transparent pricing & clear communication</div>
                    </div>
                </div>
            </div>
            <section className="why-choose-us">
                <div className="why-choose-us-container">
                    <div className="bento-grid">
                        {/* LEFT BIG CARD - Case Study */}
                        <div className="card case-study">
                            {/* White Header Box */}
                            <div className="case-study-header">
                                <div className="menu-dots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="case-study-content">
                                    <h2 className="case-study-title">Casestudy</h2>
                                    <p className="case-study-subtitle">Memorable Place</p>
                                </div>
                            </div>
                            {/* Image Section */}
                            <div className="case-study-image"></div>
                        </div>

                        {/* VIDEO CARD */}
                        <div className="card video-card">
                            <div className="video-overlay"></div>
                            <span className="video-text">Video (GIF)</span>
                        </div>

                        {/* WEBSITE PILL */}
                        <div className="card pill-dark">
                            <span className="pill-text">Website</span>
                            <div className="search-icon">
                                <div className="search-circle">
                                    <div className="search-handle"></div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR TOP - Globe + Preview Image */}
                        <div className="sidebar-right-top">
                            {/* GLOBE ICON */}
                            <div className="card globe-card">
                                <svg className="globe-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />
                                    <ellipse cx="32" cy="32" rx="12" ry="28" stroke="currentColor" strokeWidth="2.5" />
                                    <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2.5" />
                                    <ellipse cx="32" cy="18" rx="22" ry="7" stroke="currentColor" strokeWidth="2" />
                                    <ellipse cx="32" cy="46" rx="22" ry="7" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* PREVIEW IMAGE */}
                            <div className="card preview-card"></div>
                        </div>

                        {/* SOCIAL MEDIA CARD */}
                        <div className="card social-card">
                            <div className="social-section">
                                <div className="social-content">
                                    <h3 className="social-title">Social Media<br />Management</h3>
                                    <p className="social-hashtag">#Japantrip</p>
                                </div>
                                <div className="profile-image"></div>
                            </div>
                            <div className="blogs-section">
                                <span className="blogs-title">Blogs</span>
                                <button className="arrow-button">→</button>
                            </div>
                        </div>

                        {/* GRAPHICS PILL */}
                        <div className="card pill-red">
                            <span className="pill-text">Graphics</span>
                            <div className="search-icon">
                                <div className="search-circle">
                                    <div className="search-handle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
