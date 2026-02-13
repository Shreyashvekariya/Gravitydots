import './Clients.css'
import client1 from '../assets/Clients/1.png'
import client2 from '../assets/Clients/2.png'
import client3 from '../assets/Clients/3.png'

function Clients() {
  const clientLogos = [
    { src: client1, alt: 'Client 1' },
    { src: client2, alt: 'Client 2' },
    { src: client3, alt: 'Client 3' },
  ]

  return (
    <section className="clients">
      <div className="clients-grid">
        {clientLogos.map((client, index) => (
          <div key={index} className="client-logo">
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
