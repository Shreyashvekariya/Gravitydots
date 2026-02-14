import './Clients.css'
import client1 from '../assets/Clients/1.png'
import client2 from '../assets/Clients/2.png'
import client3 from '../assets/Clients/3.png'
import client4 from '../assets/Clients/4.png'
import client5 from '../assets/Clients/5.png'
import client6 from '../assets/Clients/6.png'
import client7 from '../assets/Clients/7.png'
import client8 from '../assets/Clients/8.png'
import client9 from '../assets/Clients/9.png'
import client10 from '../assets/Clients/10.png'
import client11 from '../assets/Clients/11.png'
import client12 from '../assets/Clients/12.png'
import client13 from '../assets/Clients/13.png'
import client14 from '../assets/Clients/14.png'
import client15 from '../assets/Clients/15.png'
import client16 from '../assets/Clients/16.png'
import client17 from '../assets/Clients/17.png'
import client18 from '../assets/Clients/18.png'
import client19 from '../assets/Clients/19.png'
import client20 from '../assets/Clients/20.png'
import client21 from '../assets/Clients/21.png'

function Clients() {
  const firstRowLogos = [
    { src: client1, alt: 'Client 1' },
    { src: client2, alt: 'Client 2' },
    { src: client3, alt: 'Client 3' },
    { src: client4, alt: 'Client 4' },
    { src: client5, alt: 'Client 5' },
    { src: client6, alt: 'Client 6' },
    { src: client7, alt: 'Client 7' },
    { src: client8, alt: 'Client 8' },
    { src: client9, alt: 'Client 9' },
    { src: client10, alt: 'Client 10' },
  ]

  const secondRowLogos = [
    { src: client11, alt: 'Client 11' },
    { src: client12, alt: 'Client 12' },
    { src: client13, alt: 'Client 13' },
    { src: client14, alt: 'Client 14' },
    { src: client15, alt: 'Client 15' },
    { src: client16, alt: 'Client 16' },
    { src: client17, alt: 'Client 17' },
    { src: client18, alt: 'Client 18' },
    { src: client19, alt: 'Client 19' },
    { src: client20, alt: 'Client 20' },
    { src: client21, alt: 'Client 21' },
  ]

  return (
    <section className="clients">
      <div className="marquee-container">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {[...firstRowLogos, ...firstRowLogos].map((client, index) => (
              <div key={index} className="client-logo">
                <img src={client.src} alt={client.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee-right">
          <div className="marquee-content">
            {[...secondRowLogos, ...secondRowLogos].map((client, index) => (
              <div key={index} className="client-logo">
                <img src={client.src} alt={client.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
