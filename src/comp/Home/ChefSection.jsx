import React from 'react'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import "./chef.css"



function ChefSection({ chef, currentInspiration }) {
  return (
    <div className="chef-wrapper">
      <div className="chef-details">
        <span className="chef-name">
          {chef.name}
          <p className="chef-title">{chef.title}</p>
          <p className="chef-exp">{chef.experience}</p>
        </span>

        <h3 className="inspiration-title">{currentInspiration.title}</h3>
        <p className="inspiration-sub">{currentInspiration.subtitle}</p>
        <p className="inspiration-desc">{currentInspiration.description}</p>

        <Card className="technique-card">
          <p className="technique-head">Technique Spotlight</p>
          <p className="technique-sub">{currentInspiration.preparationInsight.technique}</p>
          <p className="technique-desc">{currentInspiration.preparationInsight.description}</p>
        </Card>
      </div>

      <div className="ingredients-section">
        <h2>Featured Seasonal Ingredients</h2>
        {currentInspiration.featuredIngredients.map((ingredient, index) => (
          <div key={index} className="ingredient-card">
            <img
              className="ingredient-img"
              src={ingredient.image}
              alt={ingredient.name}
            />
            <div className="ingredient-text">
              <p className="ingredient-source">Source: {ingredient.source}</p>
              <p className="ingredient-desc">{ingredient.description}</p>
            </div>
          </div>
        ))}

        <div className="view-menu">
          <h4>Experience the Season</h4>
          <p>Taste these inspired creations in our current winter menu</p>
          <Link to="/feed" className="menu-link">View Winter Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default ChefSection