import React, { useEffect, useRef } from 'react';
import './Work.css';

const projects = [
    {
        id: 1,
        title: 'Neon Horizon',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2025'
    },
    {
        id: 2,
        title: 'Minimalist Void',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2024'
    },
    {
        id: 3,
        title: 'Urban Pulse',
        category: 'Campaign',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2024'
    },
    {
        id: 4,
        title: 'Future Tech',
        category: 'Product Design',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2023'
    },
    {
        id: 5,
        title: 'Eco Sphere',
        category: 'Strategy',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        year: '2023'
    },
    {
        id: 6,
        title: 'Abstract Minds',
        category: 'Art Direction',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
                            <img
                                src={project.image}
                                alt={project.title}
                                className="work-image"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.style.display = 'block';
                                    e.target.style.backgroundColor = '#1a1a1a';
                                }}
                            />
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
