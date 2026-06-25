import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { INFLUENCER_REELS } from './dynamicProjectsData';
import { useLocation } from 'react-router-dom';
import './WorkDetails.css';

// Static import ONLY for the Treasure9 Branding thumbnail override
import treasure9BrandingThumb from '../assets/Work/Branding/Treasure9/6.webp';
import gridVideoPath from '../assets/images/Grid video.mp4';
import { buildInfluencerMarketingProjects, buildVideoEditingProjects } from './dynamicProjectsData';

const CATEGORIES = [
    { name: 'Branding', bgColor: '#D53F52' },
    { name: 'Graphic Design', bgColor: '#F5974E' },
    { name: 'Social Media Management', bgColor: '#5F94C9' },
    { name: 'Performance Marketing', bgColor: '#1800AD' },
    { name: 'Search Engine Optimization (SEO)', bgColor: '#7ED957' },
    { name: 'Influencer Marketing', bgColor: '#5170FF' },
    { name: 'Website Development', bgColor: '#00B8BF' },
    { name: 'Whatsapp Marketing', bgColor: '#FF751F' },
    { name: 'Video Editing', bgColor: '#8E44AD' },
];

// ── Custom Folder Ordering ───────────────────────────────────────────────────
// Add folder names in the arrays below to enforce their specific order. 
// Folders not listed will be sorted alphabetically at the end.
export const PROJECT_ORDER = {
    'Branding': [
        // e.g., 'Treasure9',

        "Global Spice Connect"
    ],
    'Social Media Management': ["Satvik",
        "Kinein",
        "Ats",
        "Global Spice Connect"
    ],
    'Website Development': [],
    'Paid Ads': [],
};

const sortProjects = (projects, categoryName) => {
    const order = PROJECT_ORDER[categoryName] || [];
    return projects.sort((a, b) => {
        const indexA = order.indexOf(a.title);
        const indexB = order.indexOf(b.title);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.title.localeCompare(b.title);
    });
};

// ── Non-eager glob: gives us { glbPath: () => import(...) } ──────────────────
const brandingFilesLazy = import.meta.glob('../assets/Work/Branding/**/*.{webp,jpg,jpeg,png,gif,mp4}');

