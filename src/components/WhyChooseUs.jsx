import "./WhyChooseUs.css";
import casestudyImg from "../assets/images/Grid Photo main.webp";
import GridVideo from "../assets/images/Grid video.mp4";
import gdLogo from "../assets/images/GD LOGO (WHITE & RED).png";
import pfmImg from "../assets/images/PFM.webp";
import seoImg from "../assets/images/SEO.webp";
import smmImg from "../assets/images/SMM.webp";
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
                        <div className="why-pill">ROI Focused Marketing Strategies</div>
                        <div className="why-pill">Strategy driven approch</div>
                    </div>
                    <div className="why-pills-row row-double">
                        <div className="why-pill">Customised Digital Solutions</div>
                        <div className="why-pill">Dedicated Account Manager</div>
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
                                    <h2 className="case-study-title">Featured Case Studies</h2>
                                    <p className="case-study-subtitle">Client Success Stories</p>
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
                            <div className="card globe-card" onClick={() => { navigate('/work-details', { state: { category: 'Performance Marketing' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer', overflow: 'hidden' }}>
                                <img src={pfmImg} alt="PFM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            {/* PREVIEW IMAGE */}
                            <div className="card preview-card" onClick={() => { navigate('/work-details', { state: { category: 'Search Engine Optimization (SEO)' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer', overflow: 'hidden', padding: 0 }}>
                                <img src={seoImg} alt="SEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* SOCIAL MEDIA CARD */}
                        <div className="card social-card">
                            <div className="social-section" onClick={() => { navigate('/work-details', { state: { category: 'Social Media Management' } }); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
                                <div className="social-content">
                                    <h3 className="social-title">Social Media<br />Management</h3>
                                    <p className="social-hashtag">#Japantrip</p>
                                </div>
                                <img src={smmImg} alt="SMM" className="profile-image" style={{ objectFit: 'cover', background: 'none' }} />
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
