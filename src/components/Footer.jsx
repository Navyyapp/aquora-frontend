import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-about">
          <h3>AQUORA EXPORTS & IMPORTS PRIVATE LIMITED</h3>
          <p>
            Dedicated to delivering premium seafood and aquaculture products
            worldwide with excellence, reliability, and quality.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:aquoraexp@gmail.com">aquoraexp@gmail.com</a></p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>
            Address: AK Business Centre, D.No:47-11-1/8, Eswar Arcade, 1st Floor,
            Dwarakanagar, 1st Line, Opp. Shri Rama Chits Fund, Near Reliance Smart Bazar,
            Visakhapatnam-530016, AP, India.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} AQUORA EXPORTS & IMPORTS PRIVATE LIMITED. All Rights Reserved.
      </div>
    </footer>
  );
}
