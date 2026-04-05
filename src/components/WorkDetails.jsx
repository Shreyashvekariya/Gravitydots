import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkDetails.css';

const CATEGORIES = [
    { name: 'Branding', bgColor: '#D53F52' },
    { name: 'Graphic Design & Video Editing', bgColor: '#F5974E' },
    { name: 'Social Media Management', bgColor: '#5F94C9' },
    { name: 'Paid Ads', bgColor: '#1800AD' },
    { name: 'Search Engine Optimization (SEO)', bgColor: '#7ED957' },
    { name: 'Influencer Marketing', bgColor: '#5170FF' },
    { name: 'Content Creation', bgColor: '#FF751F' },
    { name: 'Website Development', bgColor: '#00B8BF' }
];

const generateProjects = (category) => {
    return Array(6).fill(null).map((_, i) => ({
        id: i,
        title: 'Gir Culture',
        category: category.toUpperCase()
    }));
};

const WorkDetails = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);

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
                            {activeProjects.map(project => (
                                <div key={project.id} className="work-details-card">
                                    <div className="work-details-image-placeholder">
                                        <div className="wd-hills"></div>
                                        <div className="wd-sun"></div>
                                        <div className="wd-cloud"></div>
                                    </div>
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
        </div>
    );
};

export default WorkDetails;
