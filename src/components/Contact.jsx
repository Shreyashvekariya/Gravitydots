import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-bg-wrapper">
            <section className="contact-page">
                {/* Hero Section */}
                <div className="contact-hero">
                    <div className="contact-hero-content">
                        <span className="contact-badge">GET IN TOUCH</span>
                        <h1 className="contact-main-title">LET'S CREATE SOMETHING TOGETHER</h1>
                        <p className="contact-hero-subtitle">
                            Ready to launch your brand into the digital orbit? We're here to make it happen.
                        </p>
                    </div>
                </div>

                {/* Contact Grid */}
                <div className="contact-grid">
                    {/* Contact Info - Left Side */}
                    <div className="contact-info-left">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p>+91 84015 89892</p>
                                <p>+91 84013 89892</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 6l-10 7L2 6" />
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p>Info@gravitydots.in</p>
                                <p>Gravitydots98@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p>B-346, Money plant high street, Jagatpur,</p>
                                <p>S G Hwy, Ahmedabad, Gujarat 382481</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="contact-form-wrapper">
                        <h2 className="form-title">Send us a message</h2>
                        <form className="contact-form-modern" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-field">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-field">
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn-modern">
                                <span>Send Message</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                    <polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <div className="map-header">
                        <h2 className="map-title">Find Us Here</h2>
                        <p className="map-subtitle">Located in Ahmedabad, Gujarat</p>
                    </div>
                    <div className="map-container">
                        <div className="map-overlay">
                            <div className="map-info-box">
                                <h4>Gravity Dots HQ</h4>
                                <p>B-346, Money plant high street, Jagatpur</p>
                                <a href="https://maps.google.com/?q=B-346,+Money+plant+high+street,+Jagatpur,+S+G+Hwy,+Ahmedabad,+Gujarat+382481" target="_blank" rel="noopener noreferrer" className="directions-btn">
                                    Get Directions →
                                </a>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58713.06510303077!2d72.47775070537514!3d23.112957217784615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830fd02821eb%3A0x82adcd350d9458c0!2sGravityDots!5e0!3m2!1sen!2sin!4v1771181757357!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gravity Dots Location - B-346, Money Plant High Street, Jagatpur, S G Hwy, Ahmedabad, Gujarat 382481"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
