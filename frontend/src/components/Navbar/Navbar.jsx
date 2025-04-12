import React, { useState } from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import assets from '../../assets/assets';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

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
            <div className="navbarContainerSecond">
                <div className="navbarContainerSecondContainer">
                    <p className="navbarContainerSecondContainerText">
                        Qitchen
                    </p>
                </div>
            </div>

            {/* Third Element */}
            <NavLink className="navbarContainerThird">
                <div className="navbarContainerThirdContainer">
                    <p className="navbarContainerThirdContainerText inter">
                        Menu
                    </p>
                </div>
            </NavLink>

            {/* Fourth Element */}
            <NavLink className="navbarContainerFourth">
                <div className="navbarContainerFourthContainer">
                    <p className="navbarContainerFourthContainerText inter">
                        About
                    </p>
                </div>
            </NavLink>

            {/* Fifth Element */}
            <NavLink className="navbarContainerFifth">
                <div className="navbarContainerFifthContainer">
                    <p className="navbarContainerFifthContainerText inter">
                        Book a table
                    </p>
                </div>
            </NavLink>
        </div>

        <div className="navbarContainerDropdownMenu">
                <div className="navbarContainerDropdownMenuContainer">
                    {/* First Part */}
                    <div className="navbarContainerDropdownMenuContainerFirst">
                        <div className="navbarContainerDropdownMenuContainerFirstContainer">
                            <img src={assets.gridIcon} alt="" />
                        </div>
                    </div>

                    {/* Second Part */}
                    <NavLink className="navbarContainerDropdownMenuContainerSecond">
                        <div className="navbarContainerDropdownMenuContainerSecondContainer">
                            <p className="navbarContainerDropdownMenuContainerSecondContainerText">
                                Menu
                            </p>
                        </div>
                    </NavLink>

                    {/* Third Part */}
                    <NavLink className="navbarContainerDropdownMenuContainerThird">
                        <div className="navbarContainerDropdownMenuContainerThirdContainer">
                            <p className="navbarContainerDropdownMenuContainerThirdContainerText">
                                Reservation
                            </p>
                        </div>
                    </NavLink>

                    {/* Fourth Part */}
                    <NavLink className="navbarContainerDropdownMenuContainerFourth">
                        <div className="navbarContainerDropdownMenuContainerFourthContainer">
                            <p className="navbarContainerDropdownMenuContainerFourthContainerText">
                                About
                            </p>
                        </div>
                    </NavLink>

                    {/* Fifth Part */}
                    <NavLink className="navbarContainerDropdownMenuContainerFifth">
                        <div className="navbarContainerDropdownMenuContainerFifthContainer">
                            <p className="navbarContainerDropdownMenuContainerFifthContainerText">
                                Contact
                            </p>
                        </div>
                    </NavLink>

                    {/* Sixth Part */}
                    <NavLink className="navbarContainerDropdownMenuContainerSixth">
                        <div className="navbarContainerDropdownMenuContainerSixthContainer">
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