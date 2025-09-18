import styles from './ChefSection.module.css'
import veg4 from '../siteComp/img/veg4.webp'
import veg5 from '../siteComp/img/veg5.avif'
import veg3 from '../siteComp/img/veg3.jpg'
import { Link } from 'react-router-dom';



function ChefSection() {
  const currentInspiration = {
    title: "Winter's Embrace",
    subtitle: "Seasonal Focus: Root Vegetables & Warming Spices",
    description: `This season, I'm deeply inspired by the earthy richness of winter root vegetables and the warming embrace of traditional spices. Our menu celebrates the natural sweetness of roasted parsnips, the robust flavor of heritage carrots, and the comforting warmth of cardamom and cinnamon.


    Each dish tells the story of winter's bounty, transformed through classical French techniques with a modern sensibility. We're sourcing directly from local farms that practice sustainable agriculture, ensuring every ingredient carries the authentic taste of the season.`,
    chef: {
      name: "Chef Marcus Beaumont",
      title: "Executive Chef & Culinary Director",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      experience: "15+ years"
    },
    featuredIngredients: [
      {
        name: "Heritage Carrots",
        source: "Meadowbrook Farm",
        description: "Purple, yellow, and orange varieties with intense flavor",
        image: veg4
      },
      {
        name: "Cardamom",
        source: "Spice Route Imports",
        description: "Green cardamom pods from sustainable Kerala farms",
        image: veg3
      },
      {
        name: "Winter Parsnips",
        source: "Valley View Organics",
        description: "Sweet, earthy parsnips perfect for roasting and purees",
        image: veg5
      }
    ],
    preparationInsight: {
      technique: "Slow Roasting & Spice Infusion",
      description: "We roast our root vegetables at precisely 375°F for 45 minutes, allowing their natural sugars to caramelize while maintaining their texture. The spices are toasted whole before grinding to release their essential oils.",
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.chefInfo}>
        <span className={styles.chefName}>
          {currentInspiration.chef.name}
          <p className={styles.chefTitle}>{currentInspiration.chef.title}</p>
          <p className={styles.chefExperience}>{currentInspiration.chef.experience}</p>
        </span>

        <h3 className={styles.currentInspirationTitle}>{currentInspiration.title}</h3>
        <p>{currentInspiration.subtitle}</p>
        <p className={styles.currentInspirationDesc}>{currentInspiration.description}</p>

        <div className={styles.techniqueSpotlight}>
          <p className="datahead">Technique Spotlight</p>
          <p className="subhad">Slow Roasting & Spice Infusion</p>
          <p className='data'>
            We roast our root vegetables at precisely 375°F for 45 minutes, allowing their natural sugars
            to caramelize while maintaining their texture. The spices are toasted whole before grinding
            to release their essential oils.
          </p>
        </div>
      </div>

      <div className={styles.ingredientsSection}>
        <h2>Featured Seasonal Ingredients</h2>
        {currentInspiration.featuredIngredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientCard}>
            <img
              className={styles.ingredientImage}
              src={ingredient.image}
              alt={ingredient.name}
            />
            <div>
              <p>Source: {ingredient.source}</p>
              <p>{ingredient.description}</p>
            </div>
          </div>
        ))}

        <div className={styles.viewMenu}>
          <h4>Experience the Season</h4>
          <p>Taste these inspired creations in our current winter menu</p>
          <Link to="/main/Feed" className={styles.viewMenuLink}>View Winter Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default ChefSection