import React from 'react';
import "./navbarFeatureElement.css";

import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavbarFeatureElement = ({ icon, text, link }) => {
    const location = useLocation();

  return (
    <NavLink to={link} className={ `navbarFeatureElement ${location.pathname === link ? "navbarFeatureElementActive" : ""}`}>
        <div className="navbarFeatureElementContainer">
            {/* Left Part */}
            <div className="navbarFeatureElementContainerLeft">
                <div className="navbarFeatureElementContainerLeftContainer">
                    <img src={icon} alt="" className='navbarFeatureElementContainerLeftContainerIcon' />
                </div>
            </div>

            {/* Right Part */}
            <div className="navbarFeatureElementContainerRight">
                <div className="navbarFeatureElementContainerRightContainer">
                    <p className="navbarFeatureElementContainerRightContainerText">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default NavbarFeatureElement