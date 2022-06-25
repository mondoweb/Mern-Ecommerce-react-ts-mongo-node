import Navbar from "./Navbar"
import './styles/Layout.css'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="layout"> 
                {props.children}
            </div>
        </div>
    )
}

export default Layout
