import React from 'react';
import "./homeElement.css";
import { NavLink } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const HomeElement = ({ image, text, link }) => {
  return (
    <div className="homeElement">
        <div className="homeElementContainer">
            {/* Image Container */}
            <div className="homeElementContainerImage">
                <div className="homeElementContainerImageContainer">
                    <img src={image} alt="" className="homeElementContainerImageContainerImage" />
                </div>
            </div>



            {/* Title Container */}
            <NavLink className="homeElementContainerTitle" to={link}>
                <div className="homeElementContainerTitleContainer">
                    <p className="homeElementContainerTitleContainerText">
                        {text}
                    </p>

                    {/* Icon Container */}
                    <div className="homeElementContainerTitleContainerIcon">
                        <div className="homeElementContainerTitleContainerIconContainer">
                            <GoArrowRight className="homeElementContainerTitleContainerIconContainerIcon" />
                        </div>
                    </div>
                </div>
            </NavLink>



        </div>
    </div>
  )
}

export default HomeElement