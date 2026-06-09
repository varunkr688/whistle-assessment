import "../styles/Footer.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Book a Free Scan</li>
            <li>How it Works</li>
            <li>Range of Aligners</li>
            <li>Aligners vs Braces</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get In Touch Now</h3>
          <p>📞 011-6932-8350</p>
          <p>✉️ support@whistle.in</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us On</h3>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
          </div>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;