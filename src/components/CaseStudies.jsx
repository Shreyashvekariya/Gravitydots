import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CaseStudies.css';

gsap.registerPlugin(ScrollTrigger);

// ── Non-eager glob for Case Studies ─────────────────────────────────────────
const casestudiesFilesLazy = import.meta.glob('../assets/Work/Casestudies/**/*.{webp,jpg,jpeg,png,mp4}');

const casestudiesLoadersMap = {};
Object.keys(casestudiesFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!casestudiesLoadersMap[folderName]) casestudiesLoadersMap[folderName] = [];
    casestudiesLoadersMap[folderName].push({
        glbPath,
        importFn: casestudiesFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(casestudiesLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

// ── SORTING SYSTEM ─────────────────────────────────────────────────────────────
// Add folder names here in the exact order you want them to appear.
// Any folders not listed here will automatically be added to the end.
export const CASE_STUDIES_ORDER = [
    'CANDID',
    'TREASURE9',
    'GHEEYONNAISE',
    'GIRCULTURE',
    'ATS',
    'GLOBAL SPICE CONNECT',
    'KINEIN',
    'OM HRIM RUDRAKSH',
    'PANGHAT',
    'SATVIK',
    'THE TIMELESS HUES STUDIO',
    'VIBEWIT'
];

const allProjects = [];

// 1. Add projects in the specified order
CASE_STUDIES_ORDER.forEach((folderName) => {
    if (casestudiesLoadersMap[folderName]) {
        allProjects.push({
            id: `cs-${folderName}`,
            title: folderName,
            folder: folderName,
            loaders: casestudiesLoadersMap[folderName]
        });
    }
});




const CaseStudies = () => {
    const heroRef = useRef(null);
    const lettersRef = useRef(null);
    const imgHolderRef = useRef(null);

    const [selectedProject, setSelectedProject] = useState(null);
    const [cardThumbnails, setCardThumbnails] = useState({});
    const [popupMedia, setPopupMedia] = useState({});
    const [loadingPopup, setLoadingPopup] = useState(false);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
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

            gsap.set('.cs-hero-img-holder img', { scale: 2 });

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

            ScrollTrigger.refresh();
        }, hero);

        return () => ctx.revert();
    }, []);

    // ── Load card thumbnails lazily on mount ──────────────────────────────────
    useEffect(() => {
        const loadThumbnails = async () => {
            allProjects.forEach(async (project) => {
                if (project.loaders && project.loaders.length > 0) {
                    const first = project.loaders[0];
                    try {
                        const mod = await first.importFn();
                        const url = mod.default || mod;
                        setCardThumbnails(prev => ({
                            ...prev,
                            [project.id]: { url, type: first.type }
                        }));
                    } catch (e) {
                        console.error('Thumbnail load failed:', e);
                    }
                }
            });
        };
        loadThumbnails();
    }, []);

    // ── Open popup + lazy-load all media for that project ────────────────────
    const openPopup = async (project) => {
        setSelectedProject(project);

        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            const scrollBody = document.querySelector('.cs-popup-scroll-body');
            if (scrollBody) scrollBody.scrollTop = 0;
        }, 0);

        if (popupMedia[project.id] || !project.loaders) return;

        setLoadingPopup(true);
        try {
            const loaded = await Promise.all(
                project.loaders.map(async (loader) => {
                    const mod = await loader.importFn();
                    return { url: mod.default || mod, type: loader.type };
                })
            );
            setPopupMedia(prev => ({ ...prev, [project.id]: loaded }));
        } catch (e) {
            console.error('Media load failed:', e);
        } finally {
            setLoadingPopup(false);
        }
    };

    const closePopup = () => {
        const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        setSelectedProject(null);
    };

    useEffect(() => {
        if (!selectedProject) return;
        const handleKeyDown = (e) => { if (e.key === 'Escape') closePopup(); };
        const handleWheel = (e) => {
            e.stopPropagation();
            const sb = document.querySelector('.cs-popup-scroll-body');
            if (sb) sb.scrollTop += e.deltaY;
        };
        const blockTouch = (e) => {
            const sb = document.querySelector('.cs-popup-scroll-body');
            if (sb && sb.contains(e.target)) return;
            e.preventDefault();
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: true });
        document.addEventListener('touchmove', blockTouch, { passive: false });
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchmove', blockTouch);
        };
    }, [selectedProject]);

    useEffect(() => {
        // Simple fade in on load
        const elements = document.querySelectorAll('.cs-fade');
        elements.forEach((el) => el.classList.remove('visible'));
        setTimeout(() => {
            elements.forEach((el, index) => {
                setTimeout(() => el.classList.add('visible'), index * 100);
            });
        }, 50);
    }, []);

    const currentPopupMedia = selectedProject ? popupMedia[selectedProject.id] : null;

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
                    <h1 className="cs-main-title cs-fade visible">Results We're Proud Of</h1>
                </div>

                <div className="cs-list">
                    {allProjects.map((item) => {
                        const thumb = cardThumbnails[item.id] || null;
                        return (
                            <div key={item.id} className="cs-item cs-fade" onClick={() => openPopup(item)} style={{ cursor: 'pointer' }}>
                                <div className="cs-image-wrapper">
                                    {thumb ? (
                                        thumb.type === 'video' ? (
                                            <video src={thumb.url} className="cs-image" muted preload="metadata" style={{ objectFit: 'cover' }} />
                                        ) : (
                                            <img src={thumb.url} alt={item.title} className="cs-image" loading="lazy" />
                                        )
                                    ) : (
                                        <div className="cs-image" style={{ background: '#e8e8e8' }}>
                                            <div className="cs-skeleton-shimmer" />
                                        </div>
                                    )}
                                </div>
                                <div className="cs-content">
                                    <h3 className="cs-card-client">{item.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Popup / Lightbox Modal */}
            {selectedProject && (
                <div className="cs-popup-overlay" onClick={closePopup}>
                    <div className="cs-popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cs-popup-close" onClick={closePopup} aria-label="Close popup">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="cs-popup-scroll-body">
                            <div className="cs-popup-header">
                                <h2 className="cs-popup-title">{selectedProject.title}</h2>
                            </div>

                            <div className="cs-popup-image-area">
                                {loadingPopup ? (
                                    <div className="cs-popup-loading">
                                        <div className="cs-spinner" />
                                        <p>Loading...</p>
                                    </div>
                                ) : currentPopupMedia ? (
                                    currentPopupMedia.map((item, idx) =>
                                        item.type === 'video' ? (
                                            <video
                                                key={idx}
                                                src={item.url}
                                                className="cs-popup-image-placeholder"
                                                style={{ height: 'auto', background: 'transparent', width: '100%' }}
                                                autoPlay loop muted playsInline
                                            />
                                        ) : (
                                            <img
                                                key={idx}
                                                src={item.url}
                                                alt={`${selectedProject.title} ${idx + 1}`}
                                                className="cs-popup-image-placeholder"
                                                style={{ height: 'auto', background: 'transparent' }}
                                                loading="lazy"
                                            />
                                        )
                                    )
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseStudies;

