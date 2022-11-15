import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faChartPie, faCircleInfo, faBorderAll, 
        faLocationDot, faGear, faCommentDots, faArrowRightFromBracket, faBell,
        faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const Header =() => {
return(
    <>
    
    <header className="d-none d-lg-flex flex-column col-2 justify-content-between p-2">
        <div className="navigation d-lg-flex flex-column mt-5">
            <div className="d-flex nav">
                <FontAwesomeIcon icon={faHouse} className="me-2"/>
                <p>მთავარი</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faUser} className="me-2"/>
                <p className="">ჩემი გვერდი</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faChartPie} className="me-2"/>
                <p>ფინანსები</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faBorderAll} className="me-2"/>
                <p>ვიჯეტები</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faCircleInfo} className="me-2"/>
                <p>ინფორმაცია</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faLocationDot} className="me-2"/>
                <p>სერვის ცენტრი</p>
            </div>

            <div className="d-flex nav">
                <FontAwesomeIcon icon={faGear} className="me-2"/>
                <p>კონფიგურაცია</p>
            </div>
            <div className="d-flex nav">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2"/>
                <p>გამოსვლა</p>
            </div>
        </div>
        
        <div className="navigation d-flex flex-column my-5">
            <h6>დასათაურება</h6>
            <div className="d-flex nav justify-content-between">
                <div className="d-flex nav align-items-center mt-2">
                    <FontAwesomeIcon icon={faCommentDots} className="me-2"/>
                    <p className="m-0">ჩათი</p>
                </div>
                <div className="message-number rounded-circle d-flex align-items-center justify-content-center p-2">
                    <p>4</p>
                </div>
            </div>
            <div className="d-flex nav align-items-center justify-content-between">
                <div className="d-flex my-2">
                    <FontAwesomeIcon icon={faBell} className="me-2"/>
                    <p className="m-0">შეტყობინება</p>
                </div>
                <div className="message-number rounded-circle d-flex align-items-center justify-content-center p-2">
                    <p>9</p>
                </div>
            </div>
        </div>

        <div className="border-top my-5">
            <div className="d-flex justify-content-center align-items-center day-night-cicle mt-3">
                <div id="day" className="p-2 d-flex">
                    <FontAwesomeIcon icon={faSun} className="me-2"/>
                    <p>Day</p>
                </div>

                <div id="night" className="p-2 d-flex">
                    <FontAwesomeIcon icon={faMoon} className="me-2"/>
                    <p>Night</p>
                </div>
            </div>
        </div>
    </header>
    </>
    )}

export default Header