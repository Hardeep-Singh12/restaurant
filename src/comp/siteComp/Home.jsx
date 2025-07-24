import React from 'react'
import style from './home.module.css'
import ChefSection from '../Home/ChefSection';
import veg4 from './img/veg4.webp'
import veg5 from './img/veg5.avif'
import veg3 from './img/veg3.jpg'
import Sesional from '../Home/Sesional';
import { Link } from 'react-router-dom';
function Home() {
  const currentInspiration = {
    title: "Winter\'s Embrace",
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
    <>
      <div className={style.greting}  >
        <h1 className={style.gretingHeading}>  Good Morning</h1><p className={style.gretingMess}>
          Welcome to Mane - Where Culinary Artistry Meets Genuine Hospitality</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <Link to="/feed" className={style.gretingBtn} style={{ backgroundColor: "rgb(249, 100, 46)" }}>
            explore our menu
          </Link>
          <button className={style.gretingBtn} onClick={() => alert("we will send you an email")}>
            reserve your table
          </button>
        </div>      </div>
      <Sesional />

      <div className={style.chefSection}>
        <h1 className={style.chefSecHeading}>Chef's Current Inspiration</h1>
        <p className={style.chefSecSubHead}> Discover the seasonal story behind our current menu, from ingredient selection to culinary philosophy
        </p>
        <ChefSection chef={currentInspiration.chef} currentInspiration={currentInspiration} />
      </div>

    </>
  )
}

export default Home