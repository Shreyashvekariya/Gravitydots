import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CaseStudies.css';

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        id: 1,
        client: 'Gir Culture',
        title: 'Rebranding Gir Culture',
        description: 'A complete overhaul of the user experience.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80'
    },
    {
        id: 2,
        client: 'Gir Culture',
        title: 'Gir Culture Marketing',
        description: 'Launching a smart home brand from scratch.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 3,
        client: 'Gir Culture',
        title: 'Gir Culture SEO',
        description: 'SEO optimization for Gir Culture.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
    },
    {
        id: 4,
        client: 'Gir Culture',
        title: 'Gir Culture Packaging',
        description: 'Redesigning the packaging for better brand identity.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=1200&q=80'
    },
    {
        id: 5,
        client: 'Gir Culture',
        title: 'Gir Culture Socials',
        description: 'Social media strategy for Gir Culture.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1481481600465-9f564dc5bd87?w=1200&q=80'
    },
    {
        id: 6,
        client: 'Gir Culture',
        title: 'Gir Culture Content',
        description: 'Content creation for Gir Culture.',
        tags: ['BRANDING'],
        image: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=1200&q=80'
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

            <section className="cs-page">
                <div className="cs-header">
                    <h1 className="cs-main-title cs-fade">Results We're Proud Of</h1>
                    <div className="cs-filters">
                        <button className="cs-filter-btn active">Branding</button>
                        <button className="cs-filter-btn">Graphic Design & Video Editing</button>
                        <button className="cs-filter-btn">Social Media Management</button>
                        <button className="cs-filter-btn">Paid Ads</button>
                        <button className="cs-filter-btn">Search Engine Optimization (SEO)</button>
                        <button className="cs-filter-btn">Influencer Marketing</button>
                        <button className="cs-filter-btn">Content Creation</button>
                        <button className="cs-filter-btn">Website Development</button>
                    </div>
                </div>

                <div className="cs-list">
                    {cases.map((item) => (
                        <div key={item.id} className="cs-item cs-fade">
                            <div className="cs-image-wrapper">
                                <img src={item.image} alt={item.client} className="cs-image" />
                            </div>
                            <div className="cs-content">
                                <h3 className="cs-card-client">{item.client}</h3>
                                <div className="cs-tags">
                                    {item.tags.map(tag => <span key={tag} className="cs-card-tag">{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
