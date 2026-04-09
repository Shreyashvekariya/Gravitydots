import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkDetails.css';

const CATEGORIES = [
    { name: 'Branding', bgColor: '#D53F52' },
    { name: 'Graphic Design', bgColor: '#F5974E' },
    { name: 'Social Media Management', bgColor: '#5F94C9' },
    { name: 'Paid Ads', bgColor: '#1800AD' },
    { name: 'Search Engine Optimization (SEO)', bgColor: '#7ED957' },
    { name: 'Influencer Marketing', bgColor: '#5170FF' },
    { name: 'Content Creation', bgColor: '#FF751F' },
    { name: 'Website Development', bgColor: '#00B8BF' },
];

const treasure9ImagesRaw = import.meta.glob('../assets/Work/Branding/Treasure9 Brand Identity/*.webp', { eager: true });
const treasure9Images = Object.keys(treasure9ImagesRaw)
    .sort((a, b) => {
        const matchA = a.match(/(\d+)\.webp$/);
        const matchB = b.match(/(\d+)\.webp$/);
        const numA = matchA ? parseInt(matchA[1]) : 0;
        const numB = matchB ? parseInt(matchB[1]) : 0;
        return numA - numB;
    })
    .map(key => treasure9ImagesRaw[key].default || treasure9ImagesRaw[key]);

const generateProjects = (category) => {
    return Array(6).fill(null).map((_, i) => ({
        id: i,
        title: category === 'Branding' && i === 0 ? 'Treasure9 Brand Identity' : 'Gir Culture',
        category: category.toUpperCase(),
        images: category === 'Branding' && i === 0 ? treasure9Images : null
    }));
};

const WorkDetails = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (location.state && location.state.category) {
            setActiveCategory(location.state.category);
        }
    }, [location]);

    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activeProjects = generateProjects(activeCategory);

    const openPopup = (project) => {
        setSelectedProject(project);
        // Save scroll position and lock body using position:fixed (most reliable cross-browser)
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
        // Reset popup scroll to top
        setTimeout(() => {
            const scrollBody = document.querySelector('.wd-popup-scroll-body');
            if (scrollBody) scrollBody.scrollTop = 0;
        }, 0);
    };

    const closePopup = () => {
        // Restore scroll position before unlocking body
        const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        setSelectedProject(null);
    };

    // Keyboard + wheel + touch event locks
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closePopup();
        };

        // Route wheel events into the popup scroll body
        const handleWheel = (e) => {
            e.stopPropagation();
            const scrollBody = document.querySelector('.wd-popup-scroll-body');
            if (scrollBody) {
                scrollBody.scrollTop += e.deltaY;
            }
        };

        // Block touch scroll on background (mobile)
        const blockTouch = (e) => {
            const scrollBody = document.querySelector('.wd-popup-scroll-body');
            if (scrollBody && scrollBody.contains(e.target)) return; // allow touch inside popup
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

    return (
        <div className="work-details-wrapper">
            <section className="work-details-page">
                <div className="work-details-container">
                    <h1 className="work-details-title">Work That Delivers</h1>
                    <div className="work-details-layout">
                        <aside className="work-details-sidebar">
                            <ul className="details-category-list">
                                {CATEGORIES.map(category => (
                                    <li
                                        key={category.name}
                                        className={`details-category-item ${activeCategory === category.name ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(category.name)}
                                        style={activeCategory === category.name ? {
                                            backgroundColor: category.bgColor,
                                            borderColor: category.bgColor,
                                            boxShadow: `0 4px 15px ${category.bgColor}4D`
                                        } : {}}
                                    >
                                        <span className="dot"></span> {category.name}
                                    </li>
                                ))}
                            </ul>
                        </aside>
                        <main className="work-details-grid">
                            {activeProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="work-details-card"
                                    onClick={() => openPopup(project)}
                                >
                                    {project.images && project.images.length > 0 ? (
                                        <img src={project.images[0]} alt={project.title} className="work-details-image-placeholder" style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className="work-details-image-placeholder">
                                            <div className="wd-hills"></div>
                                            <div className="wd-sun"></div>
                                            <div className="wd-cloud"></div>
                                        </div>
                                    )}
                                    <div className="work-details-info">
                                        <h4>{project.title}</h4>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </main>
                    </div>
                </div>
            </section>

            {/* Popup / Lightbox Modal */}
            {selectedProject && (
                <div className="wd-popup-overlay" onClick={closePopup}>
                    <div className="wd-popup-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button — fixed, outside scroll flow */}
                        <button className="wd-popup-close" onClick={closePopup} aria-label="Close popup">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Scrollable inner body — starts from top, scrolls all the way */}
                        <div className="wd-popup-scroll-body">
                            {/* Project Header */}
                            <div className="wd-popup-header">
                                <h2 className="wd-popup-title">{selectedProject.title}</h2>
                                <span className="wd-popup-category">{selectedProject.category}</span>
                            </div>

                            {/* Main Image Area */}
                            <div className="wd-popup-image-area">
                                {selectedProject.images ? (
                                    selectedProject.images.map((imgSrc, idx) => (
                                        <img
                                            key={idx}
                                            src={imgSrc}
                                            alt={`${selectedProject.title} ${idx + 1}`}
                                            className="wd-popup-image-placeholder"
                                            style={{ height: 'auto', background: 'transparent' }}
                                        />
                                    ))
                                ) : (
                                    [1, 2, 3, 4].map((item) => (
                                        <div key={item} className="wd-popup-image-placeholder">
                                            <div className="wd-popup-hills"></div>
                                            <div className="wd-popup-sun"></div>
                                            <div className="wd-popup-cloud"></div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkDetails;
