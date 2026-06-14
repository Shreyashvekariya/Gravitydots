import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkDetails.css';

// Static import ONLY for the Treasure9 Branding thumbnail override
import treasure9BrandingThumb from '../assets/Work/Branding/Treasure9 Branding/6.webp';

const CATEGORIES = [
    { name: 'Branding', bgColor: '#D53F52' },
    { name: 'Graphic Design', bgColor: '#F5974E' },
    { name: 'Social Media Management', bgColor: '#5F94C9' },
    { name: 'Performance Marketing', bgColor: '#1800AD' },
    { name: 'Search Engine Optimization (SEO)', bgColor: '#7ED957' },
    { name: 'Influencer Marketing', bgColor: '#5170FF' },
    { name: 'Website Development', bgColor: '#00B8BF' },
    { name: 'Whatsapp Marketing', bgColor: '#FF751F' },
];

// ── Custom Folder Ordering ───────────────────────────────────────────────────
// Add folder names in the arrays below to enforce their specific order. 
// Folders not listed will be sorted alphabetically at the end.
export const PROJECT_ORDER = {
    'Branding': [
        // e.g., 'Treasure9 Branding',

        "Global Spice Connect Branding"
    ],
    'Social Media Management': [4, 2],
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
    'Treasure9 Branding': { url: treasure9BrandingThumb, type: 'image' },
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

const websiteDevelopmentProjects = sortProjects(Object.keys(websiteDevelopmentLoadersMap).map((folderName, index) => ({
    id: `website-development-${index}`,
    title: folderName,
    category: 'WEBSITE DEVELOPMENT',
    loaders: websiteDevelopmentLoadersMap[folderName],
    thumbnailOverride: THUMBNAIL_OVERRIDES[folderName] || null,
})), 'Website Development');

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

const generateProjects = (category) => {
    if (category === 'Branding' && brandingProjects.length > 0) return brandingProjects;
    if (category === 'Graphic Design' && graphicDesignProjects.length > 0) return graphicDesignProjects;
    if (category === 'Social Media Management' && socialMediaProjects.length > 0) return socialMediaProjects;
    if (category === 'Website Development' && websiteDevelopmentProjects.length > 0) return websiteDevelopmentProjects;
    if (category === 'Paid Ads' && paidAdsProjects.length > 0) return paidAdsProjects;
    return Array(6).fill(null).map((_, i) => ({
        id: i,
        title: 'Placeholder Project',
        category: category.toUpperCase(),
        loaders: null,
        thumbnailOverride: null,
    }));
};

// ── Component ────────────────────────────────────────────────────────────────
const WorkDetails = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
    const [selectedProject, setSelectedProject] = useState(null);

    // { projectId: { url, type } }  — one thumbnail per card
    const [cardThumbnails, setCardThumbnails] = useState({});

    // { projectId: [{ url, type }, ...] }  — full media, loaded on popup open
    const [popupMedia, setPopupMedia] = useState({});
    const [loadingPopup, setLoadingPopup] = useState(false);

    useEffect(() => {
        if (location.state && location.state.category) {
            setActiveCategory(location.state.category);
        }
    }, [location]);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // ── Load card thumbnails lazily on mount ──────────────────────────────────
    useEffect(() => {
        const loadThumbnails = async (projects) => {
            projects.forEach(async (project) => {
                if (project.thumbnailOverride) {
                    setCardThumbnails(prev => ({
                        ...prev,
                        [project.id]: project.thumbnailOverride,
                    }));
                } else if (project.loaders && project.loaders.length > 0) {
                    // Load only the FIRST file as thumbnail
                    const first = project.loaders[0];
                    try {
                        const mod = await first.importFn();
                        const url = mod.default || mod;
                        setCardThumbnails(prev => ({
                            ...prev,
                            [project.id]: { url, type: first.type },
                        }));
                    } catch (e) {
                        console.error('Thumbnail load failed:', e);
                    }
                }
            });
        };

        loadThumbnails(brandingProjects);
        loadThumbnails(graphicDesignProjects);
        loadThumbnails(socialMediaProjects);
        loadThumbnails(websiteDevelopmentProjects);
        loadThumbnails(paidAdsProjects);
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
            const scrollBody = document.querySelector('.wd-popup-scroll-body');
            if (scrollBody) scrollBody.scrollTop = 0;
        }, 0);

        // Already loaded? Skip.
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
    }, [selectedProject]);

    const activeProjects = generateProjects(activeCategory);
    const currentPopupMedia = selectedProject ? popupMedia[selectedProject.id] : null;

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
                    <main className="work-details-grid">
                        {activeProjects.map((project) => {
                            const thumb = cardThumbnails[project.id] || null;
                            return (
                                <div
                                    key={project.id}
                                    className="work-details-card"
                                    onClick={() => openPopup(project)}
                                >
                                    {thumb ? (
                                        thumb.type === 'video' ? (
                                            <video
                                                src={thumb.url}
                                                className="work-details-image-placeholder"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: project.category === 'WEBSITE DEVELOPMENT' ? 'left center' : 'center'
                                                }}
                                                muted
                                                preload="metadata"
                                            />
                                        ) : (
                                            <img
                                                src={thumb.url}
                                                alt={project.title}
                                                className="work-details-image-placeholder"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: project.category === 'WEBSITE DEVELOPMENT' ? 'left center' : 'center'
                                                }}
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
                        })}
                    </main>
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
                                {loadingPopup ? (
                                    /* Loading spinner */
                                    <div className="wd-popup-loading">
                                        <div className="wd-spinner" />
                                        <p>Loading...</p>
                                    </div>
                                ) : currentPopupMedia ? (
                                    currentPopupMedia.map((item, idx) =>
                                        item.type === 'video' ? (
                                            <video
                                                key={idx}
                                                src={item.url}
                                                className="wd-popup-image-placeholder"
                                                style={{ height: 'auto', background: 'transparent', width: '100%' }}
                                                autoPlay loop muted playsInline
                                            />
                                        ) : (
                                            <img
                                                key={idx}
                                                src={item.url}
                                                alt={`${selectedProject.title} ${idx + 1}`}
                                                className="wd-popup-image-placeholder"
                                                style={{ height: 'auto', background: 'transparent' }}
                                                loading="lazy"
                                            />
                                        )
                                    )
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
