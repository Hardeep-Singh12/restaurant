import React, { useState } from 'react'
import "./aboutUS.css"
import { CiStar, CiLollipop, CiPaperplane } from 'react-icons/ci';
import food1 from '../siteComp/img/food1.jpg';
import restrunt from '../siteComp/img/restrunt.jpg';

function BehindTheSeen() {
  const kitchenLife = {
    heading: "A Day in Our Kitchen",
    info: "Step into the heart of Menuuu, where culinary magic happens daily. Our kitchen is a symphony of organized chaos...",
    subhead: "Daily Highlights",
    tasks: [
      "5:30 AM - Fresh bread baking begins",
      "7:00 AM - Ingredient delivery and quality check",
      "9:00 AM - Sauce preparation and stock making",
      "2:00 PM - Final prep and mise en place",
      "5:00 PM - Service begins with precision timing",
    ],
  };

  const dailyPrep = {
    heading: "The Art of Preparation",
    info: "Excellence begins hours before the first guest arrives. Our daily preparation is a meticulous process...",
    subhead: "Daily Highlights",
    tasks: [
      "Hand-selected ingredients from local suppliers",
      "Traditional knife techniques for perfect cuts",
      "Seasonal menu adjustments based on availability",
      "Fresh pasta made daily from scratch",
      "House-made stocks simmered for 12+ hours",
    ],
  };

  const service = {
    heading: "The Dance of Service",
    info: "Evening service at Menuuu is like a carefully choreographed dance. Every team member knows their role...",
    subhead: "Daily Highlights",
    tasks: [
      "Synchronized timing across all stations",
      "Quality check for every single plate",
      "Seamless communication between front and back",
      "Adaptability to special dietary requests",
      "Maintaining consistency throughout service",
    ],
  };

  const [info, setInfo] = useState(kitchenLife);
  const [selected, setSelected] = useState('kitchen');

  const handleSelect = (key) => {
    setSelected(key);
    if (key === 'kitchen') setInfo(kitchenLife);
    if (key === 'prep') setInfo(dailyPrep);
    if (key === 'service') setInfo(service);
  };

  return (
    <div className="bts-container">
      <h1 className='bts-main-heading'>Behind the Scenes</h1>
      <p className='bts-sub-heading'>Discover the passion, precision, and teamwork that goes into creating every memorable dining experience at Menuuu.</p>

      <div className="bts-btn-group">
        <button className={`bts-btn ${selected === 'kitchen' ? 'active' : ''}`} onClick={() => handleSelect('kitchen')}>Kitchen Life</button>
        <button className={`bts-btn ${selected === 'prep' ? 'active' : ''}`} onClick={() => handleSelect('prep')}>Daily Prep</button>
        <button className={`bts-btn ${selected === 'service' ? 'active' : ''}`} onClick={() => handleSelect('service')}>Service</button>
      </div>

      <div className="bts-content">
        <div className="bts-info">
          <h2><CiStar className='bts-icon' /> {info.heading}</h2>
          <p>{info.info}</p>
          <h4 className='bts-subhead'><CiLollipop /> {info.subhead}</h4>
          <ul>
            {info.tasks.map((task, index) => (
              <li key={index}><CiPaperplane className='bts-icon-task' /> {task}</li>
            ))}
          </ul>
        </div>
        <div className="bts-images">
          <img src={food1} alt="kitchen scene" className="bts-img" />
          <img src={restrunt} alt="restaurant" className="bts-img" />
        </div>
      </div>
    </div>
  );
}

export default BehindTheSeen