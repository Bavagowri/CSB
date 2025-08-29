import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2 className="hero-title">In the Beginning was the Word, 
              & the Word was with God, 
              & the Word was God
        </h2>
        <p className="hero-description">Commonwealth Speakers bureau Voices that Move Nations.<br/> Stories that Shape the Commonwealth.</p>
        {/* <button className="hero-button">Find Speakers</button> */}
        <Link to={'/speakers'} className="hero-button">
            Find Speakers
        </Link>
        <Link to={'/become-a-speaker'} className="hero-button2">
            Become a Speaker
        </Link>
      </div>
    </section>
  );
}

export default Hero;