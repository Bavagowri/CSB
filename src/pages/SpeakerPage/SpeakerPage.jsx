import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import speakersData from '../../data/speakers.json';
import './SpeakerPage.css';
import { Link } from 'react-router-dom';
import RequestAvailabilityForm from '../../components/RequestAvailabilityForm/RequestAvailabilityForm';

function SpeakerPage() {
  const { id } = useParams();
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const foundSpeaker = speakersData.find((s) => s.id === parseInt(id));
    setSpeaker(foundSpeaker);
  }, [id]);

  if (!speaker) {
    return <div className="speaker-page">Speaker not found.</div>;
  }

  return (
    <div className="speaker-page">
      <div className="speaker-pg-details">
        <img src={speaker.imageUrl} alt={speaker.name} className="speaker-pg-image" />
        <div className="speaker-pg-info">
          <h1 className="speaker-pg-name">{speaker.name}</h1>
          <p className="speaker-pg-description">{speaker.description}</p>
          <div className='ra-btn'>
            <Link to={'/request-availability'} className="request-availability-btn">
                Request Availability
            </Link>
          </div>
          <p className="speaker-pg-title">{speaker.category} | {speaker.subcategory}</p>
          <p className="speaker-pg-fee">Over ${speaker.fee || '70,000'}</p>
        </div>
      </div>
      <div className='speaker-pg-content'>
        <h1 className="sc-heading">Biography</h1>
        <h1 className="sc-heading">Why Your Audience Will Benefit from {speaker.name}:</h1>
        <h1 className="sc-heading">Featured Videos of {speaker.name}</h1>
        <h1 className="sc-heading">{speaker.name} Speech Topics</h1>
        <h1 className="sc-heading">{speaker.name} Topics & Types</h1>
        <RequestAvailabilityForm />


      </div>
    </div>
  );
}

export default SpeakerPage;