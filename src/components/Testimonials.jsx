import { useState } from 'react'
import './Testimonials.css'

import aashishImg from '../assets/testimonial/Aashish Madhvani.webp'
import bhavikMehtaImg from '../assets/testimonial/Bhavik Mehta.webp'
import bhavikShahImg from '../assets/testimonial/Bhavik Shah.webp'
import dharitImg from '../assets/testimonial/Dharit Shah.webp'
import kehulImg from '../assets/testimonial/Kehul Shah.webp'
import pankajImg from '../assets/testimonial/Pankaj Prajapati.webp'
import rajaImg from '../assets/testimonial/Raja Bhuyan.webp'
import rajuImg from '../assets/testimonial/Raju Patel.webp'
import tejasImg from '../assets/testimonial/Tejas Lodhiya.webp'
import utsavImg from '../assets/testimonial/Utsav Shah.webp'
import testimonialRightImg from '../assets/testimonial/Testimonial_photo.webp'

// Placeholder for client logos. Update mapping appropriately.
import client1 from '../assets/Clients/12.png'
import client2 from '../assets/Clients/7.png'
import client3 from '../assets/Clients/2.png'
import client4 from '../assets/Clients/1.png'
import client5 from '../assets/Clients/20.png'
import client6 from '../assets/Clients/6.png'
import client7 from '../assets/Clients/7.png'
import client8 from '../assets/Clients/16.png'
import client9 from '../assets/Clients/14.png'
import client10 from '../assets/Clients/11.png'

function Testimonials() {
    const reviews = [
        {
            name: 'Raja Bhuyan',
            company: 'Satvik Ghee',
            text: 'Working with GravityDots has been a great experience for our brand. From social media and creative content to advertising and digital strategy, their team manages every aspect with consistency and a clear understanding of our goals. They have become a reliable digital growth partner for Satvik Ghee.',
            userLogo: rajaImg,
            clientLogo: client1
        },
        {
            name: 'Bhavik Shah',
            company: 'KINEIN',
            text: 'GravityDots did an excellent job developing our website. The team understood our requirements clearly and delivered a professional, user-friendly website that represents our business effectively. The entire process was smooth, well-coordinated, and completed with great attention to detail.',
            userLogo: bhavikShahImg,
            clientLogo: client2
        },
        {
            name: 'Dharit Shah',
            company: 'GIR CULTURE',
            text: 'GravityDots has helped us build and strengthen our digital presence with a complete marketing approach. Their team understands our brand values and translates them into creative content, campaigns, and strategies that connect with our audience. We truly appreciate their creativity, responsiveness, and consistent support.',
            userLogo: dharitImg,
            clientLogo: client3
        },
        {
            name: 'Kehul Shah',
            company: 'GHEEYONNAISE',
            text: 'Launching and marketing a unique product requires the right mix of creativity and strategy, and GravityDots has delivered both. Their team has supported us across content, social media, campaigns, and digital marketing with fresh ideas and consistent execution. It has been a smooth and valuable collaboration.',
            userLogo: kehulImg,
            clientLogo: client4
        },
        {
            name: 'Utsav Shah',
            company: 'Studio Candid',
            text: 'In the photography industry, presentation matters as much as the work itself. GravityDots understands our visual style and helps us present our work effectively across digital platforms. Their creative approach, content strategy, and marketing support have helped us maintain a strong and professional online presence.',
            userLogo: utsavImg,
            clientLogo: client5
        },
        {
            name: 'Pankaj Prajapati',
            company: 'Madhur',
            text: 'GravityDots has brought creativity and consistency to our social media presence. Their team understands the food industry and creates content that presents our dishes and brand in an attractive and engaging way. We are happy with their creative ideas, timely execution, and professional support.',
            userLogo: pankajImg,
            clientLogo: client6
        },
        {
            name: 'Aashish Madhvani',
            company: 'cowherd',
            text: 'GravityDots has been a supportive digital marketing partner for our brand. Their team understands the importance of communicating product quality and brand values to the right audience. Their creative ideas, digital strategy, and consistent execution have helped us build a stronger online presence.',
            userLogo: aashishImg,
            clientLogo: client7
        },
        {
            name: 'Bhavik Mehta',
            company: 'Global Spice Connect',
            text: 'GravityDots played an important role in building the visual identity and creative communication for Global Spice Connect. From branding concepts to event creatives and promotional designs, their team delivered work that was professional, consistent, and aligned with the scale of our exhibition. We appreciate their creativity and commitment throughout the project.',
            userLogo: bhavikMehtaImg,
            clientLogo: client8
        },
        {
            name: 'Tejas Lodhiya',
            company: 'ATS',
            text: 'GravityDots has helped us create a more active and engaging presence on social media. Their team consistently brings creative ideas that communicate our products and brand in an appealing way. We value their understanding of our audience, timely execution, and ongoing support.',
            userLogo: tejasImg,
            clientLogo: client9
        },
        {
            name: 'Raju Patel',
            company: 'Shivatma Rudraksha',
            text: 'Our experience with GravityDots has been professional and result-focused. Their team manages our social media and advertising with a good understanding of our products and target audience. We appreciate their creative approach, campaign planning, and consistent communication.',
            userLogo: rajuImg,
            clientLogo: client10
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
                    </div>
                    <div className="review-card-inner" key={current}>
                        <div className="review-card-top">
                            <div className="review-user-icon">
                                <img src={reviews[current].userLogo} alt={reviews[current].name} className="user-logo-img" />
                            </div>
                            <div className="review-header-info">
                                <h3 className="review-name">{reviews[current].name}</h3>
                                <div className="review-client-logo">
                                    <img src={reviews[current].clientLogo} alt={reviews[current].company} className="client-logo-img" />
                                </div>
                            </div>
                            <p className="review-text">{reviews[current].text}</p>
                        </div>
                    </div>
                    <div className="review-arrow-wrapper" onClick={nextReview}>
                        <div className="review-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" width="20" height="20">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M10 8l4 4-4 4" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div className="reviews-image">
                    <img src={testimonialRightImg} alt="Happy clients" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
