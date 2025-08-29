import React from 'react';
import './WhyChooseUs.css';
import { FaGlobe, FaHandshake, FaUsers, FaHandsHelping } from 'react-icons/fa';

function WhyChooseUs() {
  const features = [
    { title: 'Global Reach', icon: <FaGlobe/> },
    { title: 'Curated Matchmaking', icon: <FaHandshake/> },
    { title: 'Diverse Perspectives', icon: <FaUsers/> },
    { title: 'Full Support', icon: <FaHandsHelping/> },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why Choose Us?</h2>
        <div className="why-choose-us-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-choose-us-card">
              <div className="why-choose-us-icon">{feature.icon}</div>
              <h3 className="why-choose-us-card-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;