import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'framer-motion';
import gdLogo from '../assets/images/GD LOGO (WHITE & RED).png';
import hero from '../assets/images/hero.mp4';
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
    const videoRef = useRef(null);
    const bookSectionRef = useRef(null);
    const bookRef = useRef(null);
    const pagesRef = useRef([]);

    const [selectedProject, setSelectedProject] = useState(null);
    const [cardThumbnails, setCardThumbnails] = useState({});
    const [popupMedia, setPopupMedia] = useState({});
    const [loadingPopup, setLoadingPopup] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [scrollStarted, setScrollStarted] = useState(false);
    
    const isInView = useInView(videoRef, { margin: "-100px" });

    // ── Video play/pause based on visibility ─────────────────────────────────
    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(e => console.log("Play prevented by browser:", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    // ── Hero scroll animation ────────────────────────────────────────────────
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

    // ── Load card thumbnails ─────────────────────────────────────────────────
    useEffect(() => {
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
    }, []);

    // ── BOOK PAGE-FLIP SCROLL ANIMATION ──────────────────────────────────────
    // Runs once on mount. Page DOM elements exist from first render (thumbnails
    // only affect what's shown inside pages, not the page elements themselves).
    useEffect(() => {
        const section = bookSectionRef.current;
        const pages = pagesRef.current.filter(Boolean);
        if (!section || pages.length === 0) return;

        const totalPages = pages.length;

        const ctx = gsap.context(() => {
            // Initialize ALL pages inside the context so GSAP tracks these
            // values and can properly revert them on cleanup.
            pages.forEach((page, i) => {
                gsap.set(page, {
                    rotateY: 0,
                    zIndex: totalPages - i, // First page (CANDID) = highest z
                });
            });

            const masterTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${totalPages * 100}%`,
                    scrub: 0.8,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const pageIndex = Math.min(
                            Math.floor(progress * totalPages),
                            totalPages - 1
                        );
                        setCurrentPage(pageIndex);
                        if (progress > 0.01) {
                            setScrollStarted(true);
                        }
                    }
                }
            });

            pages.forEach((page, i) => {
                const startPct = i / totalPages;
                const endPct = (i + 1) / totalPages;
                const duration = endPct - startPct;

                masterTl.to(page, {
                    rotateY: -180,
                    ease: 'power1.inOut',
                    duration: duration,
                    onStart: () => {
                        // Bump z-index so the flipping page stays above
                        // previously-flipped pages on the left side
                        gsap.set(page, { zIndex: totalPages + i + 1 });
                    },
                    onReverseComplete: () => {
                        // When scrolling back and page fully returns to
                        // unflipped state, restore its original z-index
                        gsap.set(page, { zIndex: totalPages - i });
                    },
                }, startPct);
            });

        }, section);

        return () => ctx.revert();
    }, []); // Mount only — page refs don't depend on thumbnails

    // ── Popup open ───────────────────────────────────────────────────────────
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

    // ── Popup close ──────────────────────────────────────────────────────────
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

    // ── Popup keyboard / scroll handling ─────────────────────────────────────
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

    const currentPopupMedia = selectedProject ? popupMedia[selectedProject.id] : null;

    return (
        <div className="case-studies-wrapper">
            {/* ── Hero Animation ──────────────────────────────────────── */}
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
                    <video
                        ref={videoRef}
                        src={hero}
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── Book Section ─────────────────────────────────────────── */}
            <section ref={bookSectionRef} className="cs-book-section">
                <div className="cs-book-pin-wrapper">
                    {/* Header */}
                    <div className="cs-book-header">
                        <h1 className="cs-book-main-title">Results We're Proud Of</h1>
                    </div>

                    {/* Scroll Hint */}
                    <div className={`cs-scroll-hint ${scrollStarted ? 'hidden' : ''}`}>
                        <span className="cs-scroll-hint-text">Scroll to flip</span>
                        <div className="cs-scroll-hint-arrow" />
                    </div>

                    {/* The Book */}
                    <div className="cs-book" ref={bookRef}>
                        {/* Static left page (spine side) */}
                        <div className="cs-book-left-static">
                            <div className="cs-left-content">
                                <img src={gdLogo} alt="Gravity Dots" className="cs-left-logo" />
                            </div>
                        </div>

                        {/* Static right base (behind all pages) */}
                        <div className="cs-book-right-static" />

                        {/* Flippable Pages */}
                        {allProjects.map((project, index) => {
                            const thumb = cardThumbnails[project.id] || null;
                            return (
                                <div
                                    key={project.id}
                                    className="cs-book-page"
                                    ref={el => pagesRef.current[index] = el}
                                    style={{ zIndex: allProjects.length - index }}
                                >
                                    {/* FRONT FACE */}
                                    <div className="cs-page-front">
                                        <div className="cs-page-front-img">
                                            {thumb ? (
                                                thumb.type === 'video' ? (
                                                    <video
                                                        src={thumb.url}
                                                        muted
                                                        preload="metadata"
                                                    />
                                                ) : (
                                                    <img
                                                        src={thumb.url}
                                                        alt={project.title}
                                                        loading="lazy"
                                                    />
                                                )
                                            ) : (
                                                <div className="cs-page-skeleton">
                                                    <div className="cs-page-skeleton-shimmer" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="cs-page-front-overlay" />
                                        <div className="cs-page-front-edge" />
                                        <div className="cs-page-front-content">
                                            <span className="cs-page-number">
                                                Page {String(index + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
                                            </span>
                                            <h3 className="cs-page-title">{project.title}</h3>
                                            <div
                                                className="cs-page-cta"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openPopup(project);
                                                }}
                                            >
                                                <span>View Case Study</span>
                                                <span className="cs-page-cta-icon">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12" />
                                                        <polyline points="12,5 19,12 12,19" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK FACE */}
                                    <div className="cs-page-back">
                                        <div className="cs-page-back-content">
                                            <img src={gdLogo} alt="Gravity Dots" className="cs-page-back-logo" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Page dot indicators */}
                    <div className="cs-page-dots">
                        {allProjects.map((_, i) => (
                            <div
                                key={i}
                                className={`cs-page-dot ${i === currentPage ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Popup / Lightbox Modal ───────────────────────────────── */}
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
