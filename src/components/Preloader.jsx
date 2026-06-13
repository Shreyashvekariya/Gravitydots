import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start fade out after 2 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // Remove from DOM after transition completes
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`preloader-overlay ${fadeOut ? 'hidden' : ''}`}>
            <div className="preloader-box" />
        </div>
    );
};

export default Preloader;
