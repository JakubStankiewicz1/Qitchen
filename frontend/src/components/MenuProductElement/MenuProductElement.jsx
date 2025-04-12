import React from 'react';
import "./menuProductElement.css";

const MenuProductElement = ({ image, title, icon, price, description }) => {
  return (
    <div className="menuProductElement">
        <div className="menuProductElementContainer">
            {/* Left Part */}
            <div className="menuProductElementContainerLeft">
                <div className="menuProductElementContainerLeftContainer">
                    <img src={image} alt="" className="menuProductElementContainerLeftContainerImage" />
                </div>
            </div>

            {/* Right Part */}
            <div className="menuProductElementContainerRight">
                <div className="menuProductElementContainerRightContainer">
                    {/* Top Part */}
                    <div className="menuProductElementContainerRightContainerTop">
                        <div className="menuProductElementContainerRightContainerTopContainer">
                            {/* Left Part */}
                            <div className="menuProductElementContainerRightContainerTopLeft">
                                <p className="menuProductElementContainerRightContainerTopLeftText">
                                    {title}
                                </p>
                            </div>

                            {/* Optional Icon */}
                            <div className="menuProductElementContainerRightContainerTopContainerIcon">
                                <div className="menuProductElementContainerRightContainerTopContainerIconContainer">
                                    {
                                        icon ? <img src={icon} className='menuProductElementContainerRightContainerTopContainerIconContainerIcon'  /> : null
                                    }
                                </div>
                            </div>

                            {/* Dots */}
                            <div className="menuProductElementContainerRightContainerTopContainerDots"></div>

                            {/* Right Part */}
                            <div className="menuProductElementContainerRightContainerTopContainerRight">
                                <div className="menuProductElementContainerRightContainerTopContainerRightContainer">
                                    <p className="menuProductElementContainerRightContainerTopContainerRightContainerText">
                                        ${price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="menuProductElementContainerRightContainerBottom">
                        <div className="menuProductElementContainerRightContainerBottomContainer">
                            <p className="menuProductElementContainerRightContainerBottomContainerText">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuProductElement