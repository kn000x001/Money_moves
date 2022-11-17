import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faChartPie, faCircleInfo, faBorderAll, 
    faLocationDot, faGear, faCommentDots, faArrowRightFromBracket, faBell,
    faBars } from '@fortawesome/free-solid-svg-icons'
import Toggler from "./toggler"

const Hamburger = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="col-1 d-lg-none">
            <Button onClick={handleShow}>
               <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Money Moves</Offcanvas.Title>
                <select className="d-none d-md-block form-select-sm ms-4 col-2" aria-label="Default select example">
                    <option defaultValue>ka</option>
                    <option value="1">Eng</option>
                    <option value="2">Ru</option>
                </select>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <header className="d-flex flex-column col-12 justify-content-between p-2">
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

                    <Toggler></Toggler>
                </header>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>
  );
}

export default Hamburger;