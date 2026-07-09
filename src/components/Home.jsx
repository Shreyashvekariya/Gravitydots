import Hero from './Hero'
import HeroImage from './HeroImage'
import Services from './Services'
import Clients from './Clients'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import ConnectUs from './ConnectUs'

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <div className="rest-of-sections">
                <HeroImage />
                <Services />
                <Clients />
                <WhyChooseUs />
                <Testimonials />
                <ConnectUs />
            </div>
        </div>
    )
}

export default Home
