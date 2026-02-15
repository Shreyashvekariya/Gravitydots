import React, { useEffect, useRef } from 'react';
import './Work.css';

const projects = [
    {
        id: 1,
        title: 'Neon Horizon',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        year: '2025'
    },
    {
        id: 2,
        title: 'Minimalist Void',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1454117096348-e4abb1768190?w=800&q=80',
        year: '2024'
    },
    {
        id: 3,
        title: 'Urban Pulse',
        category: 'Campaign',
        image: 'https://images.unsplash.com/photo-1481487484168-9b930d55208d?w=800&q=80',
        year: '2024'
    },
    {
        id: 4,
        title: 'Future Tech',
        category: 'Product Design',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        year: '2023'
    },
    {
        id: 5,
        title: 'Eco Sphere',
        category: 'Strategy',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
        year: '2023'
    },
    {
        id: 6,
        title: 'Abstract Minds',
        category: 'Art Direction',
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
        year: '2022'
    }
];

const Work = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="work-page" ref={sectionRef}>
            <div className="work-header">
                <h1 className="work-title fade-up">SELECTED WORK</h1>
                <p className="work-subtitle fade-up">A curated collection of our most impactful endeavors.</p>
            </div>

            <div className="work-grid">
                {projects.map((project) => (
                    <div key={project.id} className="work-item fade-up">
                        <div className="work-image-container">
                            <img src={project.image} alt={project.title} className="work-image" />
                            <div className="work-overlay">
                                <span className="view-project">VIEW PROJECT</span>
                            </div>
                        </div>
                        <div className="work-info">
                            <div className="work-info-left">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>
                            <span className="project-year">{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
