import React from 'react';
import './FeaturedSpeakers.css';
import SpeakersCard from '../SpeakersCard/SpeakersCard';
import speakersData from '../../data/speakers.json';
import { Link } from 'react-router-dom';

function FeaturedSpeakers() {
  // Limit to 3 categories
  const displayedSpeakers = Array.isArray(speakersData)
    ? speakersData.slice(0, 3)
    : [speakersData];

  return (
    <section className="featured-speakers-section">
        <h2 className='feature-Speakers-title'>Explore Our Speakers</h2>
        <div className="featured-speakers-list">
          {displayedSpeakers.map((speaker) => (
          <SpeakersCard key={speaker.id} speaker={speaker} />
        ))}
        </div>
        <div className='featured-Speakers-view-all'>
           {/* <button className="featured-Speakers-view-all-btn">+ View All Speakers</button> */}
           <Link to={'/speakers'} className="featured-Speakers-view-all-btn">
              + View All Speakers
           </Link>
        </div>
      </section>
  );
}

export default FeaturedSpeakers;