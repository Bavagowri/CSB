import './SpeakersCard.css';
import { Link } from 'react-router-dom';

function SpeakersCard({ speaker }) {
  return (
    <Link to={`/speaker/${speaker.id}`} className="speakers-card-link">
      <div className="speakers-card">
        <img src={speaker.imageUrl} alt={speaker.name} className="speaker-image" />
        <div className="speaker-content">
          <span className="exclusive-tag">WSB EXCLUSIVE SPEAKER</span>
          <h2 className="speaker-name">{speaker.name}</h2>
          <p className="speaker-description">{speaker.description}</p>
          <p className="speaker-title">{speaker.category} | {speaker.subcategory}</p>
          <p className="speaker-fee">Over ${speaker.fee || '70,000'}</p>
        </div>
      </div>
    </Link>
  );
}

export default SpeakersCard;