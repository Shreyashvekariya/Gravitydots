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

    const teamMembers = [
        { name: 'Team Member 1', role: 'Strategist', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
        { name: 'Team Member 2', role: 'Designer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
        { name: 'Team Member 3', role: 'Developer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
        { name: 'Team Member 4', role: 'Marketer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
    ];

    const whyReasons = [
        { title: 'Designed for Results', description: 'Every strategy, design, and campaign is built with measurable outcomes in mind.' },
        { title: 'Experienced In-House Team', description: 'No outsourcing. Our dedicated team handles everything from start to finish.' },
        { title: 'Agile & Fast Execution', description: 'We move quickly without compromising quality or strategic thinking.' },
        { title: 'Strategy-Led Approach', description: 'We start with why, then build the how. Strategy always comes first.' },
        { title: 'Clear, Transparent Communication', description: 'No jargon, no confusion. Just honest, straightforward updates.' },
        { title: 'Scalable Digital Solutions', description: 'Built to grow with your business, not just for today but for tomorrow.' }
    ];

    return (
        <div className="about-bg-wrapper-red">
            <section className="about-us-page" id="about" ref={sectionRef}>
                {/* Hero Section */}
                <div className="about-hero fade-in-up">
                    <h1 className="about-hero-title">WE BUILD BUSINESSES,<br />NOT JUST A BRAND!</h1>
                </div>

                {/* Who We Are */}
                <div className="about-section fade-in-up">
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-text">
                        GravityDots is a digital-first agency focused on creating meaningful, high-impact digital experiences. We work at the intersection of strategy, creativity, and technology to help brands stand out, perform better, and scale with confidence in an ever-evolving digital landscape.
                    </p>
                </div>

                {/* The Problem We Solve */}
                <div className="about-section problem-section fade-in-up">
                    <h2 className="section-title">The Problem We Solve</h2>
                    <div className="problem-content">
                        <div className="problem-text">
                            <p>In today's crowded digital space, most brands struggle with:</p>
                            <ul className="problem-list">
                                <li>Disconnected strategies</li>
                                <li>Websites that look good but don't convert</li>
                                <li>Marketing campaigns that generate traffic but not results</li>
                                <li>Agencies that focus on activities instead of outcomes</li>
                            </ul>
                        </div>
                        <div className="solution-box">
                            <h3>Our Solution</h3>
                            <p>We solve this by aligning strategy, design, and performance marketing into one cohesive system, so every digital effort works together toward measurable growth.</p>
                        </div>
                    </div>
                </div>

                {/* Meet Our Team */}
                <div className="about-section team-section fade-in-up">
                    <h2 className="section-title">Meet Our Team</h2>
                    <p className="section-subtitle">Behind GravityDots is a team of strategists, designers, developers, and performance marketers who share one goal.</p>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                </div>
                                <h4 className="team-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="mission-vision-wrapper fade-in-up">
                    <div className="mission-box">
                        <h3 className="box-title">Our Mission</h3>
                        <p>To help brands unlock their true digital potential through smart strategy, creative execution, and performance-driven solutions that deliver real, measurable results.</p>
                    </div>
                    <div className="vision-box">
                        <h3 className="box-title">Our Vision</h3>
                        <p>To become a trusted digital growth partner for brands worldwide—known for clarity, transparency, and consistent performance rather than empty promises.</p>
                    </div>
                </div>

                {/* Why GravityDots */}
                <div className="about-section why-section fade-in-up">
                    <h2 className="section-title">Why GravityDots</h2>
                    <div className="why-grid">
                        {whyReasons.map((reason, index) => (
                            <div key={index} className="why-card">
                                <div className="why-number">{String(index + 1).padStart(2, '0')}</div>
                                <h4 className="why-title">{reason.title}</h4>
                                <p className="why-description">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;