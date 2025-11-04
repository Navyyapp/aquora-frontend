import React, { useEffect, useState } from "react";
import "./Home.css";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import orderImg from "../assets/order.png";
import catchingImg from "../assets/catching.jpg";
import packingImg from "../assets/packing.jpg";
import deliveryImg from "../assets/delivery.jpg";
import mealImg from "../assets/meal.jpg";
export default function Home() {

 
  
    const images = [product1, product2, product3, product4, product5, product6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // scroll every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <div className="home">
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h2 className="hero-content-head">Fresh. Safe. Responsible. -From Shore to Door</h2>
                    <a href="/products" className="hero-btn">
                        Explore Menu
                    </a>
                </div>
            </section>
            {/* ---------------- SCROLL CAROUSEL ---------------- */}
            <section className="scroll-slider">
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((img, index) => (
                        <div className="slide" key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>


            {/* Scrolling Info Bar */}
            <div className="scrolling-banner">
                <div className="scrolling-text">
                    Shore - to - Door  |  Fresh Water Seafood  |  Delivery in 24 Hours  |  Minimal Human Contact  |
                </div>
            </div>

      


            {/* SEAFOOD CATCHING DAYS + MISSION */}
            <section className="catching-mission">
                <div className="catching-box">
                    <h3>SEAFOOD CATCHING DAYS</h3>
                    <p>We catch seafood on the following days & deliver within 24 hrs.</p>
                    <ul>
                        <li>
                            <strong>Delivery On:</strong> Every <b>Sunday</b> & <b>Wednesday</b>
                        </li>
                        <li>
                            Based on pre-order, catching is done on <b>Tuesday</b> & <b>Saturday</b> in Visakhapatnam.
                        </li>
                    </ul>
                </div>

                <div className="mission-box">
                    <h3>Our Mission</h3>
                    <h4>“SHORE - TO - DOOR”</h4>
                    <p>
                        Our objective is to supply fresh water seafood directly from shore
                        to door — ensuring top quality and freshness every time.
                    </p>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="how-we-work" id="how-we-work">
                <h2>HOW WE WORK</h2>
                <div className="steps">
                    <div className="step">
                        <img className="step-images" src={orderImg} alt="Order" />
                        <h4>Order</h4>
                        <p>Check the available seafood online and place your order easily.</p>
                    </div>
                    <div className="step">
                        <img className="step-images" src={catchingImg} alt="Catching" />
                        <h4>Catching</h4>
                        <p>Freshly caught seafood straight from our dedicated fishermen.</p>
                    </div>
                    <div className="step">
                        <img className="step-images" src={packingImg} alt="Packing" />
                        <h4>Packing</h4>
                        <p>Cleaned and packed under hygienic, temperature-controlled units.</p>
                    </div>
                    <div className="step">
                        <img className="step-images" src={deliveryImg} alt="Delivery" />
                        <h4>Delivery</h4>
                        <p>Timely doorstep delivery with freshness guaranteed.</p>
                    </div>
                    <div className="step">
                        <img className="step-images" src={mealImg} alt="Enjoy" />
                        <h4>Enjoy Your Meal</h4>
                        <p>Cook and enjoy the healthiest seafood — directly from the shore!</p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="why-choose-us">
                <h2>WHY CHOOSE US</h2>
                <div className="choose-boxes">
                    <div className="choose-card">
                        <div className="icon green">🍃</div>
                        <h4>IT IS HEALTHY</h4>
                        <p>
                            We ensure all seafood is natural, chemical-free, and sustainably
                            sourced — for your family’s health and well-being.
                        </p>
                    </div>
                    <div className="choose-card">
                        <div className="icon blue">🛡️</div>
                        <h4>IT IS SAFE</h4>
                        <p>
                            Handled with utmost care under cold-chain logistics to maintain
                            freshness and safety until it reaches your home.
                        </p>
                    </div>
                    <div className="choose-card">
                        <div className="icon red">❤️</div>
                        <h4>IT IS RESPONSIBLE</h4>
                        <p>
                            We promote responsible aquaculture practices that protect
                            biodiversity and support sustainable livelihoods.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
