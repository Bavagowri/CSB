import React from 'react';
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import speakersData from '../../data/speakers.json';
import './SpeakersPage.css';



function SpeakersPage() {
  return (
    <div className="speakers-page">
      <h1>Speakers</h1>
      <div className="speakers-list">
        {speakersData.map((speaker) => (
          <SpeakersCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}

export default SpeakersPage;