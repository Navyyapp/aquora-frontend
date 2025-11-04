import React from "react";
import "./About.css";
import aboutimg1 from "../assets/aboutimg1.jpeg";
import aboutimg2 from "../assets/aboutimg2.jpeg";

export default function About() {
  return (
    <div className="about-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="about-hero">
        <h1>About AQUORA EXPORTS & IMPORTS</h1>
        <p>
          Delivering the best aquaculture and seafood products to global markets
          with world-class standards and sustainable practices.
        </p>
      </section>

      {/* ---------- MAIN CONTENT SECTION ---------- */}
      <section className="about-content">
        {/* Left Image */}
        <div className="about-img">
          <img src={aboutimg1} alt="About Aquora Exports" />
        </div>

        {/* Right Text */}
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            To be recognized globally as a reliable exporter and importer of
            premium seafood and aquaculture products, ensuring sustainability
            and customer satisfaction at every step.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We maintain stringent quality control measures and source
            responsibly to provide safe, fresh, and high-grade seafood products
            to our partners.
          </p>
        </div>
      </section>

      {/* ---------- SECOND CONTENT BLOCK ---------- */}
      <section className="about-content reverse">
          {/* Left Image */}
        <div className="about-img">
          <img src={aboutimg2} alt="Aquora Global Export" />
        </div>
        {/* Right Text */}
        <div className="about-text">
          <h2>Global Presence</h2>
          <p>
            Aquora Exports & Imports proudly connects the finest seafood
            suppliers with international buyers, maintaining freshness and
            transparency throughout the supply chain.
          </p>
        </div>

      
      </section>
    </div>
  );
}
