import React, { useState, useEffect } from 'react';
import './CaseStudies.css';

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

// ── Thumbnails Glob ────────────────────────────────────────────────────────
const thumbnailFilesLazy = import.meta.glob('../assets/Work/Casestudies-Thumbnails/*.{webp,jpg,jpeg,png}');
const thumbnailsMap = {};
Object.keys(thumbnailFilesLazy).forEach(glbPath => {
    const fileName = glbPath.split('/').pop();
    const baseName = fileName.replace(/\.[^/.]+$/, "");
    const title = baseName.replace(/\s-\s\d+$/, "");
    thumbnailsMap[title] = thumbnailFilesLazy[glbPath];
});

// ── Custom Folder Ordering & Descriptions ────────────────────────────────────
const PROJECT_DATA = {
    'SATVIK': 'Scaled from ₹0 website sales to 2.1+ million sales within 7 months',
    'KINEIN': 'Rebuilding A 900+ Product Website With A Clean & User-Friendly Experience',
    'ATS': 'How ATS Trading LLC Achieved 2.6X ROAS & Built A Strong Digital Presence In UAE',
    'GLOBAL SPICE CONNECT': 'Building a global brand presence for premium spice exports',
    'CANDID': 'Transforming brand identity with bold creative storytelling',
    'TREASURE9': 'Driving engagement and growth through strategic digital marketing',
    'GHEEYONNAISE': 'Launching a unique food brand with viral social media campaigns',
    'GIRCULTURE': 'Empowering cultural connection through authentic brand narratives',
    'OM HRIM RUDRAKSH': 'Establishing spiritual brand authority with compelling content',
    'PANGHAT': 'Creating a vibrant digital identity for traditional Indian cuisine',
    'THE TIMELESS HUES STUDIO': 'Crafting a premium visual identity for a creative studio',
    'VIBEWIT': 'Building brand awareness through creative digital strategies',
};

export const PROJECT_ORDER = Object.keys(PROJECT_DATA);

const sortProjects = (projects) => {
    return projects.sort((a, b) => {
        const indexA = PROJECT_ORDER.indexOf(a.title);
        const indexB = PROJECT_ORDER.indexOf(b.title);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.title.localeCompare(b.title);
    });
};

const allProjects = sortProjects(Object.keys(casestudiesLoadersMap).map((folderName, index) => ({
    id: `cs-${index}`,
    title: folderName,
    description: PROJECT_DATA[folderName] || '',
    loaders: casestudiesLoadersMap[folderName]
})));

const CaseStudies = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [cardThumbnails, setCardThumbnails] = useState({});
    const [popupMedia, setPopupMedia] = useState({});
    const [loadingPopup, setLoadingPopup] = useState(false);

    // ── Load card thumbnails ─────────────────────────────────────────────────
    useEffect(() => {
        allProjects.forEach(async (project) => {
            const thumbLoader = thumbnailsMap[project.title];
            if (thumbLoader) {
                try {
                    const mod = await thumbLoader();
                    const url = mod.default || mod;
                    setCardThumbnails(prev => ({
                        ...prev,
                        [project.id]: { url, type: 'image' }
                    }));
                } catch (e) {
                    console.error('Thumbnail load failed for', project.title, e);
                }
            } else if (project.loaders && project.loaders.length > 0) {
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
        <div className="cs-bg-wrapper">
        <div className="case-studies-wrapper">
            <div className="cs-header-container">
                <h1 className="cs-main-title">Results We're Proud Of</h1>
            </div>

            <div className="cs-grid-container">
                {allProjects.map((project) => {
                    const thumb = cardThumbnails[project.id] || null;
                    return (
                        <div key={project.id} className="cs-grid-card" onClick={() => openPopup(project)}>
                            <div className="cs-card-img">
                                {thumb ? (
                                    thumb.type === 'video' ? (
                                        <video src={thumb.url} muted autoPlay loop playsInline />
                                    ) : (
                                        <img src={thumb.url} alt={project.title} loading="lazy" />
                                    )
                                ) : (
                                    <div className="cs-skeleton-loader" />
                                )}
                            </div>
                            <div className="cs-card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

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
        </div>
    );
};

export default CaseStudies;
