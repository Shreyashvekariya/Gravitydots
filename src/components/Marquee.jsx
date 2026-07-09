import './Marquee.css'

function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <span>MORE LEADS</span>
        <span className="star">✦</span>
        <span>MORE SALES</span>
        <span className="star">✦</span>
        <span>MORE GROWTH</span>
        <span className="star">✦</span>
        <span>MORE LEADS</span>
        <span className="star">✦</span>
      </div>
      <div className="marquee-track" aria-hidden="true">
        <span>MORE SALES</span>
        <span className="star">✦</span>
        <span>MORE GROWTH</span>
        <span className="star">✦</span>
        <span>MORE LEADS</span>
        <span className="star">✦</span>
        <span>MORE SALES</span>
        <span className="star">✦</span>
      </div>
    </div>
  )
}

export default Marquee
