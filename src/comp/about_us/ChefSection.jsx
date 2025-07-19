import React, { useState } from 'react'
import food2 from "../siteComp/img/food2.jpg"
import food1 from "../siteComp/img/food1.jpg"
import restrunt from '../siteComp/img/restrunt.jpg';
import "./aboutUS.css"
import { CiPaperplane } from "react-icons/ci";
import { CiLollipop } from "react-icons/ci"; import { CiStar } from "react-icons/ci";


function ChefSection() {
  let info2018 = {
    heading: "Global Inspiration",
    locition: "Culinary Journey Across Asia",
    info: "A transformative year spent traveling through Japan, Thailand, Vietnam, and India opened my eyes to the incredible diversity of flavors and techniques around the world. I studied under local masters, learned traditional fermentation methods, and discovered how different cultures approach the same fundamental goal: creating food that nourishes both body and soul. This journey taught me that great cooking transcends borders and that the best dishes often come from understanding and respecting different culinary traditions while finding ways to harmoniously blend them with my own style.",
    achivment1: "Spice Blending Expertise",
    achivment2: "Thai Cooking Mastery",
    img: food1
  }
  let info2020 = {
    heading: "Menuuu is Born",
    locition: "Opening Night",
    info: "After years of dreaming, planning, and preparing, Menuuu opened its doors with a vision to create a restaurant that would honor culinary traditions while embracing innovation. The name 'Menuuu' represents the flowing, dynamic nature of creativity – like a horse's Menuuu in the wind, our cuisine moves with grace, power, and natural beauty. Opening night was both terrifying and exhilarating. Every dish represented years of learning, every service was a chance to share our passion with guests who would become part of our extended family. From that first night, we knew we had created something special..",
    achivment1: "First 100 Guests",
    achivment2: "Local Media Recognition", img: food2

  }
  let info2025 = {
    heading: "Culinary Recognition",
    locition: "Menuuu  spaCulinary Artistry",
    info: "Today, Menuuu stands as a testament to the power of passion, dedication, and continuous learning. We've been honored with numerous awards, but our greatest achievement is the community we've built – the team that shares our vision, the suppliers who trust us with their finest ingredients, and the guests who return again and again. Every day brings new opportunities to create, to surprise, and to share the joy of exceptional food. Our journey continues, always evolving, always growing, always striving to create experiences that linger in memory long after the last bite.",
    achivment1: "James Beard Nomination",
    achivment2: "Community Leader Award", img: restrunt

  }


  let [info, setInfo] = useState(info2018)
  const [selectedYear, setSelectedYear] = useState('2015');




  return (
    <>
      <div className='container'>
        <h1 className='mainHeading'>The Cheaf's Joureny</h1>
        <p className='subHead'> From classical training to innovative cuisine, discover the path that led to Menuuu's unique culinary philosophy.</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className='btnAll'
          onClick={() => {
            setInfo(info2018);
            setSelectedYear('2015');
          }}
          style={{
            backgroundColor: selectedYear === '2015' ? 'rgb(248, 79, 17)' : 'white',
            color: selectedYear === '2015' ? 'white' : 'black'
          }}
        >
          2015
        </button>
        

        <button
          className='btnAll'
          onClick={() => {
            setInfo(info2020);
            setSelectedYear('2020');
          }}
          style={{
            backgroundColor: selectedYear === '2020' ? 'rgb(248, 79, 17)' : 'white',
            color: selectedYear === '2020' ? 'white' : 'black'
          }}
        >
          2020
        </button>

        <button
          className='btnAll'
          onClick={() => {
            setInfo(info2025);
            setSelectedYear('2025');
          }}
          style={{
            backgroundColor: selectedYear === '2025' ? 'rgb(248, 79, 17)' : 'white',
            color: selectedYear === '2025' ? 'white' : 'black'
          }}
        >
          2025
        </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "80px 5px", padding: "20px", borderRadius: "8px", fontSize: "23px" }}>
          <span className='infoContainer' style={{ marginRight: "20px", padding: "20px" }}>
            <h2 ><CiStar style={{ position: "relative", top: "2px", color: "rgb(248, 79, 17) " }} />{info.heading}</h2>
            <h4 style={{ paddingBottom: "20px" }}><CiLollipop />{info.locition}</h4>
            <p>{info.info}</p>
            <ul style={{ listStyle: "none", marginTop: "60px" }}>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.achivment1}</li>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.achivment2}</li>
            </ul>
          </span>
          <span >  <img src={info.img} alt="don't" style={{ width: "400px", height: "380px", margin: "10px", borderRadius: "80px", boxShadow: "2px  2px 20px 20px rgb(176, 175, 174) " }} /> </span>
        </div>
      </div>
    </>)
}

export default ChefSection