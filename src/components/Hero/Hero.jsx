import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      {/* <!-- HERO SECTION --> */}
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>Wecome To My WebPage</h1>
            <p>
              learn fullstack dev, Web Design, UI/UX, Cybersecurity, Data
              Analytics and other digital skills
              <button><Link to="/LogIn">Get Started</Link></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
