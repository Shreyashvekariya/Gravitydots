import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';
import cursorImage from '../assets/images/Cursor (1).png';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setIsVisible(true);
            if (cursorRef.current) {
                // Use requestAnimationFrame for smoother movement
                requestAnimationFrame(() => {
                    if (cursorRef.current) {
                        cursorRef.current.style.left = `${e.clientX}px`;
                        cursorRef.current.style.top = `${e.clientY}px`;
                    }
                });
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target) return;

            // Check ifclickable by tag names and common attributes
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') || 
                target.closest('button') ||
                target.closest('.clickable') ||
                target.onclick !== null ||
                window.getComputedStyle(target).cursor === 'pointer';
                // Note: getComputedStyle might return 'none' due to our CSS, 
                // but we can also check specialized classes if needed.
            
            setIsPointer(isClickable);
        };

        const handleMouseDown = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = 'scale(0.8)';
            }
        };

        const handleMouseUp = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = 'scale(1)';
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="custom-cursor-container">
            <div 
                ref={cursorRef} 
                className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
            >
                <img src={cursorImage} alt="custom cursor" />
            </div>
        </div>
    );
};

export default CustomCursor;
