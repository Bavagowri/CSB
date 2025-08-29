import React from 'react';
import BecomeASpeaker from '../../components/BecomeASpeaker/BecomeASpeaker';
import './FutureSpeaker.css'

const FutureSpeaker = () => {
  return (
    <div className='fs-container'>
        <div className="fs-pg-container">
        <h1 className="fs-title">Join Us as a Future Speaker</h1>
        <div className="fs-text">
          <p className="fs-pg-text">
            CSB is the world’s largest talent agency specializing in corporate speaking events. We represent talent around the world and across the content spectrum – business, sports, politics, entertainment, and more – connecting our speakers with clients looking for unique, valuable experiences.
          </p>
          <p className="fs-pg-text">
            We believe in the transformative power of real-world human connections and know that when people connect, big things happen. If you are looking to become a speaker with us and share your message with audiences around the world, fill out the below!          </p>
          <p className="fs-pg-text">
            We look forward to carefully reviewing your materials and appreciate your time in sharing your content and expertise. We will reach out if we identify a promising opportunity for collaboration with our team.          </p>
        </div>
      </div>

      <div className="fs-form-section">
        <div className="fs-form-placeholder">
          <BecomeASpeaker />
        </div>
      </div>
    </div>
  )
}

export default FutureSpeaker
