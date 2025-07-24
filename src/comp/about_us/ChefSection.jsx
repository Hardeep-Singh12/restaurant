import React, { useState } from 'react'
import food2 from "../siteComp/img/food2.jpg"
import food1 from "../siteComp/img/food1.jpg"
import restrunt from '../siteComp/img/restrunt.jpg';
import "./aboutUS.css"
import { CiPaperplane } from "react-icons/ci";
import { CiLollipop } from "react-icons/ci"; import { CiStar } from "react-icons/ci";



function ChefSection() {
  const info2018 = {
    heading: 'Global Inspiration',
    locition: 'Culinary Journey Across Asia',
    info: 'A transformative year spent traveling through Japan, Thailand, Vietnam, and India opened my eyes to the incredible diversity of flavors and techniques around the world...',
    achivment1: 'Spice Blending Expertise',
    achivment2: 'Thai Cooking Mastery',
    img: food1,
  };

  const info2020 = {
    heading: 'Menuuu is Born',
    locition: 'Opening Night',
    info: "After years of dreaming, planning, and preparing, Menuuu opened its doors with a vision to create a restaurant that would honor culinary traditions while embracing innovation...",
    achivment1: 'First 100 Guests',
    achivment2: 'Local Media Recognition',
    img: food2,
  };

  const info2025 = {
    heading: 'Culinary Recognition',
    locition: 'Menuuu Culinary Artistry',
    info: "Today, Menuuu stands as a testament to the power of passion, dedication, and continuous learning...",
    achivment1: 'James Beard Nomination',
    achivment2: 'Community Leader Award',
    img: restrunt,
  };

  const [info, setInfo] = useState(info2018);
  const [selectedYear, setSelectedYear] = useState('2015');

  return (
    <div className="chef-container">
      <h1 className="chef-heading">The Chef's Journey</h1>
      <p className="chef-subheading">
        From classical training to innovative cuisine, discover the path that led to Menuuu's unique culinary philosophy.
      </p>

      <div className="year-buttons">
        {[
          { year: '2015', data: info2018 },
          { year: '2020', data: info2020 },
          { year: '2025', data: info2025 },
        ].map(({ year, data }) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? 'active' : ''}`}
            onClick={() => {
              setInfo(data);
              setSelectedYear(year);
            }}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="chef-content">
        <div className="chef-info">
          <h2>
            <CiStar className="icon" />
            {info.heading}
          </h2>
          <h4>
            <CiLollipop className="icon" />
            {info.locition}
          </h4>
          <p>{info.info}</p>
          <ul className="achievements">
            <li>
              <CiPaperplane className="icon" />
              {info.achivment1}
            </li>
            <li>
              <CiPaperplane className="icon" />
              {info.achivment2}
            </li>
          </ul>
        </div>
        <div className="chef-image">
          <img src={info.img} alt="chef-story" />
        </div>
      </div>
    </div>
  );
}


export default ChefSection