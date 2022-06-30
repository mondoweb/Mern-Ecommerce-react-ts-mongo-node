import Searchbar from "./Searchbar";
import { logo } from "../../assets/js/logo";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

import { icons, links } from "../../assets/js/icons_navBar";

const Navbar = () => {
  return (
    //
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className="nav-Link">
        <nav className="navbar-link">
          {links.map((el) => (
            <Link to={el.link} key={el.link}>  {el.nome}    </Link>
          ))}

          {/* <Link to="/"> Home </Link>
          <Link to="/products"> Prodotti </Link> */}
        </nav>
      </div>
      <div className="nav-item">
        <Searchbar />
      </div>
      <div className="nav-btns-container">
        {icons.map((i) => (
          <button title={i.title} key={i.title} className="nav-btn">
            {i.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