// Build per-folder loader lists
const brandingLoadersMap = {};
Object.keys(brandingFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!brandingLoadersMap[folderName]) brandingLoadersMap[folderName] = [];
    brandingLoadersMap[folderName].push({
        glbPath,
        importFn: brandingFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

// Sort each folder's files numerically
Object.values(brandingLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

// Thumbnail overrides — only eagerly-imported images go here
const THUMBNAIL_OVERRIDES = {
    'Treasure9': { url: treasure9BrandingThumb, type: 'image' },
};

// Static project list (no URLs yet — just metadata + loader functions)
const brandingProjects = sortProjects(Object.keys(brandingLoadersMap).map((folderName, index) => ({
    id: `branding-${index}`,
    title: folderName,
    category: 'BRANDING',
    loaders: brandingLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Branding');

// ── Non-eager glob for Graphic Design ─────────────────────────────────────────
const graphicDesignFilesLazy = import.meta.glob('../assets/Work/Graphic Design/**/*.{webp,jpg,jpeg,png,mp4}');

const graphicDesignLoadersMap = {};
Object.keys(graphicDesignFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!graphicDesignLoadersMap[folderName]) graphicDesignLoadersMap[folderName] = [];
    graphicDesignLoadersMap[folderName].push({
        glbPath,
        importFn: graphicDesignFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(graphicDesignLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

const graphicDesignProjects = sortProjects(Object.keys(graphicDesignLoadersMap).map((folderName, index) => ({
    id: `graphic-design-${index}`,
    title: folderName,
    category: 'GRAPHIC DESIGN',
    loaders: graphicDesignLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Graphic Design');

// ── Non-eager glob for Social Media ─────────────────────────────────────────
const socialMediaFilesLazy = import.meta.glob('../assets/Work/SOCIAL MEDIA/**/*.{webp,jpg,jpeg,png,mp4}');

const socialMediaLoadersMap = {};
Object.keys(socialMediaFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!socialMediaLoadersMap[folderName]) socialMediaLoadersMap[folderName] = [];
    socialMediaLoadersMap[folderName].push({
        glbPath,
        importFn: socialMediaFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(socialMediaLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

const socialMediaProjects = sortProjects(Object.keys(socialMediaLoadersMap).map((folderName, index) => ({
    id: `social-media-${index}`,
    title: folderName,
    category: 'SOCIAL MEDIA MANAGEMENT',
    loaders: socialMediaLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Social Media Management');

// ── Non-eager glob for Website Development ─────────────────────────────────────────
const websiteDevelopmentFilesLazy = import.meta.glob('../assets/Work/Website Development/**/*.{webp,jpg,jpeg,png,mp4}');

const websiteDevelopmentLoadersMap = {};
Object.keys(websiteDevelopmentFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!websiteDevelopmentLoadersMap[folderName]) websiteDevelopmentLoadersMap[folderName] = [];
    websiteDevelopmentLoadersMap[folderName].push({
        glbPath,
        importFn: websiteDevelopmentFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(websiteDevelopmentLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

const WEBSITE_DEV_THUMBS = {
    'Dave & Sons Argo': '2.webp',
    'Gheeyonnaise': '9.webp',
    'GirCulture': '17.webp',
    'VibeWit': '6.webp',
    'The Timeless Hues': '24.webp',
    'Satvik': '15.webp',
    'Kinein': '11.webp',
    'Global Spice Connect': '21.webp',
};

const websiteDevelopmentProjects = sortProjects(Object.keys(websiteDevelopmentLoadersMap).map((folderName, index) => {
    const loaders = websiteDevelopmentLoadersMap[folderName];
    const targetThumb = WEBSITE_DEV_THUMBS[folderName];
    const thumbLoader = targetThumb ? loaders.find(l => l.fileName === targetThumb) : null;
    return {
        id: `website-development-${index}`,
        title: folderName,
        category: 'WEBSITE DEVELOPMENT',
        loaders: loaders,
        thumbLoader: thumbLoader,
        thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
    };
}), 'Website Development');

// ── Non-eager glob for Paid Ads ─────────────────────────────────────────
const paidAdsFilesLazy = import.meta.glob('../assets/Work/PAID ADS/**/*.{webp,jpg,jpeg,png,mp4}');

const paidAdsLoadersMap = {};
Object.keys(paidAdsFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!paidAdsLoadersMap[folderName]) paidAdsLoadersMap[folderName] = [];
    paidAdsLoadersMap[folderName].push({
        glbPath,
        importFn: paidAdsFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(paidAdsLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

const paidAdsProjects = sortProjects(Object.keys(paidAdsLoadersMap).map((folderName, index) => ({
    id: `paid-ads-${index}`,
    title: folderName,
    category: 'PAID ADS',
    loaders: paidAdsLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Paid Ads');

// ── Non-eager glob for Performance Marketing ─────────────────────────────────
const performanceMarketingFilesLazy = import.meta.glob('../assets/Work/performace/**/*.{webp,jpg,jpeg,png,mp4}');

const performanceMarketingLoadersMap = {};
Object.keys(performanceMarketingFilesLazy).forEach(glbPath => {
    const parts = glbPath.split('/');
    const fileName = parts.pop();
    const folderName = parts.pop();
    if (!performanceMarketingLoadersMap[folderName]) performanceMarketingLoadersMap[folderName] = [];
    performanceMarketingLoadersMap[folderName].push({
        glbPath,
        importFn: performanceMarketingFilesLazy[glbPath],
        fileName,
        type: fileName.endsWith('.mp4') ? 'video' : 'image',
    });
});

Object.values(performanceMarketingLoadersMap).forEach(list => {
    list.sort((a, b) => {
        const na = parseFloat(a.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        const nb = parseFloat(b.fileName.match(/[\d.]+/)?.[0] || 0) || 0;
        return na - nb;
    });
});

const performanceMarketingProjects = sortProjects(Object.keys(performanceMarketingLoadersMap).map((folderName, index) => ({
    id: `performance-marketing-${index}`,
    title: folderName === 'performace' ? 'Performance Campaigns' : folderName,
    category: 'PERFORMANCE MARKETING',
    loaders: performanceMarketingLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Performance Marketing');

const videoEditingProjects = buildVideoEditingProjects(gridVideoPath);
const influencerMarketingProjects = buildInfluencerMarketingProjects();

const generateProjects = (category) => {
    if (category === 'Branding' && brandingProjects.length > 0) return brandingProjects;
    if (category === 'Graphic Design' && graphicDesignProjects.length > 0) return graphicDesignProjects;
    if (category === 'Social Media Management' && socialMediaProjects.length > 0) return socialMediaProjects;
    if (category === 'Website Development' && websiteDevelopmentProjects.length > 0) return websiteDevelopmentProjects;
    if (category === 'Paid Ads' && paidAdsProjects.length > 0) return paidAdsProjects;
    if (category === 'Performance Marketing' && performanceMarketingProjects.length > 0) return performanceMarketingProjects;
    if (category === 'Video Editing' && videoEditingProjects.length > 0) return videoEditingProjects;
    if (category === 'Influencer Marketing' && influencerMarketingProjects.length > 0) return influencerMarketingProjects;
    return Array(6).fill(null).map((_, i) => ({
        id: i,
        title: 'Placeholder Project',
        category: category.toUpperCase(),
        loaders: null,
        thumbnailOverride: null,
    }));
};

// ── Lazy popup image — only loads when scrolled into view ─────────────────
const LazyPopupImage = memo(({ loader, alt, index }) => {
    const containerRef = useRef(null);
    const [mediaData, setMediaData] = useState(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // If it's an instagram embed, resolve immediately (no heavy asset)
        if (loader.type === 'instagram') {
            setMediaData({ url: loader.url, type: 'instagram' });
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loadedRef.current) {
                    loadedRef.current = true;
                    observer.disconnect();
                    // Dynamically import the asset only when visible
                    loader.importFn().then((mod) => {
                        setMediaData({ url: mod.default || mod, type: loader.type });
                    });
                }
            },
            { rootMargin: '300px 0px' } // Start loading 300px before visible
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [loader]);

    if (!mediaData) {
        return (
            <div ref={containerRef} className="wd-popup-image-placeholder" style={{ minHeight: '200px', background: '#1a1a1a' }}>
                <div className="wd-skeleton-shimmer" />
            </div>
        );
    }

    if (mediaData.type === 'video') {
        return (
            <video
                ref={containerRef}
                src={mediaData.url}
                className="wd-popup-image-placeholder"
                style={{ height: 'auto', background: 'transparent', width: '100%' }}
                autoPlay loop muted playsInline
            />
        );
    }

    if (mediaData.type === 'instagram') {
        return (
            <div ref={containerRef} className="wd-popup-instagram-container" style={{ background: 'transparent', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <iframe src={`${mediaData.url}embed`} width="100%" height="700" style={{ maxWidth: '400px', borderRadius: '12px' }} frameBorder="0" scrolling="no" allowTransparency="true" />
            </div>
        );
    }

    return (
        <img
            ref={containerRef}
            src={mediaData.url}
            alt={alt}
            className="wd-popup-image-placeholder"
            style={{ height: 'auto', background: 'transparent' }}
            loading="lazy"
            decoding="async"
        />
    );
});

// ── Memoised project card — loads its own thumbnail via IntersectionObserver ──
const ProjectCard = memo(({ project, onOpen }) => {
    const cardRef = useRef(null);
    const [thumb, setThumb] = useState(null);
    const loadedRef = useRef(false);

    useEffect(() => {
        // If there's a static thumbnail override, use it immediately
        if (project.thumbnailOverride) {
            setThumb(project.thumbnailOverride);
            loadedRef.current = true;
            return;
        }

        const el = cardRef.current;
        if (!el || loadedRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loadedRef.current) {
                    loadedRef.current = true;
                    observer.disconnect();

                    if (project.loaders && project.loaders.length > 0) {
                        const loader = project.thumbLoader || project.loaders[0];
                        if (loader.type === 'instagram') return;
                        loader.importFn().then((mod) => {
                            setThumb({ url: mod.default || mod, type: loader.type });
                        });
                    }
                }
            },
            { rootMargin: '200px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [project]);

    return (
        <div ref={cardRef} className="work-details-card" onClick={() => onOpen(project)}>
            {thumb ? (
                thumb.type === 'video' ? (
                    <video
                        src={thumb.url}
                        className="work-details-image-placeholder"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        muted
                        preload="metadata"
                    />
                ) : (
                    <img
                        src={thumb.url}
                        alt={project.title}
                        className="work-details-image-placeholder"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        loading="lazy"
                        decoding="async"
                    />
                )
            ) : (
                <div className="work-details-image-placeholder wd-thumb-skeleton">
                    <div className="wd-skeleton-shimmer" />
                </div>
            )}
            <div className="work-details-info">
                <h4>{project.title}</h4>
            </div>
        </div>
    );
});

// ── Component ────────────────────────────────────────────────────────────────
const WorkDetails = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (location.state && location.state.category) {
            setActiveCategory(location.state.category);
        }
    }, [location]);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // ── Open popup — no longer bulk-loads all images ─────────────────────────
    const openPopup = useCallback((project) => {
        setSelectedProject(project);

        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            const scrollBody = document.querySelector('.wd-popup-scroll-body');
            if (scrollBody) scrollBody.scrollTop = 0;
        }, 0);
    }, []);

    const closePopup = useCallback(() => {
        const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
        setSelectedProject(null);
    }, []);

    // Keyboard / wheel / touch locks
    useEffect(() => {
        if (!selectedProject) return;
        const handleKeyDown = (e) => { if (e.key === 'Escape') closePopup(); };
        const handleWheel = (e) => {
            e.stopPropagation();
            const sb = document.querySelector('.wd-popup-scroll-body');
            if (sb) sb.scrollTop += e.deltaY;
        };
        const blockTouch = (e) => {
            const sb = document.querySelector('.wd-popup-scroll-body');
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
    }, [selectedProject, closePopup]);

    const activeProjects = generateProjects(activeCategory);

    return (
        <div className="work-details-wrapper">
            <section className="work-details-page">
                <div className="work-details-container">
                    <h1 className="work-details-title">WORK THAT DELIVERS</h1>
                    <nav className="work-details-category-bar">
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
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {activeCategory === 'Influencer Marketing' ? (
                        <main className="work-details-reels-grid">
                            {INFLUENCER_REELS.map((reel, idx) => (
                                <div key={idx} className="work-details-reel-item">
                                    <iframe
                                        src={`${reel.url}embed/?cr=1&v=14&wp=326`}
                                        className="work-details-reel-iframe"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency="true"
                                        allow="encrypted-media"
                                        title={`Influencer Reel ${idx + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </main>
                    ) : (
                        <main className="work-details-grid">
                            {activeProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onOpen={openPopup}
                                />
                            ))}
                        </main>
                    )}
                </div>
            </section>

            {/* Popup / Lightbox Modal */}
            {selectedProject && (
                <div className="wd-popup-overlay" onClick={closePopup}>
                    <div className="wd-popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="wd-popup-close" onClick={closePopup} aria-label="Close popup">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="wd-popup-scroll-body">
                            <div className="wd-popup-header">
                                <h2 className="wd-popup-title">{selectedProject.title}</h2>
                            </div>

                            <div className="wd-popup-image-area">
                                {selectedProject.loaders ? (
                                    selectedProject.loaders.map((loader, idx) => (
                                        <LazyPopupImage
                                            key={idx}
                                            loader={loader}
                                            alt={`${selectedProject.title} ${idx + 1}`}
                                            index={idx}
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
