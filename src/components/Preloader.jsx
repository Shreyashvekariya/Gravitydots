import React, { useState, useEffect, useMemo } from 'react';
import './Preloader.css';
import gdLogo from '../assets/images/GD LOGO (BLACK & WHITE).png';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [assembled, setAssembled] = useState(false);

    // Generate burst dots once (stable across re-renders)
    const burstDots = useMemo(() =>
        Array.from({ length: 14 }, (_, i) => {
            const angle = (i * (360 / 14)) * (Math.PI / 180);
            const distance = 70 + (i % 3) * 30;
            return {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                size: 3 + (i % 4) * 2,
                delay: (i % 5) * 0.04,
            };
        }), []);

    // Floating gravity dots (stable)
    const gravityDots = useMemo(() =>
        Array.from({ length: 6 }, (_, i) => ({
            left: 12 + i * 16,
            size: 4 + (i % 3) * 2,
            delay: i * 0.5,
            duration: 3 + (i % 3),
        })), []);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            const remaining = 100 - current;
            const step = Math.max(0.5, remaining * 0.055);
            current = Math.min(100, current + step);
            setProgress(Math.round(current));

            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => setFadeOut(true), 400);
                setTimeout(() => {
                    setIsVisible(false);
                    document.body.style.overflow = '';
                }, 1400);
            }
        }, 30);

        // Trigger assembled state when halves meet
        const assemblyTimer = setTimeout(() => setAssembled(true), 1300);

        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(interval);
            clearTimeout(assemblyTimer);
            document.body.style.overflow = '';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`preloader-overlay ${fadeOut ? 'exit' : ''}`}>
            <div className="preloader-grid-bg"></div>

            {/* Floating gravity dots in background */}
            {gravityDots.map((dot, i) => (
                <div
                    key={`gd-${i}`}
                    className="preloader-gravity-dot"
                    style={{
                        left: `${dot.left}%`,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        animationDelay: `${dot.delay}s`,
                        animationDuration: `${dot.duration}s`,
                    }}
                />
            ))}

            <div className="preloader-content">
                {/* Logo split-assembly area */}
                <div className={`preloader-logo-assembly ${assembled ? 'assembled' : ''}`}>
                    {/* Left half */}
                    <div className="preloader-logo-half preloader-logo-left">
                        <img src={gdLogo} alt="" className="preloader-logo" />
                    </div>
                    {/* Right half */}
                    <div className="preloader-logo-half preloader-logo-right">
                        <img src={gdLogo} alt="" className="preloader-logo" />
                    </div>

                    {/* Ripple shockwaves on connect */}
                    <div className={`preloader-ripple ${assembled ? 'active' : ''}`}></div>
                    <div className={`preloader-ripple ripple-2 ${assembled ? 'active' : ''}`}></div>

                    {/* Burst dots */}
                    {burstDots.map((dot, i) => (
                        <div
                            key={`b-${i}`}
                            className={`preloader-burst-dot ${assembled ? 'burst' : ''}`}
                            style={{
                                '--burst-x': `${dot.x}px`,
                                '--burst-y': `${dot.y}px`,
                                '--dot-size': `${dot.size}px`,
                                '--burst-delay': `${dot.delay}s`,
                            }}
                        />
                    ))}

                    {/* Red scan line that sweeps across after assembly */}
                    <div className={`preloader-scan-line ${assembled ? 'sweep' : ''}`}></div>
                </div>

                {/* Progress bar & counter */}
                <div className="preloader-progress-section">
                    <div className="preloader-progress-track">
                        <div
                            className="preloader-progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="preloader-progress-info">
                        <span className="preloader-loading-text">Loading</span>
                        <span className="preloader-percent">{progress}%</span>
                    </div>
                </div>
            </div>

            {/* Corner accents */}
            <div className="preloader-corner preloader-corner-tl"></div>
            <div className="preloader-corner preloader-corner-br"></div>
        </div>
    );
};

export default Preloader;
