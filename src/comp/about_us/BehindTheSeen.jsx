import React, { useState } from 'react'
import styles from "./BehaindTheSeen.module.css"
import { CiStar, CiLollipop, CiPaperplane } from 'react-icons/ci'
import food1 from '../siteComp/img/food1.jpg'
import restrunt from '../siteComp/img/restrunt.jpg'

function BehindTheSeen() {
  let kitchenLife = {
    heading: "A Day in Our Kitchen",
    info: "Step into the heart of Menuuu, where culinary magic happens daily. Our kitchen is a symphony of organized chaos, where every team member plays their part in creating extraordinary dining experiences. From the early morning prep to the final plate of the evening service, our kitchen operates with precision, passion, and an unwavering commitment to excellence. Every day brings new challenges, new creations, and new opportunities to perfect our craft.",
    subhead: "Daily Highlights",
    task1: "5:30 AM - Fresh bread baking begins",
    task2: "7:00 AM - Ingredient delivery and quality check",
    task3: "9:00 AM - Sauce preparation and stock making",
    task4: "11:00 AM - Protein preparation and seasoning",
    task5: "2:00 PM - Final prep and mise en place",
    task6: "5:00 PM - Service begins with precision timing",
  }

  let DailyProp = {
    heading: "The Art of Preparation",
    info: "Excellence begins hours before the first guest arrives. Our daily preparation is a meticulous process that ensures every ingredient is perfectly prepared, every sauce is properly seasoned, and every component is ready for the evening's service. This behind-the-scenes work is where the foundation of great dining experiences is built. Every knife cut, every seasoning adjustment, and every quality check contributes to the final masterpiece that reaches your table.",
    subhead: "Daily Highlights",
    task1: "Hand-selected ingredients from local suppliers",
    task2: "Traditional knife techniques for perfect cuts",
    task3: "Seasonal menu adjustments based on availability",
    task4: "Fresh pasta made daily from scratch",
    task5: "House-made stocks simmered for 12+ hours",
    task6: "Artisanal bread baked throughout the day",
  }

  let service = {
    heading: "The Dance of Service",
    info: "Evening service at Menuuu is like a carefully choreographed dance. Every team member knows their role, every timing is precise, and every plate that leaves the kitchen represents the culmination of hours of preparation and years of experience. The energy during service is electric – focused, intense, and filled with the satisfaction that comes from creating something beautiful together. It's where all our preparation, passion, and teamwork come together to create unforgettable dining experiences.",
    subhead: "Daily Highlights",
    task1: "Synchronized timing across all stations",
    task2: "Quality check for every single plate",
    task3: "Seamless communication between front and back",
    task4: "Adaptability to special dietary requests",
    task5: "Maintaining consistency throughout service",
    task6: "Post-service review and improvement planning",
  }

  let [info, setInfo] = useState(kitchenLife)
  let [Data, setData] = useState('kitchenLife')

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Behind the Scenes</h1>
      <p className={styles.subHead}>
        Discover the passion, precision, and teamwork that goes into creating every memorable dining experience at Menuuu.
      </p>

      {/* Buttons */}
      <div className='styles.btnDiv'>
        <button
          className={styles.btnAll}
          onClick={() => { setInfo(kitchenLife); setData('kitchenLife') }}
          style={{
            backgroundColor: Data === 'kitchenLife' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'kitchenLife' ? 'white' : 'black'
          }}
        >
          Kitchen Life
        </button>

        <button
          className={styles.btnAll}
          onClick={() => { setInfo(DailyProp); setData('DailyProp') }}
          style={{
            backgroundColor: Data === 'DailyProp' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'DailyProp' ? 'white' : 'black'
          }}
        >
          Daily Prop
        </button>

        <button
          className={styles.btnAll}
          onClick={() => { setInfo(service); setData('service') }}
          style={{
            backgroundColor: Data === 'service' ? 'rgb(248, 79, 17)' : 'white',
            color: Data === 'service' ? 'white' : 'black'
          }}
        >
          Service
        </button>
      </div>
      {/* Info & Images */}
      <div className={styles.infoContainer}>
        <div  className={styles.ulStyle}>
          <h2>
            <CiStar style={{ position: "relative", top: "2px", color: "rgb(248, 79, 17)" }} /> {info.heading}
          </h2>
          <p>{info.info}</p>

          <ul >
            <h4 >
              <CiLollipop /> {info.subhead}
            </h4>
            <li><CiPaperplane className={styles.icon} /> {info.task1}</li>
            <li><CiPaperplane className={styles.icon} /> {info.task2}</li>
            <li><CiPaperplane className={styles.icon} /> {info.task3}</li>
            <li><CiPaperplane className={styles.icon} /> {info.task4}</li>
            <li><CiPaperplane className={styles.icon} /> {info.task5}</li>
            <li><CiPaperplane className={styles.icon} /> {info.task6}</li>
          </ul>

        </div>
        <span className={styles.imageGroup}>
          <img src={food1} alt="kitchen" className={styles.image}
            style={{

            }} />

        </span>
      </div>
    </div>
  )
}

export default BehindTheSeen
