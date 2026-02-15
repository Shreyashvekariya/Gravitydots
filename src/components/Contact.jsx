import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-left">
                    <h1 className="contact-heading">LET'S<br />TALK</h1>
                    <div className="contact-details">
                        <div className="detail-group">
                            <span className="label">EMAIL</span>
                            <a href="mailto:hello@gravitydots.com" className="value">hello@gravitydots.com</a>
                        </div>
                        <div className="detail-group">
                            <span className="label">PHONE</span>
                            <span className="value">+1 (555) 000-0000</span>
                        </div>
                        <div className="detail-group">
                            <span className="label">ADDRESS</span>
                            <span className="value">
                                123 Creative Blvd,<br />
                                Design District, NY 10001
                            </span>
                        </div>
                    </div>
                    <div className="social-links-contact">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>NAME</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>MESSAGE</label>
                            <textarea placeholder="Tell us about your project..." rows="6"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
