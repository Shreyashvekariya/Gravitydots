import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.fade-in-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-us-page" id="about" ref={sectionRef}>
            <div className="about-container">
                {/* Left Side - Sticky Header */}
                <div className="about-left">
                    <div className="sticky-wrapper">
                        <h2 className="about-title-outline">WHO</h2>
                        <h2 className="about-title-filled">WE ARE</h2>
                        <div className="about-decoration-line"></div>
                    </div>
                </div>

                {/* Right Side - Scrollable Content */}
                <div className="about-right">
                    <div className="about-block fade-in-up">
                        <h3 className="about-lead-text">
                            We are the <span className="highlight-red">gravity</span> that pulls brands to the top.
                        </h3>
                        <p className="about-description">
                            At Gravity Dots, we don't just follow trends; we set the orbit. We are a collective of visionaries, strategists, and creators dedicated to crafting digital experiences that resonate on a primal level.
                        </p>
                    </div>

                    <div className="about-image-block fade-in-up">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                            alt="Our creative space"
                            className="about-main-image"
                        />
                        <div className="image-overlay-text">
                            <span>CREATIVITY</span>
                            <span>STRATEGY</span>
                            <span>IMPACT</span>
                        </div>
                    </div>

                    <div className="about-stats-strip fade-in-up">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years</span>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <span className="stat-number">25+</span>
                            <span className="stat-label">Awards</span>
                        </div>
                    </div>

                    <div className="about-philosophy fade-in-up">
                        <div className="philosophy-card">
                            <h4>OUR PHILOSOPHY</h4>
                            <p>
                                We believe in the power of "clean chaos." Structured strategy meets wild creativity. It's not about being the loudest; it's about being the most magnetic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
