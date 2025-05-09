import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Added useLocation
import "./navbar.css";
import assets from '../../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route

    const isActive = (path) => location.pathname === path; // Check if the path matches the current route

    return (
        <div className="navbar">
            <div className="navbarContainer">
                {/* Firt Element */}
                <div className="navbarContainerFirst" onClick={() => setIsOpen(!isOpen)}>
                    <div className="navbarContainerFirstContainer">
                        <div className={isOpen ? 'navbarContainerFirstContainerDivOneOpen' : 'navbarContainerFirstContainerDivOneClosed'} />
                        <div className={isOpen ? 'navbarContainerFirstContainerDivTwoOpen' : 'navbarContainerFirstContainerDivTwoClosed'} />
                        <div className={isOpen ? 'navbarContainerFirstContainerDivThreeOpen' : 'navbarContainerFirstContainerDivThreeClosed'} />
                    </div>
                </div>

                {/* Second Element */}
                <NavLink to="/" className="navbarContainerSecond" onClick={() => setIsOpen(false)}>
                    <div className="navbarContainerSecondContainer">
                        <p className="navbarContainerSecondContainerText">
                            Qitchen
                        </p>
                    </div>
                </NavLink>

                {/* Third Element */}
                <NavLink to="/menu" className="navbarContainerThird" onClick={() => setIsOpen(false)}>
                    <div className="navbarContainerThirdContainer">
                        <p className="navbarContainerThirdContainerText inter active">
                            Menu
                        </p>
                    </div>
                </NavLink>

                {/* Fourth Element */}
                <NavLink to="/about" className="navbarContainerFourth" onClick={() => setIsOpen(false)}>
                    <div className="navbarContainerFourthContainer">
                        <p className="navbarContainerFourthContainerText inter">
                            About
                        </p>
                    </div>
                </NavLink>

                {/* Fifth Element */}
                <NavLink to="/reservation" className="navbarContainerFifth" onClick={() => setIsOpen(false)}>
                    <div className="navbarContainerFifthContainer">
                        <p className="navbarContainerFifthContainerText inter">
                            Book a table
                        </p>
                    </div>
                </NavLink>
            </div>

            <div className={isOpen ? 'navbarContainerDropdownMenuOpen' : 'navbarContainerDropdownMenuClosed'}>
                <div className="navbarContainerDropdownMenuContainer">
                    {/* First Part */}
                    <div className="navbarContainerDropdownMenuContainerFirst">
                        <div className="navbarContainerDropdownMenuContainerFirstContainer">
                            <img src={assets.gridIcon} alt="" />
                        </div>
                    </div>

                    {/* Second Part */}
                    <NavLink to="/menu" className="navbarContainerDropdownMenuContainerSecond" onClick={() => setIsOpen(false)}>
                        <div className={`navbarContainerDropdownMenuContainerSecondContainer ${isActive('/menu') ? 'active' : ''}`}>
                            <p className="navbarContainerDropdownMenuContainerSecondContainerText">
                                Menu
                            </p>
                        </div>
                    </NavLink>

                    {/* Third Part */}
                    <NavLink to="/reservation" className="navbarContainerDropdownMenuContainerThird" onClick={() => setIsOpen(false)}>
                        <div className={`navbarContainerDropdownMenuContainerThirdContainer ${isActive('/reservation') ? 'active' : ''}`}>
                            <p className="navbarContainerDropdownMenuContainerThirdContainerText">
                                Reservation
                            </p>
                        </div>
                    </NavLink>

                    {/* Fourth Part */}
                    <NavLink to="/about" className="navbarContainerDropdownMenuContainerFourth" onClick={() => setIsOpen(false)}>
                        <div className={`navbarContainerDropdownMenuContainerFourthContainer ${isActive('/about') ? 'active' : ''}`}>
                            <p className="navbarContainerDropdownMenuContainerFourthContainerText">
                                About
                            </p>
                        </div>
                    </NavLink>

                    {/* Fifth Part */}
                    <NavLink to="/contact" className="navbarContainerDropdownMenuContainerFifth" onClick={() => setIsOpen(false)}>
                        <div className={`navbarContainerDropdownMenuContainerFifthContainer ${isActive('/contact') ? 'active' : ''}`}>
                            <p className="navbarContainerDropdownMenuContainerFifthContainerText">
                                Contact
                            </p>
                        </div>
                    </NavLink>

                    {/* Sixth Part */}
                    <NavLink to="/blog" className="navbarContainerDropdownMenuContainerSixth" onClick={() => setIsOpen(false)}>
                        <div className={`navbarContainerDropdownMenuContainerSixthContainer ${isActive('/blog') ? 'active' : ''}`}>
                            <p className="navbarContainerDropdownMenuContainerSixthContainerText">
                                Blog
                            </p>
                        </div>
                    </NavLink>

                </div>
            </div>

        </div>
    )
}

export default Navbar