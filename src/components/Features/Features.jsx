import React from 'react';
import './Features.css';
import speakerImage from '../../assets/Speaker_img1.png'

function Features() {
  const features = [
    { title: 'Speaker 1', description: 'Create designs effortlessly with our intuitive editor.' },
    { title: 'Speaker 2', description: 'Choose from a wide range of professional templates.' },
    { title: 'Speaker 3', description: 'Work with your team seamlessly, anywhere, anytime.' },
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={speakerImage} alt='img' className='feature-img'/>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;