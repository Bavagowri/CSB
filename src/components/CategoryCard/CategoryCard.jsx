import './CategoryCard.css';
import { Link } from 'react-router-dom';


function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.imageUrl} alt={category.name} className="category-image" />
      <div className="category-content">
        <h2 className="category-title">{category.name}</h2>
        <p className="category-description">{category.description}</p>
        {/* {category.subcategories && category.subcategories.length > 0 && (
          <div className="subcategories">
            <h3>Subcategories</h3>
            <ul className="subcategory-list">
              {category.subcategories.map((subcategory, index) => (
                <li key={index} className="subcategory-item">
                  <h4>{subcategory.name}</h4>
                  <p>{subcategory.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        <div className='category-content-right'>
          <Link
          to={`/category-speakers/${encodeURIComponent(category.name)}`}
          className="categories-btn"
        >
            View Speakers
          </Link>
        </div>
        {/* <button className="categories-btn">View Speakers</button> */}
      </div>
    </div>
  );
}

export default CategoryCard;