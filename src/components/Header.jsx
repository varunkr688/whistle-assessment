import "../styles/Header.css";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";

function Header() {
  return (
    <header >
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Whistle Logo" className="logo" />
        </div>

        <button className="call-btn">
          <img src={phone} alt="Phone" className="phone-icon" />
        </button>
      </div>
      <div className="line">Starting at&nbsp;<span className="old-price"> Rs 69,999</span>Rs 47,999. Hurry! Offer ends soon.</div>
    </header>
  );
}

export default Header;