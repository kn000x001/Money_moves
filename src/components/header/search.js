import { faChevronDown, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Hamburger from './offcanvas';


const Search = () => {
    return(
        <div className="row search__header d-flex justify-content-between">
        <div className="container d-flex justify-content-around row col-12 p-2 align-items-center search_container">
        <Hamburger></Hamburger>
            <div className="col-md-6 col-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon position-absolute"></FontAwesomeIcon>
                <input type="text" placeholder="ძიება" className="col-12 search-bar d-flex align-items-center p-2 ps-5" />
            </div>
            <div className="d-flex col-md-4 col-5 align-items-center">
                <div className="avatar_icon p-2 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="d-flex flex-column px-2">
                    <p className="m-0 individual">ფიზიკური პირი</p>
                    <h6 className="name">Giorgi Gvarashvili</h6>
                </div>

                <div className="dropdown">
                    <p className="m-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </p>

                    <ul className="dropdown-menu">
                        <li><p className="dropdown-item">Action</p></li>
                        <li><p className="dropdown-item">Another action</p></li>
                        <li><p className="dropdown-item">Something else here</p></li>
                    </ul>
                </div>

                <select className="d-none d-md-block form-select-sm ms-4 col-2" aria-label="Default select example">
                    <option defaultValue>ka</option>
                    <option value="1">Eng</option>
                    <option value="2">Ru</option>
                </select>
            </div>
        </div>
        </div>
    )
}

export default Search