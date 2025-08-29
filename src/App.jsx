import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SpeakersPage from './pages/SpeakersPage/SpeakersPage.jsx';
import CategoriesPage from './pages/CategoryPage/CategoryPage.jsx';
import Home from './pages/HomePage/HomePage.jsx';
import CategorySpeakersPage from './pages/CategorySpeakersPage/CategorySpeakersPage';
import SpeakerPage from './pages/SpeakerPage/SpeakerPage.jsx'

import './App.css';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage.jsx';
import CustomProposal from './pages/CustomProposalPage/CustomProposalPage.jsx';
import FutureSpeaker from './pages/FutureSpeaker/FutureSpeaker.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/speaker/:id" element={<SpeakerPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/custom-proposal" element={<CustomProposal />} />
        <Route path="/category-speakers/:categoryName" element={<CategorySpeakersPage />} />
        <Route path='/custom-proposal' element={<CustomProposal />} />
        <Route path='become-a-speaker' element={<FutureSpeaker />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;