import Hero from './Hero'
import HeroImage from './HeroImage'
import Services from './Services'
import Clients from './Clients'
import WhyChooseUs from './WhyChooseUs'
import Reviews from './Reviews'
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
                <Reviews />
                <ConnectUs />
            </div>
        </div>
    )
}

export default Home
