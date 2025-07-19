import React, { useState } from 'react'
import "./aboutUS.css"
import { CiStar, CiLollipop, CiPaperplane } from 'react-icons/ci';
import restrunt from '../siteComp/img/restrunt.jpg';


function Evluotion() {
  let Eve2022 = {
    heading: "The challenges",
    info: "The challenges of 2020 tested our resilience and creativity like never before. We quickly adapted our operations to include takeout and delivery options, reimagining our dishes for off-premise dining while maintaining our quality standards. We launched 'Menuuu at Home' – meal kits that allowed guests to recreate our restaurant experience in their own kitchens. These kits included pre-prepared components, detailed instructions, and even wine pairings, bringing our culinary story directly to our community. The year also saw us deepen our commitment to supporting local suppliers who were facing their own challenges. We increased our direct purchases and helped promote other local businesses through collaborative events and social media campaigns.",
    subhead: "Key Highlights",
    task1: "Menuuu at Home' meal kits launched",
    task2: "Takeout and delivery programs",
    task3: "Increased local supplier support",
    task4: "Virtual cooking classes introduced"
  }
  let Eve2023 = {
    heading: "The Art of Preparation",
    info: "Excellence begins hours before the first guest arrives. Our daily preparation is a meticulous process that ensures every ingredient is perfectly prepared, every sauce is properly seasoned, and every component is ready for the evening's service. This behind-the-scenes work is where the foundation of great dining experiences is built. Every knife cut, every seasoning adjustment, and every quality check contributes to the final masterpiece that reaches your table.",
    subhead: "Key Highlights",
    task1: "Hand-selected ingredients from local suppliers",
    task2: "Traditional knife techniques for perfect cuts",
    task3: "Seasonal menu adjustments based on availability",
    task4: "Fresh pasta made daily from scratch",
    task5: "House-made stocks simmered for 12+ hours",
    task6: "Artisanal bread baked throughout the day",
  }
  let Eve2024 = {
    heading: "Culinary Excellence",
    info: "25-person professional teamToday, Menuuu stands as a cornerstone of the local culinary scene, known for our commitment to seasonal cuisine, sustainable practices, and exceptional hospitality. Our team has grown to 25 dedicated professionals who share our passion for creating memorable dining experiences. We've introduced advanced fermentation and preservation techniques, allowing us to capture the essence of peak-season ingredients year-round. Our on-site herb garden and partnership with local farms ensure that we have access to the freshest possible ingredients. Looking forward, we continue to evolve while staying true to our founding principles. Every dish we serve, every guest we welcome, and every relationship we build contributes to the ongoing story of Menuuu – a story that celebrates the artistry of cooking and the joy of sharing exceptional food.",
    subhead: "Key Highlights",
    task1: "25-person professional team",
    task2: "On-site herb garden established",
    task3: "Advanced fermentation program",
    task4: "FRegional culinary destination status",
  }


  let [info, setInfo] = useState(Eve2022)
  let [Data, setData] = useState('Eve2022')


  return (
    <>
      <div className='container'>
        <h1 className='mainHeading'>Restaurant Evolution</h1>
        <p className='subHead'>From humble beginnings to culinary destination, discover how Menuuu has grown while staying true to our core values and commitment to exceptional dining experiences.</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className='btnAll'
            onClick={() => {
              setInfo(Eve2022);
              setData('Eve2022');
            }}
            style={{
              backgroundColor: Data === 'Eve2022' ? 'rgb(248, 79, 17)' : 'white',
              color: Data === 'Eve2022' ? 'white' : 'black'
            }}
          >
            Kitchen Life
          </button>

          <button
            className='btnAll'
            onClick={() => {
              setInfo(Eve2023);
              setData('Eve2023');
            }}
            style={{
              backgroundColor: Data === 'Eve2023' ? 'rgb(248, 79, 17)' : 'white',
              color: Data === 'Eve2023' ? 'white' : 'black'
            }}
          >
            Daily Prop</button>

          <button
            className='btnAll'
            onClick={() => {
              setInfo(Eve2024);
              setData('Eve2024');
            }}
            style={{
              backgroundColor: Data === 'Eve2024' ? 'rgb(248, 79, 17)' : 'white',
              color: Data === 'Eve2024' ? 'white' : 'black'
            }}
          >
            service
          </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly", margin: "80px 5px", padding: "20px", borderRadius: "8px", fontSize: "23px" }}>
            <span style={{ marginRight: "20px", padding: "20px" }}>
              <h2>
                <CiStar style={{ position: "relative", top: "2px", color: "rgb(248, 79, 17)" }} />{" "}
                {info.heading}
              </h2>
              <p><CiLollipop /> {info.info}
              </p>
              <ul style={{ listStyle: "none", marginTop: "60px" }}>
                <h4 style={{ paddingBottom: "20px" }}>{info.subhead}
                </h4>
                {info.task1 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task1}
                  </li>
                )}
                {info.task2 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task2}
                  </li>
                )}
                {info.task3 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task3}
                  </li>
                )}
                {info.task4 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task4}
                  </li>
                )}
                {info.task5 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task5}
                  </li>
                )}
                {info.task6 && (
                  <li>
                    <CiPaperplane style={{ color: "rgb(248, 79, 17)", fontSize: "35px", marginRight: "20px", position: "relative", top: "10px" }} />
                    {info.task6}
                  </li>
                )}
              </ul>
            </span>
            <span>
              <img src={restrunt} alt="don't" style={{ width: "400px", height: "380px", margin: "10px", borderRadius: "80px", boxShadow: "2px  2px 20px 20px rgb(176, 175, 174) " }} /></span>
          </div>
        </div>
      </>
      )
}

      export default Evluotion