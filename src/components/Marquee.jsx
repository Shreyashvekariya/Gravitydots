import './Marquee.css'

function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
      </div>
      <div className="marquee-track" aria-hidden="true">
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
        <span>WE ELEVATE YOUR ONLINE PRESENCE</span>
        <span className="star">✦</span>
      </div>
    </div>
  )
}

export default Marquee
