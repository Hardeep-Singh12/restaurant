import style from './home.module.css'
import ChefSection from '../Home/ChefSection';
import Sesional from '../Home/Sesional';
import { Link } from 'react-router-dom';
function Home() {

  return (
    <>
      <div className={style.greting}  >
        <h1 className={style.gretingHeading}>  Good Morning</h1><p className={style.gretingMess}>
          Welcome to Mane - Where Culinary Artistry Meets Genuine Hospitality</p>
          <div>
        <Link to="/main/Feed" className={style.gretingBtn} style={{ backgroundColor: "rgb(249, 100, 46)" }}>explore our menu</Link><button className={style.gretingBtn } onClick={() => alert("we well send you an email")} >reseve your table</button></div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////// */}
          <Sesional/>

      <div className={style.chefSection}>
        <h1 className={style.chefSecHeading}>Chef`s Current Inspiration</h1>
        <p className={style.chefSecSubHead}> Discover the seasonal story behind our current menu, from ingredient selection to culinary philosophy
        </p>
          <ChefSection />
        </div>

    </>
  )
}

export default Home