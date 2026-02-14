import React, { useEffect } from 'react';
import './CaseStudies.css';

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
    );
};

export default CaseStudies;
