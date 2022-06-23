import { SearchIcon } from "@heroicons/react/outline"
import './styles/Searchbar.css'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Cerca" />
            <SearchIcon className="searchbar-icon" />
        </div>
    )
}

export default Searchbar
