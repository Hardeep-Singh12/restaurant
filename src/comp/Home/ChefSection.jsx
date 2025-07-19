import React from 'react'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';



function ChefSection({ chef, currentInspiration }) {
  return (
    <div style={{ display: "flex" ,width:"100%",justifyContent:"center" }}>
      <div style={{ alignItems: "center", justifyContent: "cente", height: "500px", width: "500px", fontFamily: 'cursive' }}>
        <span style={{ fontFamily: "initial", fontSize: "34px" }}>
          {chef.name}
          <p style={{ fontSize: "18px", color: " rgb(143, 136, 136)" }}>{chef.title} <br /></p> <p style={{ color: "rgb(196, 156, 24)", fontSize: "20px" }}>{chef.experience}</p>
        </span>


        <h3 style={{ fontFamily: "sans-serif", paddingBottom: "10px", paddingTop: "20px", fontSize: "26px", }}>{currentInspiration.title}</h3><p>
          {currentInspiration.subtitle}</p>
        <p style={{fontSize:"18px"}}>{currentInspiration.description} </p>

        <Card style={{ backgroundColor: "white", fontFamily: "sans-serif", marginTop: "20px", padding: "20px" }}>
          <p className="datahead" style={{ fontSize: "20px", fontWeight: "bold" }}>Technique Spotlight</p> <p className="subhad" style={{ marginBottom: "10px", color: "rgb(143, 136, 136) " }}>Slow Roasting & Spice Infusion</p> <p className='data' style={{ fontSize: "17px" }}>We roast our root vegetables at precisely 375°F for 45 minutes, allowing their natural sugars to caramelize while maintaining their texture. The spices are toasted whole before grinding to release their essential oils.</p>
        </Card>
      </div>

      <div  className='Ingredients' style={{margin:"12px"}}> <h2>Featured Seasonal Ingredients</h2>
       {currentInspiration.featuredIngredients.map((ingredient, index) => (
        <div key={index} style={{display:"flex", border:"2px solid black", margin:"5px",fontSize:"20px"}} >
          <div>
              <img style={{ width: "100px", height: "100px", margin: "8px", borderRadius: "80px"}}
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-full object-cover"
              />
      </div>
      <div>
              {/* <h6 className="font-semibold text-primary mb-1">
                {ingredient.name}
              </h6> */}
              <p className="text-sm text-accent font-medium mb-2">
                Source: {ingredient.source}
              </p>
              <p className="text-sm text-text-secondary">
                {ingredient.description}
              </p>
        </div>
        </div>
      ))}
       <div className='viewmenu' style={{fontSize:"24px" ,padding:"20px",textAlign:"center", border:"2px solid black",backgroundColor:"rgb(44, 26, 16)", color:"white"}}><h4 style={{fontSize:"22px",margin:"2px"}}>Experience the Season </h4><p style={{margin:"20px"}}>Taste these inspired creations in our current winter menu<br/></p>
        <Link to="/feed" style={{fontSize:"18px",padding:"10px",marginTop:"12px" ,backgroundColor:"rgb(249, 100, 46)",color:"white"}}>view Wintr menu</Link>
      </div>
      </div>



    </div>

  )
}

export default ChefSection