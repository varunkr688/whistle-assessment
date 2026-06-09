import "../styles/Hero.css";
import hero1 from "../assets/hero-image.png";
function Hero() {
  return <div className="hero">
    <div className="hero1">
      <h1 className="head">Invisible Aligners for a dream smile</h1>
      <div className="para">
        <p>Book a Scan and avail a free</p>
        <p>Orthodontist Consult <span>worth ₹1500</span></p>
      </div>
    </div>
    <div className="hero2">
      <img src={hero1} alt="Hero Image" className="hero-image" />
    </div>
  </div>
}

export default Hero;