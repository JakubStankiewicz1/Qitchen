import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Added useLocation
import "./navbar.css";
import assets from '../../assets/assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route

    const isActive = (path) => location.pathname === path; // Check if the path matches the current route

    // Handle body scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            // Disable scrolling on the body
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            // Re-enable scrolling on the body
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        // Clean up the effect
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Toggle menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbarContainer">
                {/* First Element */}
                <div className="navbarContainerFirst" onClick={toggleMenu}>
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
                            <img src={assets.gridIcon} alt="Grid Icon" />
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