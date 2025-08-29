import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import categoriesData from '../../data/category.json';
import './CategoryPage.css';

function CategoryPage() {
  return (
    <div className="category-page">
      <h2>Speaker Categories</h2>
      <div className="category-list">
        {Array.isArray(categoriesData) ? (
          categoriesData.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))
        ) : (
          <CategoryCard category={categoriesData} />
        )}
      </div>
    </div>
  );
}

export default CategoryPage;