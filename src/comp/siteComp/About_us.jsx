import React from 'react'
import ChefSection from"../about_us/ChefSection"
import style from "./About_us.module.css"
import BehindTheSeen from "../about_us/BehindTheSeen"
import Evluotion from "../about_us/Evluotion"


function About_us() {
  return (
    <>
 <div className={style.background}>
  <h1 className={style.head}>Our Culinary Story</h1>
    <p  className={style.para}>Where passion meets artistry, and every dish tells a tale of dedication, innovation, and the pursuit of culinary excellence.</p>
  <div style={{ display: "flex", justifyContent: "center" }}>
  <button className={style.btn}>Begin the Joureny</button></div>
    </div>

    <ChefSection/>
    <BehindTheSeen/>
    <Evluotion />
    </>
  )
}

export default About_us