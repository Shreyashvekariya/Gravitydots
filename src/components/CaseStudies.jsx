import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CaseStudies.css';

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        id: 1,
        client: 'Apex Finance',
        title: 'Redefining Digital Banking for the New Era',
        description: 'A complete overhaul of the user experience, focusing on trust, speed, and transparency in a cluttered market.',
        tags: ['UX/UI', 'Fintech', 'Strategy'],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80'
    },
    {
        id: 2,
        client: 'Lumina',
        title: 'The Light of Innovation',
        description: 'Launching a smart home brand from scratch, establishing a visual identity that speaks to modern minimalism.',
        tags: ['Branding', 'IoT', 'Launch'],
        image: 'https://images.unsplash.com/photo-1558002038-10912cba1b8b?w=1200&q=80'
    }
];

const CaseStudies = () => {
    const heroRef = useRef(null);
    const lettersRef = useRef(null);
    const imgHolderRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set('.cs-hero-letters', {
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 50
            });

            gsap.set('.cs-hero-img-holder', {
                clipPath: 'polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)',
                rotation: 30
            });

            gsap.set('.cs-hero-img-holder img', {
                scale: 2
            });

            // Create timeline for the hero animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    onComplete: () => {
                        gsap.set('.cs-hero-letters', { position: 'absolute' });
                    }
                }
            });

            // Animate letters with synchronized timing
            tl.to('.cs-hero-letters .letters:first-child', {
                x: () => -window.innerWidth * 1.2,
                scale: 4,
                opacity: 0.8,
                ease: 'power2.inOut'
            }, 0)
                .to('.cs-hero-letters .letters:last-child', {
                    x: () => window.innerWidth * 1.2,
                    scale: 4,
                    opacity: 0.8,
                    ease: 'power2.inOut'
                }, 0)
                .to('.cs-hero-img-holder', {
                    rotation: 0,
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    ease: 'power2.inOut'
                }, 0)
                .to('.cs-hero-img-holder img', {
                    scale: 1,
                    ease: 'power2.inOut'
                }, 0);

            // Refresh ScrollTrigger after setup
            ScrollTrigger.refresh();
        }, hero);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Simple fade in on load
        const elements = document.querySelectorAll('.cs-fade');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, []);

    return (
        <div className="case-studies-wrapper">
            <section ref={heroRef} className="cs-hero-animation-section">
                <div ref={lettersRef} className="cs-hero-letters">
                    <div className="letters">
                        <div>C</div>
                        <div>A</div>
                        <div>S</div>
                        <div>E</div>
                    </div>
                    <div className="letters">
                        <div>S</div>
                        <div>T</div>
                        <div>U</div>
                        <div>D</div>
                        <div>Y</div>
                    </div>
                </div>
                <div ref={imgHolderRef} className="cs-hero-img-holder">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Modern Skyscrapers"
                    />
                </div>
            </section>

            <section ref={contentRef} className="cs-hero-content-section">
                <div className="cs-hero-content-container">
                    <div className="cs-hero-content-grid">
                        <div className="cs-hero-main-content">
                            <div className="cs-hero-badge">
                                <span>PropTech Innovation</span>
                            </div>
                            <h1 className="cs-hero-title">Transform Off-Plan Sales</h1>
                            <p className="cs-hero-subtitle">
                                Revolutionary platform enabling developers to sell unbuilt properties through
                                immersive 3D experiences and real-time booking systems.
                            </p>
                            <div className="cs-hero-cta-group">
                                <a href="#contact" className="cs-btn-primary">Schedule Demo</a>
                                <a href="#solutions" className="cs-btn-secondary">View Platform</a>
                            </div>
                        </div>

                        <div className="cs-hero-stats-section">
                            <div className="cs-stats-container">
                                <div className="cs-stat-item">
                                    <div className="cs-stat-value">40%</div>
                                    <div className="cs-stat-description">Faster sales cycles</div>
                                </div>
                                <div className="cs-stat-divider"></div>
                                <div className="cs-stat-item">
                                    <div className="cs-stat-value">3x</div>
                                    <div className="cs-stat-description">Higher conversion</div>
                                </div>
                                <div className="cs-stat-divider"></div>
                                <div className="cs-stat-item">
                                    <div className="cs-stat-value">24/7</div>
                                    <div className="cs-stat-description">Global access</div>
                                </div>
                            </div>
                            <div className="cs-hero-description">
                                <p>
                                    From Dubai's skyline to global markets, VistaraX empowers developers with
                                    cutting-edge technology to showcase and manage off-plan properties before
                                    construction begins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cs-page">
                <div className="cs-header">
                    <h1 className="cs-title cs-fade">CASE STUDIES</h1>
                    <p className="cs-lead cs-fade">Deep dives into our process and results.</p>
                </div>

                <div className="cs-list">
                    {cases.map((item) => (
                        <div key={item.id} className="cs-item cs-fade">
                            <div className="cs-image-wrapper">
                                <img src={item.image} alt={item.title} className="cs-image" />
                            </div>
                            <div className="cs-content">
                                <div className="cs-meta">
                                    <span className="cs-client">{item.client}</span>
                                    <div className="cs-tags">
                                        {item.tags.map(tag => <span key={tag} className="cs-tag">{tag}</span>)}
                                    </div>
                                </div>
                                <h2 className="cs-project-title">{item.title}</h2>
                                <p className="cs-description">{item.description}</p>
                                <button className="cs-read-btn">
                                    READ CASE STUDY <span className="arrow">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
