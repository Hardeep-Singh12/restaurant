import { IoIosHome } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { PiChefHatDuotone, PiDiscordLogoBold } from "react-icons/pi";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"; // Replace with actual CSS file name
import { useState } from "react";

function Navbar() {
  // const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={style.nav}>
      <div className={style.head}>
        <PiDiscordLogoBold className={style.logo} />
        Menuuu <br /> spaCulinary Artistry
      </div>
  <button
        className={style.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <ul className={`${style.menu_list} ${isOpen ? style.open : ""}`}>
        <Link to="/Home" onClick={() => setIsOpen(false)}>
          <IoIosHome /> Home
        </Link>
        <Link to="/Feed" onClick={() => setIsOpen(false)}>
          <PiChefHatDuotone /> Menu
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
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
