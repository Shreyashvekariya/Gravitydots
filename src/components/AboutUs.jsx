import './AboutUs.css'
import Tilt from 'react-parallax-tilt';
import ayushImg from '../assets/images/about/team/Ayush.webp';
import bhagirathImg from '../assets/images/about/team/Bhagirath.webp';
import aashishImg from '../assets/images/about/team/Aashish.webp';
import niyatiImg from '../assets/images/about/team/Niyati.webp';
import dileepImg from '../assets/images/about/team/Dileep.webp';
import jatinimg from '../assets/images/about/team/Jatin.webp';
import keyurimg from '../assets/images/about/team/Keyur.webp';
import card1Img from '../assets/images/about/1.webp';
import card2Img from '../assets/images/about/2.webp';
import card3Img from '../assets/images/about/3.webp';
import card4Img from '../assets/images/about/4.webp';

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      {/* Section 1: Hero with Mission Statement */}
      <section className="about-hero">
        <h2 className="about-mission">
          To help businesses grow online with innovative, data-driven,
          <br />
          and affordable digital marketing solutions.
        </h2>

        <div className="about-cards-grid">
          <div className="about-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={card1Img} alt="Card 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={card2Img} alt="Card 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={card3Img} alt="Card 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={card4Img} alt="Card 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="who-we-are">
        <h2 className="section-title bold-title">Who We Are</h2>
        <p className="section-description">
          GravityDots is a digital-first agency focused on creating meaningful, high-impact digital
          experiences. We work at the intersection of strategy, creativity, and technology to help brands
          stand out, perform better, and scale with confidence in an ever-evolving digital landscape.
        </p>

        <h2 className="section-title">About GravityDots</h2>
        <p className="section-description">
          Welcome to GravityDots! Founded by <strong>Keyur Mehta</strong> and <strong>Jatin H. Kateliya</strong> in 2022, GravityDots is a
          results driven digital marketing agency focused on building and scaling brands through
          strategic and performance oriented solutions. We have successfully worked with <strong>103+ clients</strong> across national and international markets, helping businesses establish a strong digital
          presence and achieve measurable growth.
        </p>
        <p className="section-description">
          Our services include branding, website development, social media marketing, performance
          advertising, SEO and influencer marketing, offering end to end solutions tailored to each client's
          goals. We combine creativity with data driven strategies to deliver impactful campaigns and
          long-term results.
        </p>
      </section>

      {/* Section 3: Founders */}
      <section className="founders-section">
        <div className="founders-grid">
          <Tilt className="founder-card" tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="founder-image-placeholder"><img src={jatinimg} alt="Jatin Kateliya" /></div>
            <h3 className="founder-name">Jatin Kateliya</h3>
            <p className="founder-role">Managing Director</p>
          </Tilt>
          <Tilt className="founder-card" tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="founder-image-placeholder"><img src={keyurimg} alt="Keyur Mehta" /></div>
            <h3 className="founder-name">Keyur Mehta</h3>
            <p className="founder-role">Managing Director</p>
          </Tilt>
        </div>

        <div className="mission-vision-grid">
          <div className="mv-card mission">
            <h3 className="mv-title">MISSION</h3>
            <p className="mv-text">
              To help brands unlock their true digital potential through
              smart strategy, creative execution, and performance
              driven solutions that deliver real, measurable results.
            </p>
          </div>
          <div className="mv-card vision">
            <h3 className="mv-title">VISION</h3>
            <p className="mv-text">
              To become a trusted digital growth partner for brands
              worldwide known for clarity, transparency, and consistent
              performance rather than empty promises.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Meet Our Core Team */}
      <section className="team-section">
        <h2 className="team-title">MEET OUR CORE TEAM</h2>
        <p className="team-subtitle">
          Behind GravityDots is a team of strategists, designers, developers, and performance marketers who share one goal.
        </p>

        <div className="team-grid">
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"><img src={ayushImg} alt="Aayush Parekh" /></div>
            <h4 className="team-name">Aayush Parekh</h4>
            <p className="team-role">Sr. Designer</p>
          </Tilt>
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"><img src={bhagirathImg} alt="Bhagirath Baldaniya" /></div>
            <h4 className="team-name">Bhagirath Baldaniya</h4>
            <p className="team-role">Performance Marketer</p>
          </Tilt>
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"><img src={aashishImg} alt="Aashish Kateliya" /></div>
            <h4 className="team-name">Aashish Kateliya</h4>
            <p className="team-role">Brand Manager</p>
          </Tilt>
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"><img src={niyatiImg} alt="Niyati Sojitra" /></div>
            <h4 className="team-name">Niyati Sojitra</h4>
            <p className="team-role">Sales Executive</p>
          </Tilt>
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"><img src={dileepImg} alt="Dileep Vala" /></div>
            <h4 className="team-name">Dileep Vala</h4>
            <p className="team-role">Graphic Designer</p>
          </Tilt>
          <Tilt className="team-member" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
            <div className="team-image-placeholder"></div>
            <h4 className="team-name">Pooja</h4>
            <p className="team-role">SEO Expert</p>
          </Tilt>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="why-choose-section">
        <h2 className="why-title">WHY CHOOSE US ?</h2>

        <div className="why-list">
          <div className="why-item">
            <div className="why-badge">Result-Oriented Approach</div>
            <p className="why-description">
              Every strategy is designed with a clear focus on leads, sales, and measurable ROI.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Data-Driven Decisions</div>
            <p className="why-description">
              We rely on analytics and insights, not assumptions, to optimize performance.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Transparent Reporting</div>
            <p className="why-description">
              Clear, honest, and easy-to-understand reports with real business metrics.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Proven Industry Experience</div>
            <p className="why-description">
              Hands-on experience across FMCG, events, fitness, education, and service-based businesses.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Dedicated Account Support</div>
            <p className="why-description">
              A focused team ensuring timely communication, execution, and support.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">End-to-End Execution</div>
            <p className="why-description">
              From strategy and creatives to ads, tracking, and optimization under one roof.
            </p>
          </div>

          <div className="why-item">
            <div className="why-badge">Scalable Growth Focus</div>
            <p className="why-description">
              Strategies built to grow with your business, not just deliver short-term wins.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
