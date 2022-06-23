import Searchbar from "./Searchbar"
import Logo from "../../assets/logo_transparent.png"
import { ClipboardCheckIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"
import './styles/Navbar.css'

const icons = [
    {
        title: 'Profilo',
        icon: <UserIcon className="nav-icon" />
    },
    {
        title: 'Ordini',
        icon: <ClipboardCheckIcon className="nav-icon" />
    },
    {
        title: 'Carrello',
        icon: <ShoppingCartIcon className="nav-icon" />
    },
]

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav-item" />
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
