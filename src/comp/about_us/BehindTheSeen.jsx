import React, { useState } from 'react'
import "./aboutUS.css"
import { CiStar, CiLollipop, CiPaperplane } from 'react-icons/ci';
import food1 from '../siteComp/img/food1.jpg';
import restrunt from '../siteComp/img/restrunt.jpg';

function BehindTheSeen() {
  let kitchenLife = {
    heading: "A Day in Our Kitchen",
    info: "Step into the heart of Menuuu, where culinary magic happens daily. Our kitchen is a symphony of organized chaos, where every team member plays their part in creating extraordinary dining experiences. From the early morning prep to the final plate of the evening service, our kitchen operates with precision, passion, and an unwavering commitment to excellence. Every day brings new challenges, new creations, and new opportunities to perfect our craft.",
    subhead: "Daily Highlights",
    task1: "5:30 AM - Fresh bread baking begins ",
    task2: "7:00 AM - Ingredient delivery and quality check",
    task3: "9:00 AM - Sauce preparation and stock making",
    task4: "11:00 AM - Protein preparation and seasoning",
    task4: "2:00 PM - Final prep and mise en place",
    task5: "5:00 PM - Service begins with precision timing",
  }
  let DailyProp = {
    heading: "The Art of Preparation",
    info: "Excellence begins hours before the first guest arrives. Our daily preparation is a meticulous process that ensures every ingredient is perfectly prepared, every sauce is properly seasoned, and every component is ready for the evening's service. This behind-the-scenes work is where the foundation of great dining experiences is built. Every knife cut, every seasoning adjustment, and every quality check contributes to the final masterpiece that reaches your table.",
    subhead: "Daily Highlights",
    task1: "Hand-selected ingredients from local suppliers",
    task2: "Traditional knife techniques for perfect cuts",
    task3: "Seasonal menu adjustments based on availability",
    task4: "Fresh pasta made daily from scratch",
    task4: "House-made stocks simmered for 12+ hours",
    task5: "Artisanal bread baked throughout the day",
  }
  let service = {
    heading: "The Dance of Service",
    info: "Evening service at Menuuu is like a carefully choreographed dance. Every team member knows their role, every timing is precise, and every plate that leaves the kitchen represents the culmination of hours of preparation and years of experience. The energy during service is electric – focused, intense, and filled with the satisfaction that comes from creating something beautiful together. It's where all our preparation, passion, and teamwork come together to create unforgettable dining experiences.",
    subhead: "Daily Highlights",
    task1: "Synchronized timing across all stations",
    task2: "Quality check for every single plate",
    task3: "Seamless communication between front and back",
    task4: "Adaptability to special dietary requests",
    task4: "Maintaining consistency throughout service",
    task5: "Post-service review and improvement planning"
  }


  let [info, setInfo] = useState(kitchenLife);
  let [Data, setData] = useState('kitchenLife');
  return (
    <>
      <div className='container'>
        <h1 className='mainHeading'>Behind the Scenes</h1>
        <p className='subHead'>Discover the passion, precision, and teamwork that goes into creating every memorable dining experience at Menuuu.</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className='btnAll'
          onClick={() => {
            setInfo(kitchenLife);
            setData('kitchenLife');
          }}
          style={{
            backgroundColor: Data === 'kitchenLife' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'kitchenLife' ? 'white' : 'black'
          }}
        >
          Kitchen Life
        </button>

        <button
          className='btnAll'
          onClick={() => {
            setInfo(DailyProp);
            setData('DailyProp');
          }}
          style={{
            backgroundColor: Data === 'DailyProp' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'DailyProp' ? 'white' : 'black'
          }}
        >
          Daily Prop</button>

        <button
          className='btnAll'
          onClick={() => {
            setInfo(service);
            setData('service');
          }}
          style={{
            backgroundColor: Data === 'service' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'service' ? 'white' : 'black'
          }}
        >
          service
        </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "80px 5px", padding: "20px", borderRadius: "8px", fontSize: "23px" }}>
          <span className='infoContainer' style={{ marginRight: "20px", padding: "20px" }}>
            <h2><CiStar style={{ position: "relative", top: "2px", color: "rgb(248, 79, 17)" }} /> {info.heading}</h2>
            <p>{info.info}</p>
            <ul style={{ listStyle: "none", marginTop: "60px" }}>
              <h4 style={{ paddingBottom: "20px" }}><CiLollipop /> {info.subhead}</h4>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.task1}</li>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.task2}</li>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.task3}</li>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.task4}</li>
              <li><CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />{info.task5}</li>
            </ul>
          </span>
          <span >
            <img src={food1} alt="don't" style={{ display: "block", width: "400px", height: "380px", margin: "10px", borderRadius: "80px", boxShadow: "2px  2px 20px 20px rgb(176, 175, 174) " }} />
            <img src={restrunt} alt="don't" style={{ width: "400px", height: "380px", margin: "10px", borderRadius: "80px", boxShadow: "2px  2px 20px 20px rgb(176, 175, 174) " }} />
          </span>
        </div>
      </div>
    </>
  )
}

export default BehindTheSeen