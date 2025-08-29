import React from 'react';
import Hero from '../../components/Hero/Hero.jsx';
import Features from '../../components/Features/Features';
import FeaturedSpeakers from '../../components/FeaturedSpeakers/FeaturedSpeakers';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs.jsx';
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe.jsx';
import JoinUs from '../../components/JoinUs/JoinUs.jsx';

import CategoryCard from '../../components/CategoryCard/CategoryCard';
import categoriesData from '../../data/category.json';
import { Link } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
    // Limit to 3 categories
  const displayedCategories = Array.isArray(categoriesData)
    ? categoriesData.slice(0, 3)
    : [categoriesData];

  return (
    <>
      <Hero />
      <WhoAreWe />
      <section className="categories-section">
        <h2 className='categories-home-heading'>Explore Our Categories</h2>
        <div className="category-list">
          {displayedCategories.map((category, index) => (
            <div key={index} className="category-card-wrapper">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        <div className='category-view-all'>
          <Link to={'/categories'} className="categories-view-all-btn">
            + View All Topics
          </Link>
        </div>
      </section>
      <WhyChooseUs />
      <FeaturedSpeakers />
      {/* <WhyChooseUs /> */}
      <JoinUs />
    </>
  )
}

export default HomePage
