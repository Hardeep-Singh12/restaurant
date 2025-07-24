import { IoIosHome } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { PiChefHatDuotone, PiDiscordLogoBold } from "react-icons/pi";
import { IoIosBook } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css"; 

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={style.nav}>
      <div className={style.head}>
        <PiDiscordLogoBold className={style.logo} />
        Menuuu <br /> spaCulinary Artistry
      </div>

      <ul className={style.menu_list}>
        <Link to="/home">
          <IoIosHome /> Home
        </Link>
        <Link to="/feed">
          <PiChefHatDuotone /> Menu
        </Link>

        <Link to="/about">
          <IoIosBook /> Our Story
        </Link>
      </ul>

      <button className={style.btn} onClick={() => alert("we well send you an email")}>
        <CiCalendarDate className={style.btnLogo} /> Reserve Table
      </button>
    </div>
  );
}

export default Navbar;
