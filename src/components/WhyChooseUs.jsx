import "./WhyChooseUs.css";
import casestudyImg from "../assets/images/Grid Photo main.webp";
import GridVideo from "../assets/images/Grid video.mp4";
import gdLogo from "../assets/images/GD LOGO (WHITE & RED).png";
import { useNavigate } from 'react-router-dom';

export default function WhyChooseUs() {
    const navigate = useNavigate();
    return (
        <>
            <div className="why-choose-us-header">
                <h2 className="why-choose-us-title">WHY CHOOSE US</h2>

                <div className="why-pills-container">
                    <div className="why-pills-row row-single">
                        <div className="why-pill">Experienced & passionate team</div>
                    </div>
                    <div className="why-pills-row row-double">
                        <div className="why-pill">Creative & strategy-driven approach</div>
                        <div className="why-pill">Focus on real results, not just numbers</div>
                    </div>
                    <div className="why-pills-row row-double">
                        <div className="why-pill">Customized solutions for every business</div>
                        <div className="why-pill">Transparent pricing & clear communication</div>
                    </div>
                </div>
            </div>
            <section className="why-choose-us">
                <div className="why-choose-us-container">
                    <div className="bento-grid">
                        {/* LEFT BIG CARD - Case Study */}
                        <div className="card case-study" onClick={() => { navigate('/casestudies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
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
                            <div className="case-study-image">
                                <img src={casestudyImg} alt="Casestudy" />
                            </div>
                        </div>

                        {/* VIDEO CARD */}
                        <div className="card video-card">
                            <video
                                src={GridVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="video-card-bg"
                            />
                            <div className="video-overlay"></div>
                            {/* <span className="video-text">Video (GIF)</span> */}
                        </div>

                        {/* WEBSITE PILL */}
                        <div className="card pill-dark" onClick={() => { navigate('/work-details', { state: { category: 'Website Development' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                            <span className="pill-text">Website</span>
                            <div className="search-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/9479/9479251.png" alt="Search" className="flaticon-search" />
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR TOP - Globe + Preview Image */}
                        <div className="sidebar-right-top">
                            {/* GLOBE ICON */}
                            <div className="card globe-card" onClick={() => { navigate('/work-details', { state: { category: 'Website Development' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                                <svg className="globe-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />
                                    <ellipse cx="32" cy="32" rx="12" ry="28" stroke="currentColor" strokeWidth="2.5" />
                                    <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2.5" />
                                    <ellipse cx="32" cy="18" rx="22" ry="7" stroke="currentColor" strokeWidth="2" />
                                    <ellipse cx="32" cy="46" rx="22" ry="7" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* PREVIEW IMAGE */}
                            <div className="card preview-card" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                                <img
                                    src={gdLogo}
                                    alt="GD Logo"
                                    className="preview-logo-bg"
                                />
                            </div>
                        </div>

                        {/* SOCIAL MEDIA CARD */}
                        <div className="card social-card">
                            <div className="social-section" onClick={() => { navigate('/work-details', { state: { category: 'Social Media Management' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                                <div className="social-content">
                                    <h3 className="social-title">Social Media<br />Management</h3>
                                    <p className="social-hashtag">#Japantrip</p>
                                </div>
                                <div className="profile-image"></div>
                            </div>
                            <div className="blogs-section" onClick={(e) => { e.stopPropagation(); navigate('/casestudies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                                <span className="blogs-title">Blogs</span>
                                <button className="arrow-button">→</button>
                            </div>
                        </div>

                        {/* GRAPHICS PILL */}
                        <div className="card pill-red" onClick={() => { navigate('/work-details', { state: { category: 'Graphic Design' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                            <span className="pill-text">Graphics</span>
                            <div className="search-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/9479/9479251.png" alt="Search" className="flaticon-search-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
