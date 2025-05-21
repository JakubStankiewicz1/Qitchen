import React from 'react';
import "./navbar.css";
import { FaHouse } from "react-icons/fa6";
import NavbarFeatureElement from '../NavbarFeatureElement/NavbarFeatureElement';
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../App';
import { MdTableBar } from "react-icons/md";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="navbar">
        <div className="navbarContainer">
            {/* First Part */}
            <div className="navbarContainerFirst">
                <div className="navbarContainerFirstContainer">
                    <p className="navbarContainerFirstContainerText">
                        Qitchen
                    </p>
                </div>
            </div>

            {/* Line Div */}
            <div className="navbarContainerLine">
                <div className="navbarContainerLineDiv" />
            </div>

            {/* Second Part */}
            <div className="navbarContainerSecond">
                <div className="navbarContainerSecondContainer">
                    {/* Left Part */}
                    <div className="navbarContainerSecondContainerLeft">
                        <div className="navbarContainerSecondContainerLeftContainer">
                            <FaHouse className="navbarContainerSecondContainerLeftContainerIcon" />
                        </div>
                    </div>

                    {/* Right Part */}
                    <NavLink to="/" className="navbarContainerSecondContainerRight">
                        <div className="navbarContainerSecondContainerRightContainer">
                            <p className="navbarContainerSecondContainerRightContainerText inter">
                                Dashboards
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>

            {/* Line Div */}
            <div className="navbarContainerLine">
                <div className="navbarContainerLineDiv" />
            </div>

            {/* Third Part */}
            <div className="navbarContainerThird">
                <div className="navbarContainerThirdContainer">
                    <p className="navbarContainerThirdContainerText inter">
                        Features
                    </p>
                </div>
            </div>

            {/* Fourth Part */}
            <div className="navbarContainerFourth">
                <div className="navbarContainerFourthContainer">
                    <NavbarFeatureElement icon={assets.reservedIcon} text={"Reservations"} link={"/reservations"} />
                    <NavbarFeatureElement icon={assets.tablesIcon} text={"Tables"} link={"/room"} />
                </div>
            </div>

            {/* Logout Button */}
            <div className="navbarContainerLogout">
                <button className="logoutButton" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar