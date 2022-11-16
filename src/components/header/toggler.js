import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import './toggler.css'

const Toggler = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme

    if(localStorage) {
        theme = localStorage.getItem('theme')
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    
    const switchTheme = (e) => {
        if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
        } else {
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;

        }
    };

    return (
        <div className={theme === "dark" ? clickedClass : ""} id="darkMode" onClick={(e) => switchTheme(e)}>
            <div className="border-top my-5" >
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
        </div>
    )
}

export default Toggler