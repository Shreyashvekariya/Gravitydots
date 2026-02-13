import { useState } from 'react'
import './Reviews.css'

function Reviews() {
    const reviews = [
        {
            name: 'Rahul Sharma',
            text: 'Gravity transformed our online presence completely. Their creative approach and strategic thinking helped us reach 3x more students within just 3 months. The team was always available and responsive.',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800'
        },
        {
            name: 'Priya Mehta',
            text: 'Working with Gravity was a game-changer for our brand. They understood our vision perfectly and delivered results that exceeded expectations. Our social media engagement grew by 200%.',
            image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800'
        },
        {
            name: 'Arjun Patel',
            text: 'The ROI we got from their digital marketing campaigns was incredible. Professional, creative, and always on time. Our website traffic doubled within the first month of working together.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800'
        },
        {
            name: 'Sneha Kapoor',
            text: 'From branding to social media management, Gravity handled everything with perfection. Their attention to detail and creative solutions made our brand stand out in a competitive market.',
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800'
        }
    ]

    const [current, setCurrent] = useState(0)

    const nextReview = () => {
        setCurrent((prev) => (prev + 1) % reviews.length)
    }

    return (
        <section className="reviews" id="reviews">
            <div className="reviews-layout">
                {/* Left black strip */}
                <div className="reviews-strip"></div>

                {/* Review card */}
                <div className="review-card">
                    <div className="review-card-back">
                        <div className="review-card-back-bottom"></div>
                    </div>
                    <div className="review-card-inner" key={current}>
                        <div className="review-card-top">
                            <div className="review-user-icon">
                                <svg viewBox="0 0 24 24" fill="#000000" width="60" height="60">
                                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                                </svg>
                            </div>
                            <h3 className="review-name">{reviews[current].name}</h3>
                            <p className="review-text">{reviews[current].text}</p>
                        </div>
                        <div className="review-card-bottom" onClick={nextReview}>
                            <div className="review-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" width="20" height="20">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M10 8l4 4-4 4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div className="reviews-image">
                    <img key={current} src={reviews[current].image} alt={reviews[current].name} />
                </div>
            </div>
        </section>
    )
}

export default Reviews
