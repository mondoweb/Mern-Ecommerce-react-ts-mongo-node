import Searchbar from "./Searchbar"
import { logo } from "../../assets/js/logo"
import { Link } from "react-router-dom"
import './styles/Navbar.css'

import { icons } from "../../assets/js/icons_navBar"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-Link" >

                <nav className="navbar-link">

    {/* <Link 
            to={menu.title}  key={menu.title} > {menu.name}
        </Link> */}
                    <Link to="/">  Home  </Link>
                    <Link to="/products">  Prodotti   </Link>
                </nav>
            </div>
            <div className="nav-item">
                <Searchbar />
            </div>
            <div className="nav-btns-container">
                {
                    icons.map(i => (
                        <button title={i.title} key={i.title} className="nav-btn">
                            {i.icon}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
