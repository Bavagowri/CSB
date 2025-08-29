import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpeakersCard from '../../components/SpeakersCard/SpeakersCard';
import speakersData from '../../data/speakers.json';
import './CategorySpeakersPage.css';

function CategorySpeakersPage() {
  const { categoryName } = useParams();
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const decodedCategoryName = decodeURIComponent(categoryName);
    const filteredSpeakers = speakersData.filter(
      (speaker) => speaker.category.toLowerCase() === decodedCategoryName.toLowerCase()
    );
    setSpeakers(filteredSpeakers);
  }, [categoryName]);

  return (
    <div className="category-speakers-page">
      <h1 className="category-speakers-title">
        Speakers in {decodeURIComponent(categoryName)}
      </h1>
      {speakers.length > 0 ? (
        <div className="speakers-list">
          {speakers.map((speaker) => (
            <SpeakersCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      ) : (
        <p className="no-speakers">No speakers found in this category.</p>
      )}
    </div>
  );
}

export default CategorySpeakersPage;