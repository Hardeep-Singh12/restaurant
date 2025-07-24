import React, { useState } from 'react'
import "./aboutUS.css"
import { CiStar, CiLollipop, CiPaperplane } from 'react-icons/ci';
import restrunt from '../siteComp/img/restrunt.jpg';


function Evluotion() {
   const Eve2022 = {
    heading: "The challenges",
    info: "The challenges of 2020 tested our resilience and creativity like never before...",
    subhead: "Key Highlights",
    task1: "Menuuu at Home' meal kits launched",
    task2: "Takeout and delivery programs",
    task3: "Increased local supplier support",
    task4: "Virtual cooking classes introduced"
  };

  const Eve2023 = {
    heading: "The Art of Preparation",
    info: "Excellence begins hours before the first guest arrives...",
    subhead: "Key Highlights",
    task1: "Hand-selected ingredients from local suppliers",
    task2: "Traditional knife techniques for perfect cuts",
    task3: "Seasonal menu adjustments based on availability",
    task4: "Fresh pasta made daily from scratch",
    task5: "House-made stocks simmered for 12+ hours",
    task6: "Artisanal bread baked throughout the day"
  };

  const Eve2024 = {
    heading: "Culinary Excellence",
    info: "Today, Menuuu stands as a cornerstone of the local culinary scene...",
    subhead: "Key Highlights",
    task1: "25-person professional team",
    task2: "On-site herb garden established",
    task3: "Advanced fermentation program",
    task4: "Regional culinary destination status"
  };

  const [info, setInfo] = useState(Eve2022);
  const [selected, setSelected] = useState('Eve2022');

  return (
    <div className="evolution-wrapper">
      <h1 className="main-heading">Restaurant Evolution</h1>
      <p className="sub-heading">From humble beginnings to culinary destination...</p>

      <div className="button-group">
        <button
          className={`evo-btn ${selected === 'Eve2022' ? 'active' : ''}`}
          onClick={() => {
            setInfo(Eve2022);
            setSelected('Eve2022');
          }}>
          Kitchen Life
        </button>
        <button
          className={`evo-btn ${selected === 'Eve2023' ? 'active' : ''}`}
          onClick={() => {
            setInfo(Eve2023);
            setSelected('Eve2023');
          }}>
          Daily Prop
        </button>
        <button
          className={`evo-btn ${selected === 'Eve2024' ? 'active' : ''}`}
          onClick={() => {
            setInfo(Eve2024);
            setSelected('Eve2024');
          }}>
          Service
        </button>
      </div>

      <div className="evolution-content">
        <div className="evolution-text">
          <h2><CiStar className="icon" /> {info.heading}</h2>
          <p><CiLollipop className="icon" /> {info.info}</p>
          <ul className="evo-list">
            <h4>{info.subhead}</h4>
            {[info.task1, info.task2, info.task3, info.task4, info.task5, info.task6].map((task, idx) => (
              task ? (
                <li key={idx}>
                  <CiPaperplane className="icon bullet" />
                  {task}
                </li>
              ) : null
            ))}
          </ul>
        </div>
        <div className="evolution-image">
          <img src={restrunt} alt="restaurant" />
        </div>
      </div>
    </div>
  );
}


      export default Evluotion