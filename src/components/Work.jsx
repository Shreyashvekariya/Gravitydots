import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';

const projects = [
    { title: 'Customised', subtitle: 'Branding', bgColor: '#D53F52', description: 'Logo design, brand identity, packaging & creatives', category: 'Branding' },
    { title: 'Graphic Designing', subtitle: 'Video Editing', bgColor: '#F5974E', description: 'Social media creatives, reels, ads & promotional videos', category: 'Graphic Design & Video Editing' },
    { title: 'Social Media', subtitle: 'Management', bgColor: '#5F94C9', description: 'Content creation, posting, engagement & growth strategy', category: 'Social Media Management' },
    { title: 'Performance Marketing', subtitle: '(Meta & Google)', bgColor: '#1800AD', description: 'High-converting ads with ROI-focused targeting', category: 'Paid Ads' },
    { title: 'SEO', subtitle: 'Search Engine Optimization', bgColor: '#7ED957', description: 'Improve rankings, traffic & visibility organically', category: 'Search Engine Optimization (SEO)' },
    { title: 'Influencer', subtitle: 'Marketing', bgColor: '#5170FF', description: 'Right creators, right audience, real impact', category: 'Influencer Marketing' },
    { title: 'Marketing', subtitle: 'Whatsapp & Email', bgColor: '#FF751F', description: 'Captions, visuals, reels & brand storytelling', category: 'Content Creation' },
    { title: 'Website', subtitle: 'Development', bgColor: '#00B8BF', description: 'Fast, responsive & conversion-friendly websites', category: 'Website Development' },
];

const Work = () => {
    const navigate = useNavigate();
    return (
        <div className="work-bg-wrapper">
            <section className="work-page">
                <div className="work-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="work-card"
                            onClick={() => navigate('/work-details', { state: { category: project.category } })}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="work-content">
                                <span className="work-title">{project.title}</span>
                                <span className="work-subtitle">{project.subtitle}</span>
                            </div>
                            <div className="work-overlay" style={{ background: project.bgColor }}>
                                <span className="work-title">{project.title}</span>
                                <span className="work-subtitle">{project.subtitle}</span>
                                <p className="work-description">{project.description}</p>
                                <div className="work-arrow">
                                    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="28" stroke="#ffffff" strokeWidth="2.5" />
                                        <line x1="16" y1="30" x2="40" y2="30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                                        <polygon points="38,23 48,30 38,37" fill="#ffffff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Work;
